import React from 'react';
import '@mantine/carousel/styles.css';
import {
  createTheme,
  MantineProvider,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import Layout from '@theme/Layout';
import { GithubCard } from '../components/GitHubCard';
import { MainTitle } from '../components/MainTitle';
import { Principles } from '../components/Principles';

const theme = createTheme({});

 const Home = () => (
  <MantineProvider theme={theme} defaultColorScheme='dark'>
    <Notifications
      style={{
        zIndex: 9999,
        position: 'fixed',
        bottom: 0,
        right: 0,
        margin: 'auto',
        width: '100%',
        maxWidth: '500px',
      }}
    />
    <Layout title='VictusCode' description='Production ready and painless way to develop React, Nest, Solid and Tauri applications. Minimal boilerplate, scalable, flexible and automized.' >
      <MainTitle />
      <main>
        {/* TODO: Add video here */}
        <Principles />
        <GithubCard />
      </main>
    </Layout>
  </MantineProvider>
)

export default Home;