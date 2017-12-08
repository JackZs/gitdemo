import React,{Component} from 'react'
import './page1.css'
import image from '../../asset/images/hehua.jpg'
export default class page1 extends Component{
  render() {
  	return (<div className="page-box">this is page1
  		<img src={image} width="300" heigh="150"/>
  		</div>)
  }
}