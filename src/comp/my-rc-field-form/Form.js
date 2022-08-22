// import React from 'react'

// export default function Form(props) {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

import  FieldContext  from './FieldContext'

export default function Form({ children, form, onFinish, onFinishFailed }) {

    form.setCallBacks({
        onFinish,
        onFinishFailed
    });
    return (
        <form onSubmit={e => {
            e.preventDefault();
            form.submit();
        }}>
            <FieldContext.Provider value={form}>
                {children}
            </FieldContext.Provider>
        </form>
        )
};

