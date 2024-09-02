import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

export default function SeatsPage() {
    const params = useParams();
    const [seats, setSeats] = useState(0);
    const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
	const navigate = useNavigate();
    const [select, setSelect] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSessao}/seats`)
            .then(resposta => {
                setSeats(resposta.data.seats)
            });
    }, []);

    if (seats === 0) {
        return (
            <Back>
                Carregando...
            </Back>
        )
    }

    function registration(event) {
        event.preventDefault();

        const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            ids: select,
            nome, cpf
        })

        requisicao.then(() => navigate("/sucesso"))
    }

    function selected(isAvailable, id){
        
        if(isAvailable === "false"){
            alert("Lugar não disponível, escolha outro")
        }else{
            if (select.find((selecteds) => selecteds === id)){
                setSelect(select.filter(iten => iten !== id))
            }else{
                setSelect([...select,id])
            }
        }
    }
    return (
        <Back>
            <p>Selecione o(s) assento(s)</p>
            <Seats>
                {seats.map(seat => <Seat
                    key={seat.id}
                    habilitado={seat.isAvailable.toString()}
                    onClick={() => selected(seat.isAvailable.toString(),seat.id)}
                    id={seat.id}
                    selected={select}
                    >
                    {seat.name}
                </Seat>
                )}
            </Seats>
            <Forms onSubmit={registration}>
                <Title htmlFor="nome">Nome do comprador(a)</Title>
                <Enter
                id="nome"
                required
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)} />
                <Title htmlFor="cpf">CPF do comprador(a)</Title>
                <Enter
                id="cpf"
                required
                type="number"
                value={cpf}
                onChange={e => setCpf(e.target.value)} />
                <button type="submit">Reservar assento(s)</button>
            </Forms>
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
`

const Seats = styled.div`
    display: flex;
    
    flex-wrap: wrap;
    padding-bottom: 40px;
    border-bottom: 1px solid white;
    margin: 0 10%;

    justify-content: center;
`

const Seat = styled(Link)`
    width:26px;
    height: 26px;

    justify-content: center;
    align-items: center;

    display: flex;
    margin: 2px;
    box-sizing: border-box;
    border-radius: 26px;
    border: ${props => (props.selected.find((iten) => iten === props.id))? "2px solid #EE897F":"1px solid #808F9D"};
    text-decoration: none;
    color: #2B2D36;
    opacity: ${props => props.habilitado === "true" ? 1 : 0.1};
    background-color: ${props => (props.selected.find((iten) => iten === props.id))? "#FADBC5":"#9DB899"};

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 12.89px;
    letter-spacing: 0.04em;
    text-align: center;
`

const Forms = styled.form`
    margin: 25px;
    display: block;
    button{
        width: calc(100% - 25px);
        height: 42px;
        background-color: #EE897F;
        border-radius: 8px;
        
    }

`
const Title = styled.label`
    display: contents;
    font-family: Sarala;
    font-size: 16px;
    font-weight: 400;
    line-height: 26.09px;
    text-align: left;
`
const Enter = styled.input`
    width: calc(100% - 25px);
    justify-content: center;
    margin-bottom: 20px;
    height: 40px;
    border: 1px solid #D4D4D4;
    border-radius: 8px;

    font-family: Roboto;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;

`