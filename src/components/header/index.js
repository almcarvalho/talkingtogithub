import React, { useState } from 'react';
import * as S from './styled'
import useGithub from '../hooks/githubHooks';

function Header() {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };


    return (
        <header>
            <S.Container>
                <input type="text" placeholder="Digite o username do usuário do github para buscar..."
                    onChange={(event) => setUsernameForSearch(event.target.value)} />
                <button type="submit" onClick={submitGetUser}>buscar</button>
            </S.Container>
        </header>
    )
}

export default Header