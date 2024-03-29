import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  const description = `double jump.frog株式会社のコーポレートサイトです。ゲームのように楽しく暮らせる世界を目指します。`

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>double jump.frog Inc.</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-primary text-white sticky px-2 py-4">
        <img src="/images/logo.png" className="h-16 mx-auto lg:mx-0" alt="logo" />
      </header>

      <div className="text-center w-full relative">
        <img src="/images/hero.jpg" className="object-cover w-full max-h-[60vh]" alt="hero" />
        <div
          className="bg-white/60 w-full py-2 lg:py-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <p className="text-xl lg:text-8xl font-bold">
            Turn your reality into a game!
          </p>
        </div>
      </div>
      <main className="container mx-auto prose lg:prose-2xl prose-gray mb-auto">
        <section className="p-4 prose lg:prose-2xl">
          <h2 className="text-center text-accent">Philosophy</h2>
          <p>
            Web3/AR/VRといったテクノロジーの進歩によって、リアル世界をゲームのような世界にすることができる時代になりつつあります。
          </p>
          <p>
            我々は、現実世界を「ゲームのような心地よいフィードバックを受けて、人の可能性を引き出せる世界」に作り直します。
            そして誰でもゲームのように楽しく暮らせる世界を目指します！
          </p>
        </section>


        <section className="p-4 prose lg:prose-2xl">
          <h2 className="text-center text-accent">Company</h2>

          <table className="table-auto">
            <tbody>
              <tr>
                <th className="font-semibold text-right whitespace-pre">会社名</th>
                <td>double jump.frog株式会社</td>
              </tr>
              <tr>
                <th className="font-semibold text-right whitespace-pre">設立</th>
                <td>2022年6月1日</td>
              </tr>
              <tr>
                <th className="font-semibold text-right whitespace-pre">代表者</th>
                <td>CEO 類地 健太郎</td>
              </tr>
              <tr>
                <th className="font-semibold text-right whitespace-pre">事業内容</th>
                <td>ブロックチェーン技術を用いたゲームおよびアセットの開発・運営・販売</td>
              </tr>
              <tr>
                <th className="font-semibold text-right whitespace-pre">Eメール</th>
                <td>
                  <a href="mailto:info@djfrog.jp">info@djfrog.jp</a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="bg-primary text-white sticky">
        <div className="container mx-auto text-center pt-2 pb-4">
          <span>&copy; 2022 double jump.frog Inc.</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
