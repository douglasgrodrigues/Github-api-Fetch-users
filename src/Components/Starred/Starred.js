import React from "react"
import {StarredContainer, StarredTitle, Description} from "./style"

const Starred = (props) => {
    return (
        <StarredContainer>
            <StarredTitle>{props.name}</StarredTitle>
            <Description>{props.description}</Description>
        </StarredContainer>
    )
}

export default Starred