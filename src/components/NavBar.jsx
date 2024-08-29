import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Barra to="/">
            <img src="src/assets/cine.png" alt="cine" />
            Cineflex
        </Barra>
    )
}

const Barra = styled(Link)`
    
    background-color: #EE897F;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
    height: 67px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Raleway;
    font-size: 34px;
    font-weight: 600;
    line-height: 39.92px;
    text-align: center;
    color: #FADBC5;
    text-decoration: none;

    z-index: 2;

    position: fixed;
    top: 0;
    left: 0;

    img{
        width:40px;
        padding: 15px;
    }

`