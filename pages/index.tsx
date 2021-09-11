import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
// import DateComponent from '../components/date'
import { GetStaticProps } from 'next'


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi 👋</p>
        <p>I'm  Zach – a software engineer with the mindset 🧠 of an entrepreneur.</p>
        <p>I enjoy learning about tech, management, companies, and investing.</p>
        <p>I work as <a href="https://www.forbes.com/sites/quora/2017/09/06/how-is-a-product-engineer-different-from-a-full-stack-engineer" target="_blank">Product Engineer</a> at <a href="https://buy.linqapp.com" target="_blank">Linq</a>.</p>
        <p>I like running experiments in my life as a way to try new things. See my <Link href="/status"><a>current status</a></Link>.</p>
        <p>I <a href="https://twitter.com/zgramstad" target="_blank">tweet</a> occasionally (like <i>super</i> occasionally).</p>
          {/* <p>I write occasionally 👇</p> */}

        {/* <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateComponent dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}
