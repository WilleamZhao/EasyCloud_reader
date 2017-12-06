import React, { Component } from 'react';
// import logo from './logo.svg';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import './App.css';
import Aside from "./aside/Aside";
import PageContent from "./page/PageContent";


class Left extends Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}

class Right extends Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}




class App extends Component {



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    易云阅读器
                </header>
                <Aside/>
                <PageContent/>
                <MuiThemeProvider>
                    <MyAwesomeReactComponent />
                </MuiThemeProvider>
            </div>
        );
    }
}


export default App;
