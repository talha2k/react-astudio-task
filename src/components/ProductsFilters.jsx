import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../assets/Filters.css';

const ProductsFilters = () => {
    const { filters, setFilters, setProducts } = useContext(AppContext);
    const [localFilters, setLocalFilters] = useState(filters.productFilters);
    const [searchInput, setSearchInput] = useState(filters.searchQuery);

    const applyFilter = (field, value) => {
        const newFilters = { title: '', brand: '', category: '', tab: 'ALL' };
        newFilters[field] = value;

        setFilters({
            ...filters,
            productFilters: newFilters,
            currentPage: 1, // Reset to the first page
        });

        // Fetch data from the API based on the active filter
        let apiUrl = `https://dummyjson.com/products/search?q=${value}`;
        if (field !== 'title') {
            apiUrl = `https://dummyjson.com/products?${field}=${value}`;
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.error(err));
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setFilters({ ...filters, searchQuery: e.target.value });
    };

    const handlePageSizeChange = (e) => {
        setFilters({ ...filters, pageSize: parseInt(e.target.value), currentPage: 1 });
    };

    return (
        <div className="filters-container">
            <div className="filter-group">
                <label>Entries:</label>
                <select value={filters.pageSize} onChange={handlePageSizeChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
            <div className="filter-group">
                <label>Title:</label>
                <input
                    type="text"
                    value={localFilters.title}
                    onChange={(e) => {
                        setLocalFilters({ ...localFilters, title: e.target.value });
                        applyFilter('title', e.target.value);
                    }}
                />
            </div>
            <div className="filter-group">
                <label>Brand:</label>
                <input
                    type="text"
                    value={localFilters.brand}
                    onChange={(e) => {
                        setLocalFilters({ ...localFilters, brand: e.target.value });
                        applyFilter('brand', e.target.value);
                    }}
                />
            </div>
            <div className="filter-group">
                <label>Category:</label>
                <input
                    type="text"
                    value={localFilters.category}
                    onChange={(e) => {
                        setLocalFilters({ ...localFilters, category: e.target.value });
                        applyFilter('category', e.target.value);
                    }}
                />
            </div>
            <div className="filter-group search-container">
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

export default ProductsFilters;


