import React from "react";
import {AutorPrevey} from "./AutorPrevey";
import mass from "../mass.json";

export const InboxPage = React.createClass({
    getInitialState(){
        return{
            mass
        };
    },

    sowFullContent(massages){
        const {mass}=this.state;
        console.log(`/inbox/messages/${massages.id}`);
        this.props.history.push(`/inbox/messages/${massages.id}`);

    },
    render:function () {
        const {mass}=this.state;
        return(
            <div className="list-group">
                {
                    mass.map(massages=>
                        <AutorPrevey
                            onClick={this.sowFullContent.bind(null,massages)}
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