import React from "react"
import {RepoContainer, RepoTitle, CreatedAt} from "./style"

const Repo = (props) => {
    return (
        <RepoContainer>
            <RepoTitle>{props.repoName}</RepoTitle>
            <CreatedAt>{props.createdAt}</CreatedAt>
        </RepoContainer>
    )
}

export default Repo

