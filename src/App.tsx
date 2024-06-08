import Logo from "/images/logo-bookmark.svg";
import TabletImage from "/images/illustration-hero.svg";
import Features from "./components/Features";
import Extension from "./components/Extension";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Nav from "./components/Nav";

export default function App() {
    return (
        <main className="overflow-x-hiddne w-full h-fit min-h-screen flex flex-col items-center">
            <Nav />
            <div className="flex lg:flex-row-reverse lg:justify-between w-full flex-col lg:pl-36">
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
                <div className="flex flex-col flex-shrink lg:w-[32.5rem] w-full px-8 justify-center gap-8">
                    <h1 className="lg:text-[2.5rem] text-3xl leading-[3rem] font-rubik font-semibold w-full lg:text-left text-center lg:py-0 pt-12">
                        A Simple Bookmark Manager
                    </h1>
                    <p className="font-rubik text-grayish_blue lg:text-lg lg:w-fit w-full lg:text-left text-center">
                        A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see your sites load
                        instantly. Try it for free.
                    </p>
                    <div className="flex gap-2 items-center lg:justify-normal justify-center">
                        <button className="shadow rounded-md text-xs hover:bg-transparent hover:text-soft_blue border-soft_blue font-rubik border-2 lg:px-6 lg:py-3 px-4 py-2 font-medium transition text-white bg-soft_blue">
                            Get it on Chrome
                        </button>
                        <button className="shadow rounded-md text-xs hover:bg-transparent hover:border-black border-transparent font-rubik border-2 lg:px-6 lg:py-3 px-4 py-2 font-medium transition bg-[#f7f7f7]">
                            Get it on Firefox
                        </button>
                    </div>
                </div>
            </div>
            <Features />
            <Extension />
            <FAQ />
            <Contact />
            <footer className="w-full lg:flex-row flex-col flex lg:px-36 justify-between items-center  py-8 bg-very_dark_blue">
                <div className="flex gap-8 lg:flex-row flex-col">
                    <div className="relative flex items-center">
                        <img src={Logo} alt="logo image" />
                        <span className="text-white font-rubik tracking-widest absolute left-9 font-medium text-lg">
                            BOOKMARK
                        </span>
                    </div>
                    <button className="font-rubik text-white text-xs hover:text-soft_red transition">
                        FEATURES
                    </button>
                    <button className="font-rubik text-white text-xs hover:text-soft_red transition">
                        PRICING
                    </button>
                    <button className="font-rubik text-white text-xs hover:text-soft_red transition">
                        CONTACT
                    </button>
                </div>
                <div className="flex items-center gap-8 lg:py-0 py-8">
                    <FaFacebook className="size-6 text-white transition hover:text-soft_red cursor-pointer" />
                    <FaTwitter className="size-6 text-white transition hover:text-soft_red cursor-pointer" />
                </div>
            </footer>
        </main>
    );
}
