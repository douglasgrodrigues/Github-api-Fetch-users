import React from "react"
import { MainContainer} from "../../style"
import errorcat from "../../assets/githuberror.png"
import { ErrorImg, Link} from "./style"
import { useHistory } from "react-router-dom";
import { goToFindUserPage } from "../../routes/paths";
import { CircularProgress } from "@material-ui/core"
import { elementColor } from "../../bases/colors";

const Error = () => {

    const history = useHistory()

    return(
        <MainContainer>
            <Link 
                type={"submit"} 
                variant={"text"}
                color={elementColor} 
                onClick={() => goToFindUserPage(history)}> BACK
            </Link>
                {errorcat? <ErrorImg src={errorcat}/> : <CircularProgress color={"primary"}/>}
        </MainContainer>
    )
}

export default Error