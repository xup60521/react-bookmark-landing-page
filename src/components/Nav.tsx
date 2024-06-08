import Logo from "/images/logo-bookmark.svg";
import IconMenu from "/images/icon-hamburger.svg";
import { useState } from "react";
import MenuModal from "./MenuModal";

export default function Nav() {
    const [open, setOpen] = useState<"init" | "open" | "close">("init");
    return (
        <nav className={"flex justify-between items-center w-full lg:py-12 lg:px-36 px-8 py-12"}>
            <MenuModal className={`${open}`} setOpen={setOpen} />
            <img src={Logo} alt="logo" />
            <div className="hidden lg:flex items-center gap-12 text-very_dark_blue tracking-wide font-rubik text-sm">
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
            <img src={IconMenu} alt="menu icon" className="lg:hidden block cursor-pointer" onMouseDown={()=>{
                setOpen(prev => {
                    if (prev === "init" || prev === "close") {
                        return "open"
                    }
                    return "close"
                })
            }} />
        </nav>
    );
}
