import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MosqueOS Admin</title>
        <meta name="description" content="Admin interface for the MosqueOS Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <h1 className="font-bold text-3xl">MosqueOS Admin</h1>
      </main>
    </>
  )
}
