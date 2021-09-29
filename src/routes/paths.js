export const goToFindUserPage = (history) => {
    history.push("/")
}

export const goToProfileUserPage = (history, username) => {
    history.push(`/profile/${username}`)
}

export const goToStarredProjectsPage = (history, username) => {
    history.push(`/starred/${username}`)
}

export const goToUserReposPage = (history, username) => {
    history.push(`/repos/${username}`)
}

export const goToFollowersPage = (history, username) => {
    history.push(`/followers/${username}`)
}

export const goToFollowingPage = (history, username) => {
    history.push(`/following/${username}`)
}

export const goBack = (history) => {
    history.goBack()
}


