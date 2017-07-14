import React from "react";


export const App = React.createClass({
 render:function () {
     return (
         <div className="container">

             <div >
                 {this.props.children}
             </div>
         </div>

     )
 }
});