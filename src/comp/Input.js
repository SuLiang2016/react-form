import React, { Component } from 'react'
const OInput = (props) => {
    return <input {...props} />;
};
export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { value = "", ...otherProps } = this.props;
        return (
            <div style={{ padding: 10 }}>
                <OInput style={{ outline: "none" }} value={value} {...otherProps} />
            </div>
        );
    }
}

export default Input
