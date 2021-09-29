import styled from 'styled-components'

export const RepoContainer = styled.div`
    display:grid;
    flex-direction: column;
    width: 90%;
    border-radius: 6px;
    margin-top: 20px;
    background-color: black;
    opacity: 0.6;   
    padding: 5px 20px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const RepoTitle = styled.h2`
    color: #fff;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const CreatedAt = styled.h5`
    color: #000;
    background: white;
    padding: 5px;
    opacity: 1;   
    border-radius: 5px;
    width: 70px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`