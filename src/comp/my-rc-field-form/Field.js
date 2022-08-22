// import React from 'react'

// export default function Field(props) {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

import React, { Component } from 'react'
import  FieldContext  from './FieldContext'

export default class Field extends Component {

    static contextType = FieldContext;



    componentDidMount() {
        this.unregister = this.context.registerFieldEntities(this);
    }

    componentWillUnmount() {
        this.unregister();
    }

    onStoreChange = () => {
        this.forceUpdate();
    }

    getControlled = () => {

        const { getFieldValue, setFieldValue } = this.context;
        const { name } = this.props
        return {
            value: getFieldValue(name), // get state
            onChange: (e) => {
                const newVale = e.target.value;
                console.log('newVale', newVale);
                // set state
                setFieldValue({
                    [name]: newVale
                });
            }
        };
    }

    
    render() {
        console.log('render');
        
        const { children } = this.props;

        const returnChildNode = React.cloneElement(children, this.getControlled());

        return returnChildNode;
    }
}
