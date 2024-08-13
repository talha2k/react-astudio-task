/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../assets/Table.css'; // Create this CSS file for custom styles

const UserTable = ({ data }) => {

    const { filters } = useContext(AppContext);

    const filteredData = data.filter((user) => {
        return Object.values(user).some((value) =>
            String(value).toLowerCase().includes(filters.searchQuery.toLowerCase())
        );
    });

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>MAIDEN NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        <th>USERNAME</th>
                        <th>BLOOD GROUP</th>
                        <th>EYE COLOR</th>
                        <th>DATE OF BIRTH</th>
                        <th>UNIVERSITY</th>
                        <th>ROLE</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.maidenName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.bloodGroup}</td>
                            <td>{user.eyeColor}</td>
                            <td>{user.birthDate}</td>
                            <td>{user.university}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
