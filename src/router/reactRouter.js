import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import home from 'reactPages/home/home.js'
import page1 from 'reactPages/page1/page1.js'
import count  from 'reactPages/counter/counter.js'
import userInfo from 'reactPages/userInfo/userInfo.js'

const getRouter = ()=>(
	<Router>
	<div>
	<h1>reactDemo</h1>
	   <ul>
	   <li><Link to="/">首页</Link></li>
	   <li><Link to="/page1">page1</Link></li>
	   <li><Link to="/count">count</Link></li>
	   <li><Link to="/userInfo">用户信息</Link></li>
	   </ul>
	   <Switch>
	    <Route exact path='/' component={home}/>
	    <Route  path='/page1' component={page1}/>
	    <Route path='/count' component={count}/>
	     <Route path='/userInfo' component={userInfo}/>
	    </Switch>
	</div>
	</Router>
	)
export default getRouter