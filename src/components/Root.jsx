
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import {App} from "./App";
import {Header} from "./Header";
import {AboutPage} from "./AboutPage";
import {InboxPage} from "./InboxPage";
import {Message} from "./Message";
import mass from "../mass.json";

const RouteConfigExample = React.createClass ({
    getInitialState(){
        return{
            mass
        };
    },
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="container">
                        <Route exact path="/" component={App}/>
                        <Route path="/about"  component={AboutPage} mass={this.state.mass}/>
                        <Route exact path="/inbox" component={InboxPage}/>
                        <Route exact path="/inbox/messages/:id" component={Message}/>
                    </div>
                </div>
            </Router>
        )
    }
});


export default RouteConfigExample;
