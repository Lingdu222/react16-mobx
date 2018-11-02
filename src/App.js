import React, { Component } from 'react';
import {createPortal} from "react-dom"
import ErrorBoundary from "./errorBoundary"
import Modal from "./portals"

/**
 * 数组
 */
// class ListComponent extends Component {
//   render() {
//     return[
//           <li key='A'>A</li>,
//           <li key='B'>B</li>,
//           <li key='C'>C</li>,
//           <li key='D'>D</li>
//       ]
//   }
// }



/**
 * 字符串
 */
// class StringComponent extends Component{
//   render(){
//     return "I am String"
//   }
// }
// class App extends Component{
//    render(){
//      return[
//          <ul key='1'>
//             <ListComponent/>
//          </ul>,
//         <StringComponent key='2'/>
//     ]
//   }
// }


/**
 * 错误边界
 */

// const Profile=({user})=><div>my name is {user.name}</div>
// class App extends Component{
//       constructor(props){
//         super(props)
//         this.state={
//           user:{name:"react"}
//         }
//       }
//       handerClick = () =>{
//         this.setState({
//           user:null
//         })
//       }
//      render(){
//         return(
//            <div>
//               <ErrorBoundary>
//                  <Profile user={this.state.user}/>
//               </ErrorBoundary>
//               <button onClick={this.handerClick}>更新</button>
//            </div>
//         )
//     }
//   }




/**
 * portals 
 */
class App extends Component {
  constructor(props) {
  super(props);
  this.state = { showModal: false };
  }
  // 关闭弹框
  closeModal = () => {
    this.setState({ showModal: false });
  }
  // 显示弹框
  showModal = () => {
    this.setState({ showModal: true });
  }
  render() {
    return(
      <div>
        <h2>hello everyone !!</h2>
        {this.state.showModal && <Modal onClose={this.closeModal}>我是🤖️</Modal>}
        <button onClick={this.showModal}>机器人🤖️</button>
      </div>
    )
  }
    
}





export default App;
