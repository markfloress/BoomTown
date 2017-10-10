import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
// import Masonry from './components/Masonry';
import Login from './containers/Login';
import CardContainer from './containers/Cards';


const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
            {/* <Login /> */}
            <CardContainer/>
        </Layout>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
