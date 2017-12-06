/**
 * Created by sourcod on 2017/12/5.
 */

import React, {Component} from 'react';
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";


import "./Aside.css";

class Aside extends Component{
    render(){
        return (
            <aside className="aside">
                <ul className="panel" style={{paddingLeft: 0}}>
                    <li id="fn-back" className="sep" data-helper="阅读列表">
                        <a href="/reader/ebooks/" className="fa fa-angle-double-left fa-2x" aria-hidden="true" title="阅读列表" >

                        </a>
                    </li>
                    <li id="fn-layout" className="sep" data-helper="阅读模式">
                        <a href="#" title="阅读模式" className="fa fa-arrows-v fa-2x" aria-hidden="true"/>
                    </li>
                    <li id="fn-annotation-filter" data-helper="目录" className="sep">
                        <a href="#" title="目录" target="_blank" className="fa fa-list-ul fa-2x"/>
                    </li>
                    <li id="fn-search" data-helper="搜索" className="sep">
                        <a href="#" title="搜索" target="_blank" className="fa fa-search fa-2x"/>
                    </li>
                    <li id="fn-helper">
                        <a href="#" title="指南">指南</a>
                    </li>
                </ul>
            </aside>
        );
    }

}

export default Aside;