import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Port from './Port';
import Works from './Works';
import Work01 from './Work01';
import Work02 from './Work02';
import Work03 from './Work03';
import Work04 from './Work04';
import Profile from './Profile';
import twoborder from './anthology/2border';
import thunderclash from './anthology/ThunderClash';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactDOM.render(
<Router history ={hist}>
<Route>
<Port />

<Route path="/Works" component={Works} />
<Route path="/Profile" component={Profile} />
<Route path="/App" component={App} />
<Route path="/Work01" component={Work01} />
<Route path="/Work02" component={Work02} />
<Route path="/Work03" component={Work03}/>
<Route path="/Work04" component={Work04}/>
<Route path="/anthology/2border" component={twoborder}/>
<Route path="/anthology/ThunderClash" component={thunderclash}/>
<Redirect from="/" to="/App" />
</Route>
</Router>,
  document.getElementById('root')
  );
 // <React.StrictMode>
 //   <Work01 />
 // </React.StrictMode>,

 // document.getElementById('root')


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
