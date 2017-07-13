import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export const App = React.createClass({
 render:function () {
     return (
         <div>
             <div>
                 <Link to="/">Home</Link>
             </div>
             <div>
                 <Link to="/about">About</Link>
             </div>
             <div>
                 <Link to="/inbox">Inbox</Link>
             </div>
             <div>
                 {this.props.children}
             </div>
         </div>
     )
 }
});