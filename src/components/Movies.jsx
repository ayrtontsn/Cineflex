import styled from "styled-components"
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MoviesPage() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(resposta => {
                setMovies(resposta.data)
            });
    }, []);

    if (movies === null) {
        return (
            <Back>
                Carregando...
            </Back>
        )
    }

    return (
        <Back>
            <p>Em Cartaz</p>
            <Movies>
                {movies.map(movie => <li key={movie.id}>
                    <Link to={`/sessoes/${movie.id}`}>
                        <img src={movie.posterURL} alt={movie.title} />
                    </Link>
                    
                </li>)}
            </Movies>
        </Back>
    )
}

const Movies = styled.ul`

    margin: 0;
	padding: 0;
    border:0;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;

    img{
        height: 210px;
        border-radius: 5px;
        margin:0 20px;
        margin-bottom: 20px;
    }
`

const Back = styled.div`
    position: fixed;
    left: 0;
    top: 67px;
    overflow-y: scroll;
    background-color: #212226;

    width:100%;
    height: calc(100% - 67px);
    color: white;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    line-height: 0;

    font-family: Sarala;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-align: center;
    p{
        padding: 20px;
    }

`