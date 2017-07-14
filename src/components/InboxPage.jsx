import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';



import mass from "../mass.json";
import {AutorPrevey} from "./AutorPrevey";


export const InboxPage = React.createClass
({
    getInitialState(){
        return{
            mass
        };
    },
    sowFullContent(id){
        console.log(`/inbox/messages/${id}`);
        this.props.history.push(`/inbox/messages/${id}`);
    },
    render:function () {
        const {mass}=this.state;
        return(
            <div className="list-group">
                {
                    mass.map(massages=>
                        <AutorPrevey
                            onClick={this.sowFullContent.bind(null,massages.id)}
                            key = {massages.id}
                            id={massages.id}
                            shortInfo = {massages.shortInfo}
                            fullName = {massages.fullName}
                        />
                    )

                }



            </div>
        )
    }

});