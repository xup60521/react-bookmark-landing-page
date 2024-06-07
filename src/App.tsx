import Logo from "/images/logo-bookmark.svg";
import TabletImage from "/images/illustration-hero.svg";
import Features from "./components/Features";
import Extension from "./components/Extension";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function App() {
    return (
        <main className="overflow-x-hiddne w-full h-fit min-h-screen flex flex-col items-center">
            <nav className="flex justify-between items-center w-full lg:py-12 lg:px-36">
                <img src={Logo} alt="logo" />
                <div className="flex items-center gap-12 text-very_dark_blue tracking-wide font-rubik text-sm">
                    <button className="transition hover:text-soft_red">
                        FEATURE
                    </button>
                    <button className="transition hover:text-soft_red">
                        PRICING
                    </button>
                    <button className="transition hover:text-soft_red">
                        CONTACT
                    </button>
                    <button className="text-white rounded bg-soft_red shadow-xl px-7 py-2 border-2 border-soft_red hover:bg-transparent hover:text-soft_red transition">
                        LOGIN
                    </button>
                </div>
            </nav>
            <div className="flex lg:flex-row-reverse lg:justify-between w-full flex-row lg:pl-36">
                <div className="relative">
                    <img
                        src={TabletImage}
                        alt="tablet image"
                        className="z-30 p-8"
                    />
                    <div className="w-full absolute top-0 -z-10 h-3/5 flex translate-y-[60%]">
                        <div className="rounded-full aspect-square translate-x-[50%] h-full bg-soft_blue"></div>
                        <div className="flex-grow bg-soft_blue h-full"></div>
                    </div>
                </div>
                <div className="flex flex-col flex-shrink w-[32.5rem] justify-center gap-8">
                    <h1 className="text-[3rem] leading-[3rem] font-rubik font-semibold">
                        A Simple Bookmark Manager
                    </h1>
                    <p className="font-rubik text-grayish_blue text-lg">
                        A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see your sites load
                        instantly. Try it for free.
                    </p>
                    <div className="flex gap-2 items-center">
                        <button className="shadow rounded-md hover:bg-transparent hover:text-soft_blue border-soft_blue font-rubik text-sm border-2 px-6 py-3 font-medium transition text-white bg-soft_blue">
                            Get it on Chrome
                        </button>
                        <button className="shadow rounded-md hover:bg-transparent hover:border-black border-transparent font-rubik text-sm border-2 px-6 py-3 font-medium transition bg-[#f7f7f7]">
                            Get it on Firefox
                        </button>
                    </div>
                </div>
            </div>
            <Features />
            <Extension />
            <FAQ />
            <Contact />
            <footer className="w-full flex lg:px-36 justify-between items-center  py-8 bg-very_dark_blue">
                <div className="flex gap-8">
                    <div className="relative flex items-center">
                        <img src={Logo} alt="logo image" />
                        <span className="text-white font-rubik tracking-wider absolute left-10">BOOKMARK</span>
                    </div>
                    <button className="font-rubik text-white text-xs hover:text-soft_red transition">FEATURES</button>
                    <button className="font-rubik text-white text-xs hover:text-soft_red transition">PRICING</button>
                    <button className="font-rubik text-white text-xs hover:text-soft_red transition">CONTACT</button>
                </div>
                <div className="flex items-center gap-8">
                    <FaFacebook className="size-6 text-white transition hover:text-soft_red cursor-pointer" />
                    <FaTwitter className="size-6 text-white transition hover:text-soft_red cursor-pointer" />
                </div>
            </footer>
        </main>
    );
}
