import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

export default function SchedulePage() {
    const params = useParams();
    const [schedule, setSchedule] = useState(null);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idMovie}/showtimes`)
            .then(resposta => {
                setSchedule(resposta.data.days)
            });
    }, []);

    if (schedule === null) {
        return (
            <Back>
                Carregando...
            </Back>
        )
    }

    return (
        <Back>
            <p>Selecione o horário</p>
            <Schedule>
                {schedule.map(day => <Date key={day.id}>
                        <Title>{day.weekday}, {day.date}</Title>
                    <Time>
                        {day.showtimes.map(time =>
                            <div key={time.id}>
                                {time.name}
                            </div>
                        )}
                    </Time>
                </Date>)}
            </Schedule>
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
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1;

    font-family: Sarala;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-align: center;
`

const Date = styled.div`
    display: block;
    justify-content: center;
    margin-left:5%;
    margin-bottom: 20px;
    width: 90%;
    background-color: #2B2D36;
    
    border-radius: 8px

`

const Title = styled.h2`
    font-family: Sarala;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-align: left;
    padding:20px 0px;
    margin: 0px 25px;
    border-bottom: 1px solid white;
    `
const Schedule = styled.div`    
    display: block;
    justify-content: center;
`

const Time = styled.div`
    display: flex;
    justify-content: center;
    margin: 0px 25px;
    color: #EE897F;
    div{
        margin: 20px 10px;
        padding: 5px 20px;
        border: 1px solid #EE897F;
        border-radius: 5px;
        font-family: Sarala;
        font-size: 16px;
        font-weight: 400;
        line-height: 26.09px;
        letter-spacing: 0.04em;
        text-align: center;

    }
`