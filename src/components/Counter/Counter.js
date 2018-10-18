import React from "react";


class Counter extends React.Component {
    state = {
        count: 0,
        highScore: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    };

    render() {
        return (

            <h2 className="nav-item">Score: {this.state.count} | High Score: {this.state.count} </h2>
            
        );
    };
}


export default Counter;