import Head from 'next/head'
import { BlockMath } from 'react-katex'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>x27 | Education, Product, Technology</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <BlockMath math={"x_{27}"} />

        <div className="services">
          <p className="service">
            Education
          </p>

          <p className="service">
            Product
          </p>

          <p className="service">
            Technology
          </p>
        </div>

        <p className="about">
          A studio for forward-thinking education programmes.
        </p>

        <a className="contact" href="mailto:sam@x27.dev">Contact</a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #fff1e5;
          color: #222;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 5rem;
          font-rendering: optimiseLegibility;
        }

        a {
          color: inherit;
        }

        .about {
          font-size: 1.5rem;
        }

        .services {
          display: flex;
          width: 61.8vw;
          align-items: center;
          justify-content: space-between;
          padding: 0;
          max-width: 540px;
          min-width: 320px;
          margin: -5rem auto 1rem auto;
          color: #444;
        }

        .service {
          text-align: center;
          line-height: 1;
          font-size: 1.2rem;
        }

        .contact {
          line-height: 1;
          font-size: 1rem;
          position: absolute;
          bottom: 2rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
