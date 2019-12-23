import React, { useState } from "react"

export function PaginationComponent(props){
//     console.log('props Pagination Component'+ props.page)
//     const [pageState,setState]=useState({currentPage: 1,
//                                         todosPerPage: 9})
    const { photos, currentPage, todosPerPage } = props.page;
    const pageNumbers = [];
    if(photos){
        for (let i = 1; i <= Math.ceil(photos.length / todosPerPage); i++) {
            pageNumbers.push(i);
          }
    }

// // Logic for displaying todos
// const indexOfLastTodo = pageState.currentPage * todosPerPage;
// const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
// const currentPhotos = photos.slice(indexOfFirstTodo, indexOfLastTodo);

const renderPageNumbers = pageNumbers.map(number => {
  return (
    <React.Fragment>
    <span
      key={number}
      id={number}
      onClick={props.handleClick}
    >
      {number}
    </span>
   
    </React.Fragment>
  );
});
    return(
        <div id="render-page-numbers">
        <div id="page-numbers">
          {renderPageNumbers}
        </div>
        </div>
    )
}