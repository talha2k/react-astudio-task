import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import ProductsTable from '../components/ProductTable';
import ProductsFilters from '../components/ProductsFilters';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const { products, setProducts, filters, setFilters } = useContext(AppContext);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        const fetchProducts = () => {
            const filterKeys = Object.keys(filters.productFilters).filter(key => filters.productFilters[key]);
            
            if (filterKeys.length > 0) {
                // Extract the first applied filter for the API call
                const activeFilter = filterKeys[0];
                let filterValue = filters.productFilters[activeFilter];
                
                // Make the API call using the search query
                axios
                    .get(`https://dummyjson.com/products/search`, { params: { q: filterValue, limit: filters.pageSize, skip: (filters.currentPage - 1) * filters.pageSize } })
                    .then(res => {
                        setProducts(res.data.products);
                        setTotalProducts(res.data.total); // Adjust if the API returns a total count
                    })
                    .catch(err => console.error(err));
            } else {
                // If no filters are applied, fetch the default list
                const params = {
                    limit: filters.pageSize,
                    skip: (filters.currentPage - 1) * filters.pageSize,
                };

                axios
                    .get(`https://dummyjson.com/products`, { params })
                    .then(res => {
                        setProducts(res.data.products);
                        setTotalProducts(res.data.total);
                    })
                    .catch(err => console.error(err));
            }
        };

        fetchProducts();
    }, [filters.pageSize, filters.currentPage, filters.productFilters, setProducts]);

    const handlePageChange = (page) => {
        setFilters({ ...filters, currentPage: page });
    };

    return (
        <div>
            <button onClick={() => navigate('/')} className="back-button">
                Back to Dashboard
            </button>
            <ProductsFilters />
            <ProductsTable data={products} />
            <Pagination 
                currentPage={filters.currentPage} 
                totalPages={Math.ceil(totalProducts / filters.pageSize)} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
};

export default Products;
