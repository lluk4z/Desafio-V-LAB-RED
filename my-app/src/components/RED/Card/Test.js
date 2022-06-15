import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import './Card.css'

export default function Images(props) {
    const { data } = props;

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 15;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * (itemsPerPage)) % data.length;
        setItemOffset(newOffset);
  };


  return (
    <>
        <div className="todos-cards">
            {currentItems.map(image => {
                return(
                    <>
                    <div className="card-completo">
                        <img src={image.url_img} alt={image.name} target="_blank"
                        rel="noopener noreferrer"/>
                        <div className="nome-red"><h2>{image.name}</h2></div>
                        <div className="descricao"><p>{image.description}</p></div>
                        <p>Autor: {image.author}</p>
                        <p>Palavras chave: </p>
                        <div className="palavras-chave">
                        
                        {image.tags.map(img => {
                             return ` ${img.name} |`
                        })}
                        </div>
                        <p>Categoria: {image.object_type}</p>
                        <a href={image.link}> link do RED </a>
                        
                    </div>
                   
                    </>
                );
            })}
            
        </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}