import Link from "next/link";
import { Discord, Github } from "@icons-pack/react-simple-icons"
import Themeswitch from './Themeswitch'
import Footer from "./Footer";
import MobileNav from "./MobileNav";

interface Props {
    children: React.ReactNode;
}


const LayoutWrapper = ({ children }: Props) => {
    return (
        <>
            <div className="mx-auto flex max-w-sm flex-col gap-10 px-4 sm:gap-5 sm:px-6 md:max-w-2xl md:px-0 xl:w-screen xl:max-w-2xl xl:px-0 mt-4">
                <nav className="hidden lg:block">
                    <Link className="flex items-center btn ease-in
		      duration-200 cursor-pointer hover:opacity-80 bg-[#7289d9] h-8 px-6 font-medium tracking-wide text-white transition rounded shadow-md focus:shadow-outline focus:outline-none float-right ml-2 z-10" href={'/discord'}><span><Discord /></span></Link>
                    <Link className="flex items-center btn ease-in
		      duration-200 cursor-pointer hover:opacity-80 bg-black h-8 px-6 font-medium tracking-wide text-white transition rounded shadow-md focus:shadow-outline focus:outline-none float-right z-10" href={'/github'}><span><Github /></span></Link>
                    <div className="flex items-center btn ease-in
		      duration-200 cursor-pointer h-8 font-medium tracking-wide text-white transition rounded shadow-md focus:shadow-outline focus:outline-none float-right z-10 mr-2">
                        <Themeswitch />
                    </div>
                    <h1 className="text-3xl font-bold">
                        1-BOT TEAM
                    </h1>
                </nav>
                <MobileNav />
                <main>
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default LayoutWrapper;