import React, { Component } from 'react';
// import logo from './logo.svg';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import './App.css';
import Aside from "./aside/Aside";
import PageContent from "./page/PageContent";

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            p: "",
            tooltip: {
                display: "none",
                x: 0,
                y: 0
            }
        };
    }

    titleTip(tooltip){
        console.log(tooltip);
        this.setState({

        });
    }

    tooltip(toolTip){

    }



    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    易云阅读器
                </header>
                <Aside/>
                <PageContent titleTip={this.titleTip}/>
                <MuiThemeProvider>
                    <MyAwesomeReactComponent />
                </MuiThemeProvider>
            </div>
        );
    }
}


export default App;
