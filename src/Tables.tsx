import { categories } from "./constants";
import { Category } from "./types";
import { CategoryRows } from "./CategoryRows";
import { useUrlContext } from "./UrlContext";
import _ from "lodash";
import { useState, useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";

const normalizeString = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const fuzzyMatch = (text: string, search: string): boolean => {
  const normalizedText = normalizeString(text);
  const normalizedSearch = normalizeString(search);
  return normalizedText.includes(normalizedSearch);
};

export const Tables: React.FC = () => {
  const { state } = useUrlContext();
  const [search, setSearch] = useState("");

  const filteredCategories = search
    ? categories
        .map((category) => ({
          ...category,
          items: category.items.filter(
            (item) =>
              fuzzyMatch(item.name, search) || fuzzyMatch(item.code, search),
          ),
        }))
        .filter((category) => category.items.length > 0)
    : categories;

  const totals = _.flow([
    _.partialRight(_.flatMap, (category: Category) => category.items),
    _.partialRight(
      _.map,
      (item: { code: string; weightInGrams: number; maxPrice: number }) => {
        const pickedCount = _.get(state, item.code, 0);
        return {
          weight: item.weightInGrams * pickedCount,
          price: item.maxPrice * pickedCount,
        };
      },
    ),
    (items: { weight: number; price: number }[]) => ({
      weight: _.sumBy(items, "weight"),
      price: _.sumBy(items, "price"),
    }),
  ])(categories);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-container",
      children: "a.image-link",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="sticky top-0 z-10 bg-gray-100 dark:bg-neutral-900 w-full max-w-[1000px] px-4 py-2 flex flex-col gap-2 border-b border-gray-200 dark:border-neutral-700">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">
            Hmotnosť:{" "}
            <span className={totals.weight > 12000 ? "text-red-500" : ""}>
              {totals.weight}/12000g
            </span>
          </div>
          <div className="text-sm font-medium">
            Cena: {totals.price.toFixed(2)}€
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Hľadať..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 placeholder:text-slate-400 text-slate-700 text-base border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="px-3 py-2 bg-gray-200 dark:bg-neutral-700 rounded-md text-sm font-medium"
            >
              Zrušiť
            </button>
          )}
        </div>
      </div>
      <div id="gallery-container">
        <table
          id="main-table"
          className="table-fixed max-w-[1000px] w-full divide-y divide-gray-200 dark:divide-neutral-700"
        >
          <tbody>
            {filteredCategories.map((category, index) => {
              return (
                <CategoryRows
                  category={category}
                  key={category.name}
                  rowClassName={category.rowClassName}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
