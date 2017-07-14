/*import React from 'react'
 import {
 BrowserRouter as Router,
 Route,
 Link
 } from 'react-router-dom'

 const Tacos = ({routes}) => (
 <div>
 <h2>Tacos</h2>
 <ul>
 <li><Link to="/tacos/bus">Bus</Link></li>
 <li><Link to="/tacos/cart">Cart</Link></li>
 </ul>

 {routes.map((route, i) => (
 <RouteWithSubRoutes key={i} {...route}/>
 ))}
 </div>
 );

 const Sandwiches = ({routes}) => (
 <div>
 <h2>Sandwiches!!!</h2>
 <ul>
 <li><Link to="/sandwiches/Sandwiches1">S1</Link></li>
 <li><Link to="/sandwiches/Sandwiches2">S2</Link></li>
 </ul>
 {routes.map((route, i) => (
 <RouteWithSubRoutes key={i} {...route}/>
 ))}
 </div>
 );


 const Bus = () => <h3>Bus</h3>;
 const Cart = () => <h3>Cart</h3>;

 const Sandwiches1 = () => <h2>Sandwiches1</h2>;
 const Sandwiches2 = () => <h2>Sandwiches2</h2>;

 ////////////////////////////////////////////////////////////
 // then our route config
 const routes = [
 {
 path: '/sandwiches',
 component: Sandwiches,
 routes: [
 {
 path: '/sandwiches/Sandwiches1',
 component: Sandwiches1
 },
 {
 path: '/sandwiches/Sandwiches2',
 component: Sandwiches2
 }
 ]
 },
 {
 path: '/tacos',
 component: Tacos,
 routes: [
 {
 path: '/tacos/bus',
 component: Bus
 },
 {
 path: '/tacos/cart',
 component: Cart
 }
 ]
 }
 ];

 // wrap <Route> and use this everywhere instead, then when
 // sub routes are added to any route it'll work
 const RouteWithSubRoutes = (route) => (
 <Route path={route.path} render={props => (
 // pass the sub-routes down to keep nesting
 <route.component {...props} routes={route.routes}/>
 )}/>
 );

 const RouteConfigExample = () => (
 <Router>
 <div>
 <ul>
 <li><Link to="/"><i className="glyphicon glyphicon-home"></i></Link></li>
 <li><Link to="/tacos">Tacos!</Link></li>
 <li><Link to="/sandwiches">!Sandwiches</Link></li>
 </ul>

 {routes.map((route, i) => (
 <RouteWithSubRoutes key={i} {...route}/>
 ))}
 </div>
 </Router>
 );

 export default RouteConfigExample;*/


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


const RouteConfigExample = () => (
    <Router>
        <div>
            <Header/>
            <App path="/">

                <Route path="/about" component={AboutPage}/>
                <Route>
                    <Switch>
                        <Route exact path="/inbox" component={InboxPage}/>
                        <Route exact path="/inbox/messages/:id" component={Message}/>
                    </Switch>
                </Route>
            </App>
        </div>
    </Router>
);

export default RouteConfigExample;
