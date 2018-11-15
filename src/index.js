import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/index';

import { BrowserRouter } from 'react-router-dom';

import numeral from 'numeral';

try{
    numeral.register('locale','gb', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        currency: {
            symbol: '£'
        }
    });
    numeral.locale('gb');
}catch(ex){
    // don't care...
}

import 'file-loader?name=[name].[ext]!../node_modules/font-awesome/css/font-awesome.css';
import 'file-loader?name=[name].[ext]!../node_modules/normalize.css/normalize.css';
import 'file-loader?name=fonts/[name].[ext]!../node_modules/font-awesome/fonts/fontawesome-webfont.eot';
import 'file-loader?name=fonts/[name].[ext]!../node_modules/font-awesome/fonts/fontawesome-webfont.svg';
import 'file-loader?name=fonts/[name].[ext]!../node_modules/font-awesome/fonts/fontawesome-webfont.ttf';
import 'file-loader?name=fonts/[name].[ext]!../node_modules/font-awesome/fonts/fontawesome-webfont.woff';
import 'file-loader?name=fonts/[name].[ext]!../node_modules/font-awesome/fonts/fontawesome-webfont.woff2';
import 'file-loader?name=fonts/[name].[ext]!../node_modules/font-awesome/fonts/FontAwesome.otf';

import App from './App';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);