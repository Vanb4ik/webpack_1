import React from "react";
import {AutorPrevey} from "./AutorPrevey";
import mass from "../mass.json";
import {} from "react-router"

export class InboxPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mass
        };
    }

    sowFullContent(massages){
        /*const {mass}=this.state;*/
        console.log(`/inbox/messages/${massages.id}`);
        console.dir(this.props);
        this.props.history.push(`/inbox/messages/${massages.id}`);

    }

    render(){
       /* const {mass}=this.state;*/
        return(
            <div className="list-group">
                {
                    mass.map(massages=>
                        <AutorPrevey
                            onClick={this.sowFullContent.bind(this, massages)}
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

}