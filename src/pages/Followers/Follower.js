import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../bases/url"
import { Button } from "@material-ui/core"
import { goToProfileUserPage } from "../../routes/paths"
import { CircularProgress } from "@material-ui/core"
import { MainContainer } from "../../style" 
import { DivButton, Header, DivBackButton, Title} from "./style"

export const Followers = () => {

    const history = useHistory()

    const [followers, setFollowers] = useState([])

    useEffect(() => {
        getFollowers()
    }, [])

    const { username } = useParams()

    const getFollowers = async () => {
        try {
            const followers = await axios.get(`${BASE_URL}/${username}/followers`)
            setFollowers(followers.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const followersList = followers && followers.map((follower) => {
        return <DivButton key = {follower.login}> 
        <Button 
            variant={"contained"}
            color={"secondary"}
            onClick={() => goToProfileUserPage(history, follower.login)}>{follower.login}
        </Button> 
        </DivButton>
    })

    return <MainContainer>
            <Header>
                <Title>Followers</Title>
                <DivBackButton>
                    <Button 
                        variant={"contained"} 
                        color={"primary"}
                        onClick = {() => goToProfileUserPage(history, username)} >
                            Back
                    </Button>
                </DivBackButton> 
            </Header>
                {followers ? followersList : <CircularProgress color="secondary" />}
            </MainContainer>
}

export default Followers