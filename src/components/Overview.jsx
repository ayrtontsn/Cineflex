import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom"

export default function OverviewPage(){
    const location = useLocation();
    const selected = location.state.selected;
    const nome = location.state.nome;
    const cpf = location.state.cpf;
    const movie = location.state.movie;
    const day = location.state.day;
    const seccao = location.state.seccao;

    const navigate = useNavigate();

    function home(){
        navigate("/")
    }

    return(
        <Back>
            <p>Pedido Finalizado!</p>
            <Overview>
                <div>
                    <h3>Filme e sessão</h3>
                    <Content>{movie.title}</Content>
                    <Content>{day.date} às {seccao}</Content>

                </div>
                <div>
                    <h3>Ingressos</h3>
                    {selected.map(seat => <Content key={seat.id}> Assento {seat.name}</Content>)}
                </div>
                <div>
                    <h3>Comprador(a)</h3>
                    <Content>Nome: {nome}</Content>
                    <Content>CPF: {cpf}</Content>
                </div>
            </Overview>
            <button type="submit" onClick={home}>Voltar par tela inicial</button>
        </Back>
    )
}

const Back = styled.div`
    position: fixed;
    left: 0;
    top: 67px;
    overflow-y: scroll;
    background-color: #212226;

    width:100%;
    height: calc(100% - 67px);
    color: white;
    margin: 0;
	padding: 0;
    border:0;
    
    display: block;
    justify-content: center;
    line-height: 1;

    font-family: Sarala;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-align: center;
    p{
        color: #9DB899;
    }
    button{
        font-family: Sarala;
        font-size: 18px;
        font-weight: 700;
        line-height: 29.35px;
        letter-spacing: 0.04em;
        text-align: center;



        width: calc(100% - 25px);
        height: 42px;
        background-color: #EE897F;
        border-radius: 8px;
        
    }
`
const Overview = styled.div`

    padding: 9px 20px;
    margin: 20px;
    background-color: #2B2D36;
    border-radius: 8px;
    
    h3{
        color: #EE897F;
        border-bottom: 1px solid #4E5A65;
        font-size: 22px;
        font-weight: 700;
        line-height: 35.87px;
        text-align: left;
    }
`
const Content = styled.h2`
    font-family: Sarala;
    font-size: 20px;
    font-weight: 400;
    text-align: left;

    color: #FFFFFF;
`