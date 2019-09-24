import React from 'react';

class ErrorBoundary extends React.Component{
    state={
        hasError:false,
    }

    componentDidCatch(err){
        this.setState({hasError:err});
    }

    render(){
        return this.state.hasError ?
        <div className='text-danger'>{this.props.message}</div>:
        <div>{this.props.children}</div>;
    }
}

export default ErrorBoundary;