import React from 'react';

const DataPagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav style={{height: "41px"}}>
            <ul style={{ overflow: "scroll" }}  className='pagination data-log-pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <span style={{ cursor: "pointer" }} onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DataPagination;
