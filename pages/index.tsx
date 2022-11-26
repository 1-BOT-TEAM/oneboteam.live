import Link from 'next/link'
import { PageSEO } from '@/components/SEO'

export default function Home() {
  return (

    <>
      <PageSEO title="Home" description="1-BOT TEAM" />
      <p className="text-justify text-lg leading-7 text-gray-500 dark:text-gray-400">1-BOT TEAM is a team created for the purpose of creating discord bots in an open source method. With our diverse skill set we are capable of producing high quality bots which are well thought out, robust, and useful to everyone.</p><h1 className="text-2xl font-bold mt-10">
        PROJECTS
      </h1><div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-2 font-bold">
        <Link href={'https://github.com/1-BOT-TEAM/1-BOT'}>
          <div className="border-solid border-4 border-gray-200 dark:border-gray-800 p-3 h-20 rounded-lg hover:scale-75  transform transition duration-500 bg-white dark:bg-black">1-BOT</div>
        </Link>
        <div className="border-solid border-4 border-gray-200 dark:border-gray-800 p-3 h-20 rounded-lg hover:scale-75  transform transition duration-500 bg-white dark:bg-black">NONE</div>
        <div className="border-solid border-4 border-gray-200 dark:border-gray-800 p-3 h-20 rounded-lg hover:scale-75  transform transition duration-500 bg-white dark:bg-black">NONE</div>

      </div></>
  )
}
