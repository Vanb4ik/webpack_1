import React from "react";
import $ from "jquery"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export class AboutPage extends React.Component{

   render () {
       fetch('http://localhost:8081/api/users/1/10')
           .then(response => response.json())
           .then(function(response) {
              console.log(response);
           })
           .catch(function(err) {
               console.log('Fetch Error :-S', err);
           });

       console.log(this.props.mass);
       console.log(this.state);
       return(
           <div>
              <h2>This is messages application!!</h2>
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet.</p>
           </div>

       )
   }
}