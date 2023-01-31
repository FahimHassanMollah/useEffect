import React, { Component } from 'react'

export default class MyComponent extends Component {

    state = {
        count: 0,
        date: new Date(),
    }
    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    }
    tick = () => {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount(){
        document.title = this.state.count;
        setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentDidUpdate(){
        document.title = this.state.count;
    }
    render() {
        return (
            <div>
                <p>Time :{this.state.date.toLocaleString()}</p>
                <p>{this.state.count}</p>
                <button onClick={() => this.addClick()}>click </button>
            </div>
        )
    }
}
