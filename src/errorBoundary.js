//最佳实践：将ErrorBoundary抽象为一个公用的组件类

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    componentDidCatch(err, info) {// 捕获自身及子树上的错误并对错误做优雅处理
        // 显示错误UI
        this.setState({ hasError: true });
        // 同时输出错误日志
        console.log(err, info);
    }
    render(){
        if(this.state.hasError){
            return <div>Something went wrong!</div>
        }
        return this.props.children
    }
}
