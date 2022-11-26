import Link from "next/link";
export default function Footer() {
    return (
        <footer className="mt-10">
            <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
            <div className="mb-9 flex space-x-2 text-sm text-gray-400 dark:text-gray-400">
                <div>ONE BOT</div>
                <div>{` • `}</div>
                <div>{`© ${new Date().getFullYear()}`}</div>
                <div>{` • `}</div>
                <Link href="/">TEAM</Link>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    3.0
                </span>
            </div>
        </footer>
    )
}