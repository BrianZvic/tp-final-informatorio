import {React, useState} from "react";
import NewsList from "../NewsList/newsList";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./principal.css"
import SearchForm from "../Form/formSearch";
import { SearchContext } from "../../Context/searchContext";
import ButtonScroll from "../ButtonScroll/buttonscroll";



function PagePrincipal(){
    const [search, setSearch] = useState('');
    const [news, setNews] = useState([])
    const [resultados, setResultados] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)

    
    return(
        <div className="content">
            <Header></Header>
            <main className="main-content">
                <SearchContext.Provider value={{search: search, setSearch: setSearch, news:news, setNews: setNews,
                resultados:resultados, setResultados:setResultados,hasMore:hasMore,setHasMore:setHasMore,
                totalPages:totalPages, setTotalPages:setTotalPages, page:page, setPage:setPage}}>
                    <SearchForm></SearchForm>
                    <NewsList></NewsList>
                </SearchContext.Provider>

            </main>
            <ButtonScroll></ButtonScroll>
            <Footer></Footer>
        </div>
            
        


    )
}

export default PagePrincipal;

