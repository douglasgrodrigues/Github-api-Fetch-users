import styled from 'styled-components'
import { secondaryColor } from "./bases/colors";

export const MainContainer = styled.main`
    width: 100%;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    justify-content: flex-start;
    background-color: ${secondaryColor};
`

export const Logomarca = styled.main`
    .bg{
        position: absolute;
        bottom: 35px;
        width: 100%;
        right: 25px;
        width: 20%;
        height: 5vw;
    }
`


