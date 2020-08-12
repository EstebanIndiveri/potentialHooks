import { useState } from "react";

const useForm = (initialState={}) => {

    const [value, setValue] = useState(initialState)
    const handleInputChange=(e)=>{
        // console.log(e.target.value);
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }
    return[ value,handleInputChange];
}
 
export default useForm;