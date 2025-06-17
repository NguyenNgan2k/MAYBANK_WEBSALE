// import React, { useEffect, useState } from 'react';

// import * as _ from 'lodash';
// import {
//   BsChevronDoubleLeft,
//   BsChevronDoubleRight,
//   BsChevronLeft,
//   BsChevronRight,
//   BsThreeDots,
// } from 'react-icons/bs';

// import styled from 'styled-components';
// import { translate } from 'react-i18next';
// import { StringToInt } from 'utils';

// const ContainerPaging = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 0;
//   list-style: none;
//   border-radius: 0.25rem;
//   width: 100%;

//   select {
//     background: #ffffff;

//     border: 1px solid #f0eeea;
//     border-radius: 8px;
//     width: 150px;
//     height: 32px;
//   }
// `;

// const ButtonDef = styled.button`
//   padding: 2px 10px;
//   background: #ffffff;
//   color: #6f6f6f;
//   border: none;
//   border-radius: 8px;
//   margin-left: 8px;
//   font-size: 13px;
//   height: 32px;
//   min-width: 32px;

//   &:focus,
//   :active {
//     outline: none;
//     border: 0;
//     box-shadow: none;
//   }

//   &.active {
//     color: #fdb61f;
//   }

//   &:disabled {
//     background: #eaeaea;
//   }

//   &:not(:disabled):hover {
//     background: #fdb61f;
//     color: #fff;
//   }
// `;

// function Paging({
//   className,
//   nextPage,
//   page,
//   disabled,
//   recordPerPage,
//   setRecordPerPage,
//   total = 0,
//   t,
//   isElement,
// }) {
//   const _page = page < 1 ? 1 : page;
//   const pagesCount = Math.ceil(total / recordPerPage);
//   const isPaginationShown = pagesCount > 0;
//   const isCurrentPageFirst = _page === 1;
//   const isCurrentPageLast = _page === pagesCount;

//   const changePage = (number) => {
//     console.log(number);
//     if (_page === number) return;
//     nextPage(number);
//   };

//   const onPageNumberClick = (pageNumber) => {
//     changePage(pageNumber);
//   };

//   const onPreviousPageClick = () => {
//     if (isCurrentPageFirst) return;
//     changePage(Number(_page) - 1);
//   };

//   const onNextPageClick = () => {
//     if (isCurrentPageLast) return;
//     changePage(Number(_page) + 1);
//   };

//   const setLastPageAsCurrent = () => {
//     if (_page > pagesCount) {
//       nextPage(1);
//     }
//   };

//   let isPageNumberOutOfRange;

//   const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
//     const pageNumber = index + 1;
//     const isPageNumberFirst = pageNumber === 1;
//     const isPageNumberLast = pageNumber === pagesCount;
//     const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - _page) <= 1;

//     if (
//       isPageNumberFirst ||
//       isPageNumberLast ||
//       isCurrentPageWithinTwoPageNumbers
//     ) {
//       isPageNumberOutOfRange = false;

//       return (
//         <ButtonDef
//           key={pageNumber}
//           onClick={() => onPageNumberClick(pageNumber)}
//           className={pageNumber === _page ? 'active' : ''}
//         >
//           {pageNumber}
//         </ButtonDef>
//       );
//     }

//     if (!isPageNumberOutOfRange) {
//       isPageNumberOutOfRange = true;
//       return <BsThreeDots key={pageNumber} style={{ marginLeft: '5px' }} />;
//     }

//     return null;
//   });

//   function handleChangeRecordPerpage(e) {
//     setRecordPerPage(StringToInt(e.target.value));
//     changePage(1);
//   }

//   useEffect(setLastPageAsCurrent, [pagesCount]);

//   return (
//     <div className={className}>
//       <ContainerPaging>
//         {!isElement && (
//           <select
//             className="form-control"
//             value={recordPerPage}
//             onChange={handleChangeRecordPerpage}
//           >
//             <option value="10">10 {t('txt-element-page')}</option>
//             <option value="20">20 {t('txt-element-page')}</option>
//             <option value="50">50 {t('txt-element-page')}</option>
//             <option value="100">100 {t('txt-element-page')}</option>
//           </select>
//         )}

//         {isPaginationShown && _page > 0 && (
//           <div>
//             <ButtonDef onClick={() => changePage(1)}>
//               <BsChevronDoubleLeft />
//             </ButtonDef>
//             <ButtonDef
//               onClick={onPreviousPageClick}
//               disabled={isCurrentPageFirst}
//             >
//               <BsChevronLeft />
//             </ButtonDef>
//             {pageNumbers}
//             <ButtonDef onClick={onNextPageClick} disabled={isCurrentPageLast}>
//               <BsChevronRight />
//             </ButtonDef>
//             <ButtonDef onClick={() => changePage(pagesCount)}>
//               <BsChevronDoubleRight />
//             </ButtonDef>
//           </div>
//         )}
//       </ContainerPaging>
//     </div>
//   );
// }

// export default translate('translations')(Paging);
import React from "react";

const CustomersPage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="text-base">Danh sách khách hàng</div>
    </div>
  );
};

export default CustomersPage;
