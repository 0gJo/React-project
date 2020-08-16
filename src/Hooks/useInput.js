import {useState} from 'react';

export default defaultValue => {                           // useState(initValue)
     const [value, setValue]  =   useState(defaultValue) //Returns a stateful value, and a function to update it.
     const onChange = e => {
        const {   target: { value } } = e;
        setValue(value);
      };
    
      return { value, onChange, setValue };   
}