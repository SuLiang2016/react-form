// import _From from './Form.js';
// import Field from './Field';
// import useForm from './useForm';

// let Form = _From;

// Form.useForm = useForm;


// export {
//     Field,
//     useForm
// };

// export default Form;

import _Form from './Form';
import Field from './Field';
import useForm from './useForm';


const Form = _Form;

Form.useForm = useForm;
Form.Field = Field;


export default Form;

export {
    Field,
    useForm
};