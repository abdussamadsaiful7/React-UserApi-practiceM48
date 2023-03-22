import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
                <div className='header m-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded ms-5 me-5'>
                    <nav>
                        <a className='px-3' href="/home">Home</a>
                        <a className='px-3' href="/friend">Friend List</a>
                        <a className='px-4' href="/post">Post</a>
                        <a className='px-4' href="/blog">Blog</a>
                        <a className='px-3' href="/support">Supports</a>
                        <a className='px-3' href="/about">About Us</a>
                        <a className='px-3' href="/contact">Contact Us</a>
                    </nav>
                </div>
                <h1 className='title shadow-sm p-3 mb-5 bg-body-tertiary rounded ms-5 me-5'>Welcome to Social Network</h1>
            </div>
        </div>
    );
};

export default Header;