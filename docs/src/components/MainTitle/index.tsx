import React, { useEffect, useState } from 'react';
import { Button, Code, Container, Group, Text, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCopy } from '@tabler/icons-react';
import { AnimatedBackground } from './background';
import classes from './styles.module.css';

const MainTitle = () => {
  const handleCopy = () => {
    notifications.show({
      title: 'Copied to clipboard',
      color: '#e7a103',
      message: 'npx victus-app app_name',
    });

    navigator?.clipboard?.writeText('npx victus-app app_name');
  };

  return (
    <div className={classes.wrapper}>
      <AnimatedBackground />
      <Container className={classes.inner}>
        <h1 className={classes.title}>
          <Text component='span' inherit td='underline'>
            Production ready
          </Text>{' '}
          and{' '}
          <Text component='span' inherit td='underline'>
            Painless
          </Text>{' '}
          way to develop
        </h1>
        <Text className={classes.description} fw={700}>
          Minimal boilerplate • Scalable • Flexible • Automized
        </Text>

        <Code className={classes.code}>
          npx victus-app app_name
          <Button className={classes.copyButton} onClick={handleCopy}>
            <IconCopy />
          </Button>
        </Code>
      </Container>
    </div>
  );
};

export { MainTitle };