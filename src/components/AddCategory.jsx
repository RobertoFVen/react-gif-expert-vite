import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = ( {target} ) => {
        setInputValue(target.value);
    } 

    const onSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);

        onNewCategory( inputValue.trim() );

        setInputValue('');
        // console.log(inputValue);
    }
    
    return (

        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange= { handleInputChange }
            />

        </form>
    )
}
