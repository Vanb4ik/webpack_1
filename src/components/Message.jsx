import React from "react";
import "react-dom";
import mass from "../mass.json";

export const Message = React.createClass({
    getInitialState(){
        return{
            Info:""
        };
    },
    setFullInfo:function () {
        var messId = this.props.match.params.id;
        console.dir(this.props);

        for(var i=0;i<mass.length;i++){

            if (mass[i].id==messId){
                /*this.setState({Info:mass[i].fullInfo});*/
                return mass[i].fullInfo;
            }
        }

    },
    render:function () {

        return(
            <div>{this.setFullInfo()}</div>
        )
    }
});