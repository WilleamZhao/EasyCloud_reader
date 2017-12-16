/**
 * Created by sourcod on 2017/12/5.
 */
import React, {Component} from 'react';
import "./PageContent.css";
import RaisedButton from 'material-ui/RaisedButton';

class SelectTip extends Component {

    constructor(props) {
        super(props);
        this.state ={
            tooltip: {
                display: "none",
                left: 0,
                top: 0
            },
            userSelect: "none"
        };
    }



    note(){
        this.setState({
            tooltip: {
                display: "none",
                left: 0,
                top: 0
            }
        });
    }

    render(){
        return (
            <div className="tooltip btns-tip" style={this.props.style}>
                <div className="bubble-content">
                    <ul className="action-list">
                        <li className="action-underline">
                            <button className="underline">划线</button>
                        </li>
                        <li className="action-note">
                            <button className="note" onClick={this.note.bind(this)}>批注</button>
                        </li>
                        <li className="action-sharing">
                            <button className="sharing">分享</button>
                        </li>
                        <li className="action-copy">
                            <button className="copy">复制</button>
                        </li>
                        <li className="action-debug">
                            <button className="debug">纠错</button>
                        </li>
                    </ul>
                </div>
                <i className="fa fa-sort-desc fa-2x arrow"/>
                <ToolTip/>
            </div>
        );
    }
}

class ToolTip extends Component {
    render(){
        return(
            <div className="tooltip bubble-form">
                <div className="bubble-content">
                    <div className="textarea-shell">
                        <textarea placeholder="你的批注" name="text" required=""/>
                    </div>
                    <div className="actions">
                        <div className="form-actions">
                            <a className="ln-cancel" href="#">取消</a>
                            <button className="btn btn-bubble btn-post" type="submit">确定</button>
                        </div>
                    </div>
                </div>
                <a className="fa fa-sort-up fa-4x arrow-up"/>
            </div>
        );
    }
}

class Text extends Component {

    render(){
        let list = () => {
            let res = [];
            let p = this.props.text;
            for(let i = 0; i < p.length; i++) {
                res.push(<span key={i} >{p[i].text}</span>);
            }
            return res;
        };
        return(
            list()
        );
    }
}




class PageContent extends Component{

    constructor(props) {
        super(props);
        this.state ={
            p: "",
            tooltip: {
                display: "none",
                left: 0,
                top: 0
            },
            userSelect: "none"
        };
    }

    titleTip(event){
        let select = window.getSelection();
        let foucsNode = select.focusNode;
        // 获取相对于窗口位置
        if (!foucsNode){
            return;
        }
        let position = foucsNode.parentNode.getBoundingClientRect();
        // 选择文字
        let selectText = select.toString();
        event.persist();
        console.log(selectText);
        // 选择了
        if (selectText !== ""){
            this.setState({
                tooltip: {
                    left: position.left - 162,
                    top: position.top - 75,
                    display: "inline-block"
                }
            });
        } else {
            this.setState({
                tooltip: {
                    display: "none"
                }
            });
        }
    }

    fetchData(){
        fetch("http://localhost:3000/data.json")
            .then(function (response) {
                return response.text();
            })
            .then((responseData) => {
                    console.log(JSON.parse(responseData));
                    this.setState({
                        p: JSON.parse(responseData)
                    });
            }).catch((error) => {
            console.log(error);
        });
    }


    componentDidMount() {
        this.fetchData();
    }

    contentMenu(event){
        event.persist();
        event.preventDefault();
        // 检查指定的事件上是否调用了 preventDefault() 方法。
        console.log(event.isDefaultPrevented());
    }

    keyDown(event){
        event.persist();
        console.log("asd");
        if( event.ctrlKey ){
            return false;
        }
        if ( event.altKey ){
            return false;
        }
        if ( event.shiftKey ){
            return false;
        }
    }

    selectText(){
        this.setState({
            userSelect: "text"
        });
    }



    render(){

        return (
            <div className="article">
                <div className="page" style={{userSelect: this.state.userSelect}} onMouseDown={this.selectText.bind(this)} onMouseUp={this.titleTip.bind(this)} onContextMenu={this.contentMenu.bind(this)} onCopy={this.contentMenu.bind(this)} onKeyDown={this.keyDown.bind(this)}>
                    <p><Text text={this.state.p}/></p>
                </div>
                <SelectTip style={this.state.tooltip}/>

            </div>
        );
    }

}

export default PageContent;
