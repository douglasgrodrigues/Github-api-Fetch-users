import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../bases/url"
import { goBack } from "../../routes/paths"
import { MainContainer} from "../../style"
import Button from '@material-ui/core/Button'
import { Header, Title } from "./style"
import RepoCard from "../../Components/Repos/Repo"



const Repos = () => {
    const {username} = useParams()
    const [repos, setRepos] = useState([])

    const history = useHistory()

    useEffect(() => {
        getRepos()
    }, [])

    const getRepos = async () => {
        try {
            const repos = await axios.get(`${BASE_URL}/${username}/repos`)
            setRepos(repos.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const reposList = repos && repos.map((repo) => {
        const date = repo.created_at.split("T")
        const splittedDate = date[0].split("-")
        const correctedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`

        return (
            <RepoCard 
                key={repo.id}
                repoName={repo.name}
                description={repo.description}
                createdAt={correctedDate}>
            </RepoCard>
        )
    })

        return(
            <MainContainer>
                <Header>
                    <Title>Repos</Title>
                    <Button 
                        onClick={() => goBack(history)}
                        variant={"contained"}
                        color={"primary"}>
                            Back
                    </Button>
                </Header>            
                    {repos[0] ? reposList: <Title>REPOS NOT FOUND</Title>}            
            </MainContainer>
        )
}

export default Repos