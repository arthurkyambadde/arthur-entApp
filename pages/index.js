import Head from 'next/head';
import { Buttons, Icons } from '../components/ui';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DanMusic - Live and experience a full music extasy</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <div className={styles.app}>
        <Buttons.IconButton icon={<Icons.Browse />}></Buttons.IconButton>
      </div>
    </div>
  );
}
