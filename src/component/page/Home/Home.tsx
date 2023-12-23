import React from 'react';
import { Button, Input, Stack } from '@/component/ui';
import styles from './Home.module.scss';

export const HomePage = () => {
  return (
    <form className={styles.form}>
      <Stack direction="row" className={styles.search}>
        <Input type="text" />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};
