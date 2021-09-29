import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/userForm"
import { goToProfileUserPage } from "../../routes/paths"
import { MainContainer } from "../../style"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {InputField, PageTitle} from "./style"
import { BASE_URL } from "../../bases/url"

const initialForm = {
    username: "",
}

const Search = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm(initialForm);
    

    const getProfile = async (e) => {
        e.preventDefault();
        try {
            await axios.get(`${BASE_URL}/${form.username}`)
            goToProfileUserPage(history, form.username)
        } catch (error) {
            alert(error.response.data.message)
            clear()
        }
    }

    return(
        <MainContainer>           
            <InputField onSubmit = {getProfile}>
                <div>
                <TextField
                    required
                    name={"username"}
                    type={"username"}
                    label={"Search or jump to"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    value={form.username}
                    onChange={onChange}/>
                </div>
                <Button 
                    variant={"contained"}
                    type={'submit'}
                    color={"primary"}>  Search
                </Button>
            </InputField>
        </MainContainer>
    )
}

export default Search