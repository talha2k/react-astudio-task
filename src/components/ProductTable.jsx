/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../assets/Table.css'; // Create this CSS file for custom styles

const ProductsTable = ({ data }) => {

    const { filters } = useContext(AppContext);

    const filteredData = data.filter((product) => {
        return Object.values(product).some((value) =>
            String(value).toLowerCase().includes(filters.searchQuery.toLowerCase())
        );
    });

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>TITLE</th>
                        <th>BRAND</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>STOCK</th>
                        <th>RATING</th>
                        <th>DISCOUNT</th>
                        <th>AVAILABILITY</th>
                        <th>MINIMUM ORDER</th>
                        <th>SHIPPING INFO</th>
                        <th>RETURN POLICY</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((product) => (
                        <tr key={product.id}>
                            <td>{product.sku}</td>
                            <td>{product.title}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.rating}</td>
                            <td>{product.discountPercentage}%</td>
                            <td>{product.availabilityStatus}</td>
                            <td>{product.minimumOrderQuantity}</td>
                            <td>{product.shippingInformation}</td>
                            <td>{product.returnPolicy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;
