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
    background-color: ${secondaryColor};`


