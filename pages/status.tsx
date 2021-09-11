import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'
import Head from 'next/head'
import DateComponent from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'


// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params.id as string)
//   return {
//     props: {
//       postData
//     }
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

export default function Post({
  postData
} : {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  const title = "Habits and Experiments"
  const morningRoutineDate = "2020-11-09"
  const exerciseStartDate = "2021-01-01"
  const exerciseRampUpDate = "2021-09-05"

  const daysAgo = (dateString: string) => ((new Date().getTime() - new Date(dateString).getTime())/(1000 * 3600 * 24)).toFixed()
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingLg}>{title}</h1>
        <h1 className={utilStyles.headingMd}>Morning Routine 🌅</h1>
        <p>For the past {daysAgo(morningRoutineDate)} days I have been starting every morning by:</p>
        <ul>
          <li>Not checking my phone</li>
          <li>Meditating (usually ~10 minutes)</li>
          <li>Writing down 3 things I am thankful for in a notebook</li>
        </ul>
        <p>How have I stuck with it without missing a single day? I use a service called <a href="https://bossasaservice.life/">Boss As A Service</a> (not a referral link). Essentially, I pay someone $25/mo. to message me daily to see how my goals are going. I'm extremely satisfied with how it's helped me stay consistent.</p>
        <h1 className={utilStyles.headingMd}>Exercise 🏃‍♂️</h1>
        <p>
          {daysAgo(exerciseStartDate)} days ago, I started exercising every single day. Generally, I found that I ended up mostly just walking, and I didn't see much physical improvement. 
        </p>
        <p>
          So, {daysAgo(exerciseRampUpDate)} days ago I committed to working out every weekday.
          Currently, I'm doing <a href="https://www.beachbodyondemand.com/programs/power-90/workouts">Power90</a>, tennis 🎾, or running 🏃‍♂️
        </p>
        <h1 className={utilStyles.headingMd}>Past Experiments 🧪</h1>
        <p><b>Cold Showers:</b> I tried cold showers for 3-4 months. As amazing as some gurus say they are, the main benefit I found was that I was less averse to cold water. I became more familiar with the mindset of doing things even though they sucked. But, I also found many excuses to take fewer showers...</p>
        <p><b>Writing Everyday:</b> I tried writing every morning for about 2.5 weeks. I really enjoyed this. It helped me perceive my thoughts more clearly. However, I think sometimes I spent too much time ruminating in negative thoughts than positive ones. What really ended it for me was the hand pains I got from typing 🙈</p>
        <p><b>9Round:</b> I tried 9Round after I moved to Dallas because there is one right next to our apartment, and I've been intrigued by its "30 min HIIT"-style workout for a while. I enjoyed it, but sharing a car made it a pain. And again, an injury forced me to quit. I'm a fragile guy, what can I say 💅</p>
      </article>
    </Layout>
  )
}
