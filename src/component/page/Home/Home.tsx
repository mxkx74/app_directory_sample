import React from 'react';
import { Button, Input, Stack } from '@/component/ui';
import { MeLibraryList } from '@/feature/meLibraryList/component/MeLibraryList';
import styles from './Home.module.scss';

export const HomePage = () => {
  return (
    <>
      <MeLibraryList />
      <form className={styles.form}>
        <Stack direction="row" className={styles.search}>
          <Input type="text" />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </>
  );
};
