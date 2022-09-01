import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const title = "get nutritive values";
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value)
        localStorage.setItem('search', e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
           navigate("/nutritive-values/details");
        }
    };

    return (
        <div className="navbar">
            <a href="/"><h1>{title}</h1></a>

            <div className="search-box">
                <input
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    value={search}
                    className='search-input'
                    type="search"
                    placeholder="Search..." />
                <Link
                    to="/nutritive-values/details"
                >
                    <FontAwesomeIcon className='search-icon' icon={faSearch} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
