import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PoolTogether NFTs Metadata</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PoolTogether NFTs Metadata app
        </h1>

        <p className={styles.description}>
          This subdomain serves json files with metadata about any NFTs PoolTogether has generated.
        </p>
      </main>
    </div>
  )
}
