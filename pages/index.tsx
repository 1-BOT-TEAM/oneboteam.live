import Link from 'next/link'

export default function Home() {
  return (

    <><p className="text-justify">1-BOT TEAM is a team created for the purpose of creating discord bots in an open source method. With our diverse skill set we are capable of producing high quality bots which are well thought out, robust, and useful to everyone.</p><h1 className="text-2xl font-bold mt-10">
      PROJECTS
    </h1><div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-2 font-bold">
        <Link href={'https://github.com/1-BOT-TEAM/1-BOT'}>
          <div className="border-solid border-4 border-black p-3 h-20 rounded-lg hover:scale-75  transform transition duration-500 bg-white">1-BOT</div>
        </Link>
        <div className="border-solid border-4 border-black p-3 h-20 rounded-lg hover:scale-75  transform transition duration-500 bg-white">NONE</div>
        <div className="border-solid border-4 border-black p-3 h-20 rounded-lg hover:scale-75  transform transition duration-500 bg-white">NONE</div>

      </div></>
  )
}
