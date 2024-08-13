import { useNavigate } from 'react-router-dom';
import '../assets/dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h1>ASTUDIO - REACT TASK</h1>
            <div className="buttons-container">
                <button onClick={() => navigate('/users')} className="nav-button">
                    Go to Users
                </button>
                <button onClick={() => navigate('/products')} className="nav-button">
                    Go to Products
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
