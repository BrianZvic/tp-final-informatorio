import React, { useEffect, useState } from "react";
import CardNews from "../cardnews/cardnew";
import "./newslist.css"
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "../Spinner/spinner";
import swal from 'sweetalert'
import { SearchContext } from "../../Context/searchContext";
import { useContext} from 'react';


function NewsList(){
    const [loading, setLoading]= useState(false)
    const state = useContext(SearchContext)
    const apikey = "e431eb4f038f4c2681536e1292275266"
    
    useEffect(()=>{
            
           if(state.search){
                setLoading(true)
                axios.get(`https://newsapi.org/v2/everything?q=${state.search}&apiKey=${apikey}&page=${state.page}&pageSize=10&language=es`)
                .then((response)=>{
                    setLoading(false)
                    state.setNews(state.news.concat(response.data.articles));
                    state.setResultados(response.data.totalResults)
                        
                        if (response.data.articles.length === 0) {
                            swal({
                                text: 'NO SE ENCONTRO RESULTADO PARA LO QUE DESEAS BUSCAR :(',
                                icon: 'info',
                                button: true,
                            })
                        } 
                    
                    })





                    
                .catch(response=>{
                            
                            swal({
                            title: response.mensaje,
                            text: `Se a producido un error del tipo ${response.code}`,
                            icon: 'error',
                            button: true,
                        });})
           }

    },[state.search,state.page])

    
    if(state.resultados > 110){
        state.setTotalPages(10)
   
    }else{
        const pages = state.resultados / 10;
        const setpages = Math.ceil(pages)
        state.setTotalPages(setpages)
           
    }
   
 
    if(state.page === state.totalPages){
        state.setHasMore(false)
    }



    
    return(
        <div className="news-content">
            
            
            <InfiniteScroll dataLength={state.news.length}  hasMore={state.hasMore} next={()=> state.setPage(()=>state.page+1)}
                loader={<Spinner></Spinner>}>
                 {state.news.length > 0 && !loading ?
                    <span className='results-total'>Estás viendo 10 noticias de {state.resultados} resultados</span> : <span></span>}

                 
                <ul className="newslist">
                        { 
                            state.news && state.news.map((data, index)=>{
                                return(<CardNews data={data} index={index}></CardNews>)
                            })
                        }
                </ul>
              
            </InfiniteScroll>
        </div>
       
               
    )
}

export default NewsList;

