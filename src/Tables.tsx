import { categories } from "./constants";
import { Category } from "./types";
import { CategoryRows } from "./CategoryRows";
import { useUrlContext } from "./UrlContext";
import LightGallery from "lightgallery/react";
import _ from "lodash";

export const Tables: React.FC = () => {
  const { state } = useUrlContext();

  const totals = _.flow([
    _.partialRight(_.flatMap, (category: Category) => category.items),
    _.partialRight(_.map, (item: { code: string; weightInGrams: number; maxPrice: number }) => {
      const pickedCount = _.get(state, item.code, 0);
      return {
        weight: item.weightInGrams * pickedCount,
        price: item.maxPrice * pickedCount,
      };
    }),
    (items: { weight: number; price: number }[]) => ({
      weight: _.sumBy(items, "weight"),
      price: _.sumBy(items, "price"),
    }),
  ])(categories);

  const onInit = () => {
    console.log("gallery init");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="sticky top-0 z-10 bg-gray-100 dark:bg-neutral-900 w-full max-w-[1000px] px-4 py-2 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
        <div className="text-sm font-medium">
          Hmotnost: <span className={totals.weight > 12000 ? "text-red-500" : ""}>{totals.weight}/12000g</span>
        </div>
        <div className="text-sm font-medium">
          Cena: {totals.price.toFixed(2)}€
        </div>
      </div>
      <LightGallery onInit={onInit} speed={500} selector=".image-link">
        <table
          id="main-table"
          className="table-fixed max-w-[1000px] w-full divide-y divide-gray-200 dark:divide-neutral-700"
        >
          <tbody>
            {categories.map((category) => {
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
      </LightGallery>
    </div>
  );
};
