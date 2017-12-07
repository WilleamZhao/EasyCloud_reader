/**
 * Created by sourcod on 2017/12/5.
 */

import React, {Component} from 'react';
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";


import "./Aside.css";

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display: "none"  //控制display的值来隐藏与显示
        };
    }

    // 组件的props发生改变,在组件接收到一个新的prop时被执行。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps) {
        if(nextProps.display) {
            this.setState(
                {
                    display: nextProps.display
                }
            );
        }
    }

    changeDisplay (){
        "inline-block" === this.state.display ? this.setState({display: 'none'}) : this.setState({display: 'inline-block'});
    }

    render() {
        return (
            <div className="search-dialog" style={{display: this.state.display}}>
                <a className="fa fa-times bubble-close" onClick={this.changeDisplay.bind(this)}/>
                <h3 className="dialog-title">搜索文本</h3>
                <div className="search-box">
                    <input type="text" className="search-content" placeholder="请输入关键字"/>
                    <button className="fa fa-search fa-1x icon-search"/>
                </div>
            </div>
        );
    }
}


class Aside extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display: "none"  //控制display的值来隐藏与显示
        };
    }


    changeDisplay (){
        "inline-block" === this.state.display ? this.setState({display: 'none'}) : this.setState({display: 'inline-block'});
    }

    render(){
        return (
            <aside className="aside">
                <ul className="panel" style={{paddingLeft: 0}}>
                    <li id="fn-back" className="sep" data-helper="阅读列表">
                        <a href="/reader/ebooks/" className="fa fa-angle-double-left fa-1x" aria-hidden="true" title="阅读列表" />
                    </li>
                    <li id="fn-layout" className="sep" data-helper="阅读模式">
                        <a title="阅读模式" className="fa fa-arrows-v fa-1x" aria-hidden="true"/>
                    </li>
                    <li id="fn-annotation-filter" data-helper="目录" className="sep">
                        <a title="目录" target="" className="fa fa-list-ul fa-1x"/>
                    </li>
                    <li id="fn-search" data-helper="搜索" className="sep">
                        <a title="搜索" onClick={this.changeDisplay.bind(this)} className="fa fa-search fa-1x"/>
                    </li>
                    <li id="fn-helper">
                        <a title="指南">指南</a>
                    </li>
                </ul>
                <Search display={this.state.display}/>
            </aside>
        );
    }

}

export default Aside;