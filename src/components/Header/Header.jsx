
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex justify-between px-6 py-4'>
            <h1 className=' text-3xl font-bold'>MealDB</h1>
            <ul className=' flex gap-3 text-xl font-bold'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/items">Items</NavLink></li>
                <li><NavLink to="/select">Select</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;