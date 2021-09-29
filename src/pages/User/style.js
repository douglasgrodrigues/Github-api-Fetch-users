import styled from "styled-components"
import { characterColor, elementColor } from "../../bases/colors"

export const Header = styled.header`
    width: 90%;
    margin-bottom: -1px;
    @media screen and (min-width: 300px) and (max-width: 420px) {
            flex-direction: column;
            margin-bottom: 1px;
`
export const UserName = styled.h2`
    color: ${elementColor};
    display: flex;
    justify-content: center;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media screen and (min-width: 300px) and (max-width: 420px) {
            letter-spacing: normal
    }
`
export const ProfileImage = styled.img`
display: block;
    width: 250px;
    margin-top: 15px;
    display: inline;
    border-radius: 10px;
`
export const ContainerBio = styled.div`
    display: flex;
    width: 50%; 
    background: #000;
    border-radius: 10px;
    box-sizing: border-box;
    justify-content: center;
    padding: 10px;
    opacity: 0.5;   
`
export const Name = styled.h2`
    color: ${characterColor};
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: center;
    background: #000;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    opacity: 0.5;
    
`
export const Bio = styled.h4`
    color: white;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const DivButtons = styled.div`
    display: flex;
    width: 50%;
    gap: 10px;
    flex-direction: row-reverse;
    box-sizing: border-box;
    justify-content: center;
    background: #000;
    border-radius: 10px;
    margin-top: 2px;
    padding: 10px;
    opacity: 0.5;
        @media screen and (min-width: 300px) and (max-width: 420px) {
                flex-direction: column;
                gap: 15px;
                margin-bottom: 15px;
        }
`
export const DivFollow = styled.div`
    width: 60%;
    display: flex;    
    justify-content: space-evenly;
`