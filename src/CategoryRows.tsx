import { Category } from "./types";
import { useUrlContext } from "./UrlContext";

interface Props {
  category: Category;
  rowClassName: string;
}

export const CategoryRows: React.FC<Props> = (props) => {
  const { category, rowClassName } = props;
  const { setProp, state } = useUrlContext();

  return (
    <>
      <tr>
        {/* image */}
        <td className="px-2 w-20 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 font-bold"></td>
        {/* code */}
        <td className="px-2 w-16 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 font-bold hidden md:table-cell">
          {category.name}
        </td>
        {/* name */}
        <td className="px-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"></td>
        {/* link */}
        <td className="px-2 w-16 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 font-bold hidden md:table-cell"></td>
        {/* weight */}
        <td
          className={
            "px-2 w-24 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-center font-bold hidden md:table-cell"
          }
        ></td>
        {/* price */}
        <td className="px-2 w-12 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 hidden md:table-cell"></td>
        {/* amount */}
        <td className="px-2 w-24 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"></td>
      </tr>
      {category.items.map((item) => {
        return (
          <tr className={rowClassName}>
            {/* image */}
            <td className="pl-6 pr-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              <a
                href={`/${item.image}`}
                className="image-link"
                rel="noreferrer"
                data-pswp-caption={`${item.code} - ${item.name}`}
              >
                <img
                  className="h-14 m-auto"
                  src={`/${item.image}`}
                  alt=""
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    const anchor = img.parentElement as HTMLAnchorElement;
                    if (anchor) {
                      const targetHeight = 800;
                      const aspectRatio = img.naturalWidth / img.naturalHeight;
                      anchor.dataset.pswpHeight = String(targetHeight);
                      anchor.dataset.pswpWidth = String(
                        Math.round(targetHeight * aspectRatio),
                      );
                    }
                  }}
                />
              </a>
            </td>
            {/* code */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 hidden md:table-cell">
              {item.code}
            </td>
            {/* name */}
            <td className="px-2 overflow-hidden whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-left">
              {item.name}
            </td>
            {/* link */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 hidden md:table-cell">
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
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 hidden md:table-cell">
              {item.weightInGrams}
            </td>
            {/* price */}
            <td className="px-2  whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 hidden md:table-cell">
              {item.maxPrice}
            </td>
            {/* amount */}
            <td className="pr-6 pl-2 w-20 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
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
