import React from "react";


export class App extends React.Component{
 render () {
     return (
         <div className="container">
             <div >
                 <h2>Hello TestClass</h2>
                 {this.props.children}
             </div>
         </div>

     )
 }
}