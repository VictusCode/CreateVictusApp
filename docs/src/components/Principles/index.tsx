import React from 'react';
import { Card, Container, rem, SimpleGrid, Text, Title } from '@mantine/core';
import { IconArrowsDiagonal2, IconBadge4k, IconBrandGithub, IconBugOff, IconCloud, IconMaximize, IconMinus, IconRocket, IconSparkles, IconTool, IconTools, IconUser } from '@tabler/icons-react';
import classes from './index.module.css';
import { MinimalBoilerplateIcon } from '@site/src/icons/minimalBoilerplate';

const principlesData = [
  {
    title: 'Minimal boilerplate',
    description: 'Write less code to achieve more. Our architecture reduces repetitive code through smart abstractions and automated tooling.',
    icon: MinimalBoilerplateIcon
  },
  {
    title: 'Scalable by default',
    description: 'Designed to grow with your application. Add new features and modules without refactoring existing code.',
    icon: IconArrowsDiagonal2
  },
  {
    title: 'Developer experience',
    description: 'Built with developer productivity in mind. Clear patterns, helpful tooling, and comprehensive documentation.',
    icon: IconSparkles
  },
  {
    title: 'Automated Workflows',
    description: 'Built-in automation for common tasks, code generation, and development workflows. Reduces manual work and ensures consistency.',
    icon: IconRocket
  },
  {
    title: 'Flexible Architecture',
    description: 'Adaptable structure that accommodates different use cases and development styles. Easy to modify and extend without breaking existing functionality.',
    icon: IconTools
  },
  {
    title: "Free and Open Source",
    description: "Released under MIT license. Use it in personal and commercial projects without restrictions.",
    icon: IconBrandGithub
  }
];

const Principles = () => {
  const principles = principlesData.map((principe, index) => (
    <Card key={principe.title} shadow='md' radius='md' className={classes.card} padding='xl'>
      <principe.icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={
        (index & 1) === 0 ? 'var(--accent-color)' : 'var(--primary-color)'
      } />
      <Text fz='lg' fw={500} className={(index & 1) === 0 ? classes.cardTitle1 : classes.cardTitle2} mt='md'>
        {principe.title}
      </Text>
      <Text fz='sm' c='dimmed' mt='sm'>
        {principe.description}
      </Text>
    </Card>
  ));

  return (
    <>
      <Title order={2} className={classes.title} ta='center' mt='xl'>
        Main Principles
      </Title>
      <Container size='lg' py='xl'>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing='xl' mt={0}>
          {principles}
        </SimpleGrid>
      </Container>
    </>
  );
};
export { Principles };
