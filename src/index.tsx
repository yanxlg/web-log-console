/**
 * @disc:入口
 * @author:yanxinaliang
 * @time：2018/6/29 17:26
 */
import React from 'react';
import ReactDOM from 'react-dom';



class Console extends React.Component{
    render(){
        return (
            <div>
                日志控制台
                
            </div>
        )
    }
}



ReactDOM.render(
    <Console/>,
    document.getElementById("react-container"));