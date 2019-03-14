import React from 'react';
import ReactDOM from 'react-dom';


class WindowWidth extends React.Component {

    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,

        };

        this.debounce = this.debounce.bind(this);
        this.resize = this.resize.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this);
        this.timer = "";

    }

    componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);
    }
    resize(e) {
        this.setState(
            {
                width: window.innerWidth,
                height: window.innerHeight
            }
        )
        console.log('height', this.state.width);
        console.log('width', this.state.height);
    }

    debounce(func, wait) {
        // variable persisted here

        console.log('debouncecalled');

        clearTimeout(this.timer);
        this.timer = setTimeout(func, wait);
    }

    updateDimensions() {

        this.debounce(this.resize, 1000);
    }
    

    render() {
        return (
            <h3 align='center'>
                Window width: {this.state.width} and height: {this.state.height}
            </h3>
        );
    }
    componentWillUnmount() {
        console.log('unmount');
        window.removeEventListener("resize", this.updateDimensions);
    }
}

ReactDOM.render(<WindowWidth />, document.getElementById('root'));