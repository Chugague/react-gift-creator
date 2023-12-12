import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [...cat, 'Pokemon']);

    }


    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
            // setCategories={setCategories}
            onNewCategory = {onAddCategory}
            />

            {/* <button onClick={onAddCategory} >Agregar</button> */}

            { categories.map( (category) =>(
            <GifGrid key={ category }
            category={category}
            />
            )) 
            }
        

        </>
    )
}
