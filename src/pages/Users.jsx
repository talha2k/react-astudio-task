import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import UsersTable from '../components/UserTable';
import UsersFilters from '../components/UsersFilters';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const { users, setUsers, filters, setFilters } = useContext(AppContext);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        // Check if any filter is applied
        const filterKeys = Object.keys(filters.userFilters).filter(key => filters.userFilters[key]);
        
        if (filterKeys.length > 0) {
            // Extract the first applied filter for the API call
            const activeFilter = filterKeys[0];
            let filterValue = filters.userFilters[activeFilter];
            
            let apiKey = '';

            // Map the active filter to the corresponding API key
            switch (activeFilter) {
                case 'name': {
                    apiKey = 'firstName'; // Assuming we're filtering by first name
                    break;
                }
                case 'email': {
                    apiKey = 'email';
                    break;
                }
                case 'birthdate': {
                    apiKey = 'birthDate';
                    // Remove leading zeros from date and month
                    const [year, month, day] = filterValue.split('-');
                    filterValue = `${year}-${parseInt(month)}-${parseInt(day)}`;
                    break;
                }
                case 'gender': {
                    apiKey = 'gender';
                    break;
                }
                // Add more cases if needed for additional filters
                default:
                    break;
            }

            // Make the API call using the filter
            axios
                .get(`https://dummyjson.com/users/filter`, { params: { key: apiKey, value: filterValue } })
                .then(res => {
                    setUsers(res.data.users);
                    setTotalUsers(res.data.total); // Adjust if the API returns a total count
                })
                .catch(err => console.error(err));
        } else {
            // If no filters are applied, fetch the default list
            const params = {
                limit: filters.pageSize,
                skip: (filters.currentPage - 1) * filters.pageSize,
            };

            axios
                .get(`https://dummyjson.com/users`, { params })
                .then(res => {
                    setUsers(res.data.users);
                    setTotalUsers(res.data.total);
                })
                .catch(err => console.error(err));
        }
    }, [filters.pageSize, filters.currentPage, filters.userFilters, setUsers]);

    const handlePageChange = (page) => {
        setFilters({ ...filters, currentPage: page });
    };

    return (
        <div>
            <button onClick={() => navigate('/')} className="back-button">
                Back to Dashboard
            </button>
            <UsersFilters />
            <UsersTable data={users} />
            <Pagination 
                currentPage={filters.currentPage} 
                totalPages={Math.ceil(totalUsers / filters.pageSize)} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
};

export default Users;