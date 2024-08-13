import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../assets/Filters.css';

const Filters = () => {
    const { filters, setFilters } = useContext(AppContext);
    const [searchInput, setSearchInput] = useState('');

    const handlePageSizeChange = (e) => {
        setFilters({ ...filters, pageSize: parseInt(e.target.value), currentPage: 1 });
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setFilters({ ...filters, searchQuery: e.target.value });
    };

    return (
        <div className="filters-container">
            <label>
                Entries:
                <select value={filters.pageSize} onChange={handlePageSizeChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </label>
            <div className="search-container">
                <button className="search-icon" onClick={() => setFilters({ ...filters, showSearch: !filters.showSearch })}>
                    🔍
                </button>
                {filters.showSearch && (
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                )}
            </div>
        </div>
    );
};

export default Filters;
