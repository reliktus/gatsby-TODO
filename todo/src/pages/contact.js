import { Link } from 'gatsby';
import React from 'react';
import Header from '../components/header';
export default () => (
    <div style={{ color: `teal` }}>
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
    </div>
);
