import cx from 'clsx';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isDisabled?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  isDisabled,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const MAX_VISIBLE_PAGES = 5;
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);

    const pages: Array<number | '...'> = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index,
    );

    return [
      startPage > 1 && 1,
      startPage > 2 && '...',
      ...pages,
      endPage < totalPages - 1 && '...',
      endPage < totalPages && totalPages,
    ].filter(Boolean);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center gap-2 bg-transparent"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isDisabled}
      >
        <div className="w-4 h-4">
          <ArrowLeftIcon />
        </div>
      </button>
      <div className="flex items-center gap-2">
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            disabled={isDisabled}
            className={cx(
              'px-4 py-2 min-w-[50px] text-white',
              currentPage === pageNumber ? 'bg-[#1C64F2]' : 'bg-transparent',
            )}
            onClick={() =>
              typeof pageNumber === 'number' && onPageChange(pageNumber)
            }
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="flex items-center gap-2 bg-transparent"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isDisabled}
      >
        <div className="w-4 h-4">
          <ArrowRightIcon />
        </div>
      </button>
    </div>
  );
};
