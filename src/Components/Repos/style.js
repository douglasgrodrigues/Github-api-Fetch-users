import styled from 'styled-components'
import { elementColor, primaryColor} from '../../bases/colors'

export const RepoContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    border-radius: 6px;
    margin-top: 20px;
    background-color: ${primaryColor};
    border: 1px solid white;
    padding: 5px 20px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const RepoTitle = styled.h2`
    color: ${elementColor};
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const CreatedAt = styled.h5`
    color: ${elementColor};
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`