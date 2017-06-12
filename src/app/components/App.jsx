import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'App component'
        };
    }

    render() {
        return (
            <div>{this.state.text}</div>
        )
    }
}