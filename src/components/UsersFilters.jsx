import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../assets/Filters.css';

const UsersFilters = () => {
    const { filters, setFilters, setUsers } = useContext(AppContext);
    const [localFilters, setLocalFilters] = useState(filters.userFilters);
    const [searchInput, setSearchInput] = useState(filters.searchQuery);

    const applyFilter = (field, value) => {
        const newFilters = { name: '', email: '', birthdate: '', gender: '' };
        newFilters[field] = value;

        setFilters({
            ...filters,
            userFilters: newFilters,
            currentPage: 1, // Reset to the first page
        });

        // Fetch data from the API based on the active filter
        let apiUrl = `https://dummyjson.com/users/search?q=${value}`;
        if (field !== 'name') {
            apiUrl = `https://dummyjson.com/users?${field}=${value}`;
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setUsers(data.users))
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
                <label>Name:</label>
                <input
                    type="text"
                    value={localFilters.name}
                    onChange={(e) => {
                        setLocalFilters({ ...localFilters, name: e.target.value });
                        applyFilter('name', e.target.value);
                    }}
                />
            </div>
            <div className="filter-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={localFilters.email}
                    onChange={(e) => {
                        setLocalFilters({ ...localFilters, email: e.target.value });
                        applyFilter('email', e.target.value);
                    }}
                />
            </div>
            <div className="filter-group">
                <label>Birthdate:</label>
                <input
                    type="date"
                    value={localFilters.birthdate}
                    onChange={(e) => {
                        setLocalFilters({ ...localFilters, birthdate: e.target.value });
                        applyFilter('birthdate', e.target.value);
                    }}
                />
            </div>
            <div className="filter-group">
                <label>Gender:</label>
                <select
                    value={localFilters.gender}
                    onChange={(e) => {
                        setLocalFilters({ ...localFilters, gender: e.target.value });
                        applyFilter('gender', e.target.value);
                    }}
                >
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
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

export default UsersFilters;