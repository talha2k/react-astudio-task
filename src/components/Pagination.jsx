/* eslint-disable react/prop-types */
import '../assets/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    return (
        <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                &larr;
            </button>
            {[...Array(totalPages).keys()].map((num) => (
                <button
                    key={num + 1}
                    className={num + 1 === currentPage ? 'active' : ''}
                    onClick={() => handlePageChange(num + 1)}
                >
                    {num + 1}
                </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                &rarr;
            </button>
        </div>
    );
};

export default Pagination;
