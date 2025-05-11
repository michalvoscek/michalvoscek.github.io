import _ from "lodash";
import { Category, Product } from "./types";
import { useUrlContext } from "./UrlContext";

interface Props {
  category: Category;
  rowClassName: string;
}

export const CategoryRows: React.FC<Props> = (props) => {
  const { category, rowClassName } = props;
  const { setProp, state } = useUrlContext();
  const pickedWeightInGrams = _.flow([
    _.partialRight(_.map, (item: Product) => {
      const pickedCount = _.get(state, item.code, 0);
      return item.weightInGrams * pickedCount;
    }),
    _.sum,
  ])(category.items);
  const isLimitExceeded = pickedWeightInGrams > category.weightLimitInGrams;

  return (
    <>
      <tr>
        {/* image */}
        <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 font-bold"></td>
        {/* code */}
        <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 font-bold">
          {category.name}
        </td>
        {/* name */}
        <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"></td>
        {/* link */}
        <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 font-bold"></td>
        {/* weight */}
        <td
          className={`px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-center font-bold ${isLimitExceeded ? "text-red-500" : ""}`}
        >
          {pickedWeightInGrams}/{category.weightLimitInGrams}
        </td>
        {/* price */}
        <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"></td>
        {/* amount */}
        <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"></td>
      </tr>
      {category.items.map((item) => {
        return (
          <tr className={rowClassName}>
            {/* image */}
            <td className="px-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              <a
                href={`/${item.image}`}
                className="image-link"
                rel="noreferrer"
                data-sub-html={`<h4>${item.code}</h4><p>${item.name}</p>`}
              >
                <img className="h-14 m-auto" src={`/${item.image}`} alt="" />
              </a>
            </td>
            {/* code */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {item.code}
            </td>
            {/* name */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-left">
              {item.name}
            </td>
            {/* link */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              <a
                rel="noreferrer"
                tabIndex={-1}
                href={`https://www.google.com/search?q=${item.code} ${item.name}`}
                target="_blank"
              >
                link
              </a>
            </td>
            {/* weight */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {item.weightInGrams}
            </td>
            {/* price */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {item.maxPrice}
            </td>
            {/* amount */}
            <td className="px-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              <input
                type="number"
                value={state[item.code] || ""}
                onChange={(e) => {
                  setProp(item.code, Number(e.target.value));
                }}
                className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};
