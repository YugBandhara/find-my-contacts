import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                {/* Left Arrow */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous"
                    >
                        &lt;
                    </button>
                </li>

                <li className="page-item active">
                    <span className="page-link">{currentPage}</span>
                </li>

                {/* Right Arrow */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Next"
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
