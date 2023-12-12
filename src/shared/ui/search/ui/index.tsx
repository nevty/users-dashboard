import cx from 'clsx';

export const Search = () => (
  <label className="relative block w-full">
    <input
      type="text"
      className={cx(
        'w-full border border-solid border-[#313E62] rounded-lg bg-gray-900 hover:border-[#1C64F2] focus:bg-[#313E62]',
        'px-4 py-3.5 pl-10 text-slate-500 focus:outline-none text-sm grow',
        'peer',
      )}
      placeholder="Поиск"
    />
    <div
      className={cx(
        'peer-focus:fill-white peer-hover:fill-white fill-[#616D8D]',
        'absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none',
      )}
    >
      <div className="w-4 h-4">
        <SearchIcon />
      </div>
    </div>
  </label>
);

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <g id="Icon/search-circle" clipPath="url(#clip0_1420_839)">
      <path
        id="Subtract"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.4078 9.28067L12.5236 11.3965C12.6194 11.5036 12.6705 11.6433 12.6664 11.7869C12.6624 11.9305 12.6036 12.0671 12.502 12.1687C12.4004 12.2703 12.2638 12.3291 12.1202 12.3331C11.9766 12.3371 11.8369 12.286 11.7298 12.1903L9.614 10.0745C8.93587 10.5839 8.11044 10.8588 7.26229 10.8579C5.09588 10.8579 3.33333 9.09537 3.33333 6.92896C3.33333 4.76255 5.09588 3 7.26229 3C9.42871 3 11.1913 4.76255 11.1913 6.92896C11.1922 7.7771 10.9172 8.60253 10.4078 9.28067ZM4.92886 5.36981C4.62049 5.83132 4.45589 6.37391 4.45589 6.92896C4.45679 7.67299 4.75275 8.38629 5.27885 8.9124C5.80496 9.43851 6.51826 9.73447 7.26229 9.73536C7.81735 9.73536 8.35994 9.57077 8.82145 9.2624C9.28296 8.95402 9.64266 8.51573 9.85507 8.00292C10.0675 7.49012 10.1231 6.92585 10.0148 6.38146C9.90648 5.83707 9.6392 5.33702 9.24672 4.94454C8.85424 4.55205 8.35418 4.28477 7.80979 4.17648C7.26541 4.0682 6.70113 4.12377 6.18833 4.33618C5.67553 4.54859 5.23723 4.9083 4.92886 5.36981Z"
      />
    </g>
  </svg>
);
