
import React from 'react';
// import  {Component} from 'react';
import './Demo.css'

const Demo =({name , friend})=>{
    return <div className="mystyle">
                 <h1> Hello World !{name}</h1>
                <p>Welcome to my channel :)</p>
               
               <div ><b>frinedns message..</b></div>
    <div ><b>{friend}</b></div>
               </div>
}




// class Demo extends Component{

//     render(){

//         return <div className="mystyle">
//                  <h1> Hello World !{this.props.name}</h1>
//                 <p>Welcome to my channel :)</p>
               
//                <div ><b>frinedns message..</b></div>
//     <div ><b>{this.props.friend}</b></div>
//                </div>
//             }
//         }
export default Demo;