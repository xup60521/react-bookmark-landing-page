import { createPortal } from "react-dom";
import Logo from "/images/logo-bookmark.svg";
import CloseIcon from "/images/icon-close.svg";
import "./MenuModal.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function MenuModal({
    className,
    setOpen,
}: {
    className?: string;
    setOpen: React.Dispatch<React.SetStateAction<"init" | "open" | "close">>;
}) {
    return (
        <Portal>
            <div className={`${className}`}>
                <div className="flex justify-between w-full py-8 pb-6 items-center bg-[#31364e] ">
                    <div className="flex relative">
                        <img src={Logo} alt="logo" className="h-fit" />
                        <span className="text-white font-rubik tracking-widest absolute left-9 top-0 font-medium text-lg">
                            BOOKMARK
                        </span>
                    </div>
                    <img
                        src={CloseIcon}
                        alt="close icon"
                        className="size-4 cursor-pointer"
                        onClick={() => setOpen("close")}
                    />
                </div>
                <div className="flex flex-col">
                    <button className="text-white transition hover:text-soft_red font-rubik tracking-widest py-4 border-t-[1px] border-grayish_blue">
                        FEATURES
                    </button>
                    <button className="text-white transition hover:text-soft_red font-rubik tracking-widest py-4 border-t-[1px] border-grayish_blue">
                        PRICING
                    </button>
                    <button className="text-white transition hover:text-soft_red font-rubik tracking-widest py-4 border-t-[1px] border-grayish_blue">
                        CONTACT
                    </button>
                    <div className="border-t-[1px] w-full p-1 border-grayish_blue"></div>
                </div>
                <button className="w-full py-2 tracking-widest transition hover:bg-white hover:text-very_dark_blue font-bold text-white border-2 rounded-md border-white">
                    LOGIN
                </button>
                <div className="flex-grow flex justify-center items-end gap-8 pb-8">
                    <FaFacebook className="size-6 text-white transition hover:text-soft_red cursor-pointer" />
                    <FaTwitter className="size-6 text-white transition hover:text-soft_red cursor-pointer" />
                </div>
            </div>
        </Portal>
    );
}

function Portal({ children }: { children: React.ReactNode }) {
    const modal = document.getElementById("modal");
    if (!modal) {
        return children;
    }
    return createPortal(children, modal);
}
