"use client";

import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/_pagination.module.scss'
import ReactPaginate from "react-paginate";

type PaginationType = {
  total: number,
  onClick?(selected: number): void;
}

const Pagination = (props: PaginationType) => {

  const { total, onClick } = props;

  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    setPageCount(Math.ceil(props.total / 36))
  }, [total])

  const onPageChange = (selectedItem: { selected: number }) => {
    setPageCount(Math.ceil(total / 36))
    if (onClick) onClick(selectedItem.selected)
  }

  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName={`${pageCount === 1 ? styles.display : styles.pagination}`}
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
