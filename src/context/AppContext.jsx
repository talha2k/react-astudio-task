/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        pageSize: 5,
        currentPage: 1,
        searchQuery: '',
        showSearch: false,
        userFilters: {
            name: '',
            email: '',
            birthdate: '',
            gender: '',
        },
        productFilters: {
            title: '',
            brand: '',
            category: '',
            tab: 'ALL',
        },
    });

    return (
        <AppContext.Provider value={{ users, setUsers, products, setProducts, filters, setFilters }}>
            {children}
        </AppContext.Provider>
    );
};