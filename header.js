import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/brands.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/regular.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/solid.min.js';


class Header extends Component {
    render() {
        return (
            <headerComponent>
                <div className="header-top">
                    <div className="container">
                        <ul className="header-social-container">
                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header-main">

                    <div className="container">

                        <div className="header-search-container">

                            <input type="search" name="search" className="search-field" placeholder="Enter your book name..." />

                            <button className="search-btn">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </button>

                        </div>

                        <div className="header-user-actions">

                            <button className="action-btn">
                                <FontAwesomeIcon icon="fa-regular fa-user" />
                            </button>

                            <button className="action-btn">
                                <FontAwesomeIcon icon="fa-regular fa-heart" />
                                <span className="count">0</span>
                            </button>

                            <button className="action-btn">
                                <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
                                <span className="count">0</span>
                            </button>

                        </div>

                    </div>

                </div>
            </headerComponent>
        )
    }
}

export default Header;