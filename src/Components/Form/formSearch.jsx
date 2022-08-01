import React from "react";
import { useForm } from "react-hook-form";
import "./formsearch.css"
import { SearchContext } from "../../Context/searchContext";
import { useContext} from 'react';


function SearchForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const state = useContext(SearchContext)


    function onSubmit(data) {
        state.setNews([])
        state.setResultados(0)
        state.setSearch(data.nombre)
        state.setHasMore(true)
        state.setTotalPages(0)
        state.setPage(1)
        

    
    }
    
    function onChange(e) {
        const buttonElement = document.getElementById('formbutton')
        console.log(buttonElement)
        if (e.target.value.length > 2) {
            buttonElement.disabled = false
        } else {
            buttonElement.disabled = true
        }
    }






    return( 
        <section className="search-form">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input onChange={onChange} className="formimput" type="text" placeholder="Introduce lo que queres buscar" {...register("nombre",{required: "CAMPO REQUERIDO!!", minLength: 3,} )} />
                <input type='submit' value='Buscar' className='formbutton'  id='formbutton' />
            </form>
            <span>{errors.nombre && <span>{errors.nombre.message}</span>}</span>
            
        </section>


    )
}

export default SearchForm;