import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar, LogoImg} from './style'
import Logo from '../../assets/githublogo.png'
import Typography from '@material-ui/core/Typography'

export const Header = () => {
    return (        
        <AppBar position="static">
        <StyledToolbar>
            <LogoImg src = {Logo} />
            <Typography>
                    <h2>Git Finder</h2>                    
            </Typography>
        </StyledToolbar>
        </AppBar>    
    );
}

export default Header