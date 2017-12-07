/**
 * Created by sourcod on 2017/12/5.
 */
import React, {Component} from 'react';
import "./PageContent.css";
import RaisedButton from 'material-ui/RaisedButton';


class Text extends Component {

    render(){
        let list = () => {
            let res = [];
            let p = this.props.text;
            for(let i = 0; i < p.length; i++) {
                console.log(i);
                res.push(<span key={i}>{p[i].text}</span>);
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
            p: ""
        };
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

    render(){
        let list = () => {
            let res = [];
            let p = this.state.p;
            for(let i = 0; i < p.length; i++) {
                console.log(i);
                res.push(<span key={i}> <Text style={p[i].style} text={p[i].text}/></span>);
            }
            return res;
        };
        return (
            <div className="article">
                <div className="page">
                    <p><Text text={this.state.p}/></p>
                </div>
            </div>
        );
    }

}

export default PageContent;
