import { useState } from "react";


export const useForm = ( { initialForm = {} } ) => {

    const [formState, setFormState] = useState( initialForm );

    function onInputChange ({ target }){
        const { name , value }  = target ;

        setFormState({
            ...formState,
            [name]: value,
        })

    }

    function reset(){
        setFormState( initialForm )
    }

    return {
        onInputChange,
        ...formState,
        formState,
        reset
    }
}
