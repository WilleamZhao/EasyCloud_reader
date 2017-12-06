/**
 * Created by sourcod on 2017/12/5.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MyAwesomeReactComponent extends Component{
    componentDidMount() {
        //fetch("http://rd.swanreads.com:83//activity/userlist?user_id=19&status=0&p=1")
        fetch("http://localhost:3000/svg.html")
            .then(function (response) {
                return response.text();
            })
            .then(function (body){
                console.log(body);
                // document.body.innerHTML = body;
            });
    }
    render(){
        return (
            <div className="App">
                <RaisedButton label="上一页"  />
                &nbsp;
                <RaisedButton label="下一页" />
            </div>
        );
    }

}

export default MyAwesomeReactComponent;
