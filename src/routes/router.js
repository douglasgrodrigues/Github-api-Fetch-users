import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ProfileUserPage from "../pages/User/User"
import FindUserPage from "../pages/Search/searchUser"
import FollowersPage from "../pages/Followers/Follower"
import FollowingPage from "../pages/Following/following"
import StarredProjectsPage from "../pages/Starred/starred"
import UserReposPage from "../pages/Repos/Repo"
import ErrorPage from "../pages/Error/Error"
import Header from "../Components/Header/Header"

const Router = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <FindUserPage/>
                </Route>
                <Route exact path="/profile/:username">
                    <ProfileUserPage/>
                </Route>
                <Route exact path="/starred/:username">
                    <StarredProjectsPage/>
                </Route>
                <Route exact path="/repos/:username">
                    <UserReposPage/>
                </Route>
                <Route exat path = "/followers/:username">
                    <FollowersPage />
                </Route>
                <Route exact path = "/following/:username">
                    <FollowingPage  />
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router 