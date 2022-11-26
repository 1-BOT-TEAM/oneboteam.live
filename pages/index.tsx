import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'

export default function Home() {
  return (

    <>
      <PageSEO title="Home" description="1-BOT TEAM" />
      <p className="text-justify text-lg leading-7 text-gray-500 dark:text-gray-400">1-BOT TEAM is a team created for the purpose of creating discord bots in an open source method. With our diverse skill set we are capable of producing high quality bots which are well thought out, robust, and useful to everyone.</p>
      <h1 className="text-2xl font-bold mt-10">
        PROJECTS
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-2 font-bold">
        <Link href={'https://github.com/1-BOT-TEAM/1-BOT'}>
          <div className="border-solid border-4 border-gray-200 dark:border-gray-800 p-3 h-20 rounded-lg hover:scale-75  transform transition duration-500 bg-white dark:bg-black">1-BOT</div>
        </Link>

      </div>
      <h1 className="text-2xl font-bold mt-10">
        TEAMS
      </h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-2 font-bold">
        <div className="border-solid border-4 border-gray-200 dark:border-gray-800 h-40  rounded-lg hover:scale-75  transform transition duration-500 bg-white dark:bg-black">
          <Image src={'/demura.png'} width={100} height={100} alt={''} className='hover:opacity-50 rounded-full my-2 mx-6' />
          <p className='text-center'>
            Demura AI#4921
          </p>
        </div>
        <div className="border-solid border-4 border-gray-200 dark:border-gray-800 h-40  rounded-lg hover:scale-75  transform transition duration-500 bg-white dark:bg-black">
          <Image src={'/dx.png'} width={100} height={100} alt={''} className='hover:opacity-50 rounded-full my-2 mx-6' />
          <p className='text-center'>
            dxrie#2092
          </p>
        </div>
      </div>
    </>
  )
}
