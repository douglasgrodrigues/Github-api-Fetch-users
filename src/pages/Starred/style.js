import styled from "styled-components"
import { elementColor} from "../../bases/colors"

export const Header = styled.header`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
export const Title = styled.h2`
    color: ${elementColor};
    display: flex;
    justify-content: center;
    padding: 10px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 10px;
`