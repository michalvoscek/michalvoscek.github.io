import { categories } from "./constants";
import { CategoryRows } from "./CategoryRows";
import LightGallery from "lightgallery/react";

export const Tables: React.FC = () => {
  const onInit = () => {
    console.log("gallery init");
  };
  return (
    <div className="flex flex-col items-center">
      <LightGallery onInit={onInit} speed={500} selector=".image-link">
        <table
          id="main-table"
          className="table-fixed w-[1000px] divide-y divide-gray-200 dark:divide-neutral-700"
        >
          <thead>
            <th className="px-2 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 w-16">
              Obrazok
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 w-16">
              Kod
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Nazov
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 w-16">
              Link
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 w-24">
              Hmotnost
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 w-12">
              Cena
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 w-24">
              Pocet
            </th>
          </thead>
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
