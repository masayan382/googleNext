import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header>
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p>About</p>
          <p>Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p>Gmail</p>
          <p>Images</p>
          {/* icon */}
          {/* avatar */}
        </div>
      </header>
      {/* body */}
      {/* footer */}
    </div>
  )
}
