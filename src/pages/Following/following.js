import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../bases/url"
import { useHistory, useParams } from "react-router-dom"
import { Button } from "@material-ui/core"
import { goToProfileUserPage } from "../../routes/paths"
import { CircularProgress } from "@material-ui/core"
import { MainContainer } from "../../style"
import { DivButton, Header, DivBackButton, Title } from "./style"

export const Following = () => {

    const history = useHistory()

    const [following, setFollowing] = useState([])

    useEffect(() => {
        getFollowing()
    }, [])

    const {username} = useParams()

    const getFollowing = async () => {
        try {
            const following = await axios.get(`${BASE_URL}/${username}/following`)
            setFollowing(following.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const followingList = following && following.map((following) => {
        return <DivButton 
                    key = {following.login}> 
                <Button 
                    variant={"contained"}
                    color={"secondary"} 
                    onClick={() => goToProfileUserPage(history, following.login)}>{following.login}
                </Button>
                </DivButton>
    })

    return <MainContainer>
            <Header>
                <Title>Following</Title>
                <DivBackButton>
                    <Button 
                        variant={"contained"} 
                        color={"primary"}
                        onClick = {() => goToProfileUserPage(history, username)}>
                            Back
                    </Button>
                </DivBackButton> 
            </Header>
                {following ? followingList : <CircularProgress color="secondary" />}
            </MainContainer>
}

export default Following