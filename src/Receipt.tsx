import _ from "lodash";
import { useState } from "react";
import { useUrlContext } from "./UrlContext";
import { categories } from "./constants";
import { Category, Product } from "./types";

export const Receipt: React.FC = () => {
  const { state } = useUrlContext();
  const [copied, setCopied] = useState(false);
  const rows: string[] = _.flow([
    _.partialRight(_.map, (category: Category) => {
      const productRows = _.flow([
        _.partialRight(_.filter, (product: Product) =>
          _.get(state, product.code, 0),
        ),
        _.partialRight(_.map, (product: Product) => {
          return `${product.code} - ${product.name} - ${_.get(
            state,
            product.code,
            0,
          )}`;
        }),
      ])(category.items);
      if (productRows.length === 0) return [];
      return [category.name, ...productRows];
    }),
    _.flatten,
  ])(categories);
  const text = _.join(rows, "\n");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <textarea
        readOnly
        rows={rows.length + 1}
        value={text}
        className="max-w-[1000px] w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
      <button
        onClick={handleCopy}
        className={`w-full max-w-[1000px] px-4 py-3 rounded-md text-base font-semibold transition duration-300 ease shadow-sm ${
          copied
            ? "bg-green-500 text-white"
            : "bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-neutral-200 hover:bg-gray-300 dark:hover:bg-neutral-600"
        }`}
      >
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};
