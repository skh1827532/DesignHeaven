import React from 'react';
import classnames from 'classnames';
import '../../App.scss';
import { usePagination,DOTS} from '../../Hooks/usePagination';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    colorModifier
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames(`pagination-item pagination-item--${colorModifier}`, {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className={`arrow arrow--${colorModifier} left`} />
      </li>
      {paginationRange.map((pageNumber,i) => {
        if (pageNumber === DOTS) {
          return <li key = {i} className={`pagination-item pagination-item--${colorModifier} dots`} >&#8230;</li>;
        }

        return (
          <li
            className={classnames(`pagination-item pagination-item--${colorModifier}`, {
              selected : pageNumber === currentPage,
              selected__black: pageNumber === currentPage&&colorModifier ==="white" 
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(`pagination-item pagination-item--${colorModifier}`, {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className={`arrow arrow--${colorModifier} right`} />
      </li>
    </ul>
  );
};

export default Pagination;
