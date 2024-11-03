import React from 'react';
import '@mantine/carousel/styles.css';
import {
  Container,
  createTheme,
  MantineProvider,
  Title,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import Layout from '@theme/Layout';
import { GithubCard } from '../components/GitHubCard';
import { MainTitle } from '../components/MainTitle';
import classes from './index.module.css';
import { Principles } from '../components/Principles';

const theme = createTheme({});

export default function Home() {
  return (
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
      <Layout title={''} description='Description will go into a meta tag in <head />'>
        <MainTitle />
        <main>
          {/* TODO: Add video here */}
          <Principles />
          <GithubCard />
        </main>
      </Layout>
    </MantineProvider>
  );
}
