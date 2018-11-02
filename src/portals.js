import React,{Component} from "react"
import ReactDom from "react-dom"
import "./portal.css"
/**
 *  ReactDOM.createPortal(child, container)
 *  第一个参数child是可以被渲染的React节点，例如React元素、由
    React元素组成的数组、字符串等，container是一个DOM元素，child将
    被挂载到这个DOM节点。
 */

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }
    componentWillUnmount() {
        document.body.removeChild(this.container);
    }
    render(){
        return ReactDom.createPortal(
            <div className="modal">
                <span className="close" onClick={this.props.onClose}>&times;</span>
                {this.props.children}
            </div>,
            this.container
        )
    }
    
}

