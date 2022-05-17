import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile'
import Repositorios from './components/repositorios';
import { ResetCss } from './global/resetCss';
import GithubProvider from './components/providers/githubprovider';


function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <Layout>
          <Profile />
          <Repositorios />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
