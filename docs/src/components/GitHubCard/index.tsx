import { Center, Paper, rem, Text, ThemeIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import classes from './styles.module.css';

const GithubCard = () => (
  <Center mx='1rem' mt='2rem'>
    <Paper
      radius='md'
      className={classes.card}
      onClick={() => {
        open('https://github.com/VictusCode/CreateVictusApp');
      }}>
      <Center inline>
        <ThemeIcon size='xl' radius='md' variant='filled' color='black' mr='1rem'>
          <IconBrandGithub style={{ width: rem(38), height: rem(38) }} stroke={1.5} />
        </ThemeIcon>
        <Text size='xl' fw={500} inline>
          GitHub
        </Text>
      </Center>
      <Text size='sm' mt='sm' c='dimmed'>
        Go to the GitHub repository to star, translate, create issues/PRs or start discussions.
      </Text>
    </Paper>
  </Center>
);

export { GithubCard };
