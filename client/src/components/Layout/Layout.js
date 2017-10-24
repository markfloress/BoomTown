import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../../containers/Header'

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {/* Might want to put your header bar here... */}
            <Header/>
        </div>
        <div className="appContent">
            {children}
        </div>
        {/* And a footer here, but not on the login route... */}
        <p className='footer-text'> &#169; 2017 Boomtown Corp. All Rights Reserved </p>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
