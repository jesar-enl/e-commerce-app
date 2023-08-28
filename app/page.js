import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="ONline store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold">Hello E-commerce application!</h1>
    </div>
  );
}
