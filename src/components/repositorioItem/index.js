import React from 'react'

function RepositorioItem({ name, linkToRepo, fullName }) {
    return (
        <div>
            <h2> <a href={linkToRepo} target="_blank">{name}</a></h2>
            <span>{fullName}</span>
        </div>
    )
}

export default RepositorioItem