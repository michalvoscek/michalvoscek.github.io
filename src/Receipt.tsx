import _ from "lodash";
import { useUrlContext } from "./UrlContext";
import { categories } from "./constants";
import { Category, Product } from "./types";

export const Receipt: React.FC = () => {
  const { state } = useUrlContext();
  const text = _.flow([
    _.partialRight(_.map, (category: Category) => {
      const productRows = _.flow([
        _.partialRight(_.filter, (product: Product) =>
          _.get(state, product.code, 0)
        ),
        _.partialRight(_.map, (product: Product) => {
          return `${product.code} - ${product.name} - ${_.get(
            state,
            product.code,
            0
          )}`;
        }),
      ])(category.items);
      if (productRows.length === 0) return [];
      return [category.name, ...productRows];
    }),
    _.flatten,
    _.partialRight(_.join, "\n"),
  ])(categories);
  return (
    <div className="flex flex-col items-center">
      <textarea
        rows={10}
        value={text}
        className="w-[1000px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
    </div>
  );
};
