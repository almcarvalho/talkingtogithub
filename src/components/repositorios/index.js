import React, { useEffect, useState } from "react";
import useGithub from "../hooks/githubHooks"
import RepositoryItem from "../repositorioItem";
import * as S from "./styled";

const Repositorios = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return (
        <>
            {hasUserForSearchrepos ? (
                <S.ContainerTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.ContainerTabList>
                        <S.ContainerTab>Repositories</S.ContainerTab>
                        <S.ContainerTab>Starred</S.ContainerTab>
                    </S.ContainerTabList>
                    <S.ContainerTabPanel>
                        <S.ContainerList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.ContainerList>
                    </S.ContainerTabPanel>
                    <S.ContainerTabPanel>
                        <S.ContainerList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.ContainerList>
                    </S.ContainerTabPanel>
                </S.ContainerTabs>
            ) : (
                <></>
            )}
        </>
    );
};

export default Repositorios;
