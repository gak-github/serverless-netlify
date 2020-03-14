import React from "react";
import github from '../images/github-32px.png';

const Header = () => {
    return (
        <>
        
        <h3 className='top-head'> A full stack web application using react hooks and context api<a href="https://github.com/gak-github/serverless-netlify" target="_blank" rel="noopener noreferrer"><img src={github} alt="github url" /></a></h3>
        <h2>Expense Tracker</h2>
        </>
    );
};

export default Header;
