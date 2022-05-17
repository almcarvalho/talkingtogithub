import React from 'react'
import useGithub from '../hooks/githubHooks'
import * as G from './styled'

function Profile() {
    const { githubState } = useGithub();

    return (
        <G.Geral>

            <G.GeralImage src={githubState.user.avatar} alt="foto de pefil do usuário no github tamanho 460x460 pixels." />

            <h1>{githubState.user.name}</h1>


            <G.GeralUser>
                <div>
                    <h3>Username:</h3>
                    <a href="https://www.google.com" target="_blank">{githubState.user.login}</a>
                </div>
            </G.GeralUser>


            <G.GeralStatusCount>
                <div>
                    <h4>Seguidores: </h4>
                    <span>{githubState.user.followers}</span>
                </div>
                <div>
                    <h4>Seguindo: </h4>
                    <span>{githubState.user.following}</span>
                </div>
                <div>
                    <h4>Favoritos: </h4>
                    <span>{githubState.user.public_gists}</span>
                </div>
            </G.GeralStatusCount>

        </G.Geral >
    )
}

export default Profile