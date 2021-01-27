import React from 'react';
import { Area } from './styled';

function Pagination({currentPage, setCurrentPage, limit, total}) {

  let pages = Math.ceil(total / limit);
  const setPage = page => setCurrentPage(page);

  return (
    <Area>
      <li>
        {currentPage === 1 
          ? <span className="disabled">&lt;</span>
          : <span onClick={() => setPage(currentPage-1)}>&lt;</span>
        }
      </li>
      {new Array(pages).fill(0).map((i,k) => 
        <li key={k}>
          {currentPage === (k+1)
            ? <span className="active">{k+1}</span>
            : <span onClick={() => setPage(k+1)}>{k+1}</span>
          }
        </li>
      )}
      <li>
        {currentPage === pages
          ? <span className="disabled">&gt;</span>
          : <span onClick={() => setPage(currentPage+1)}>&gt;</span>
        }
      </li>
    </Area>
  )
}

export default Pagination;