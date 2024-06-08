import { Fragment, useState } from "react";
import IconError from "/images/icon-error.svg"

export default function Contact() {
    const [input, setInput] = useState("");

    return (
        <div className="w-full bg-soft_blue text-whtie flex flex-col items-center py-12 lg:px-0 px-8">
            <div className="flex flex-col lg:w-[30rem]">
                <span className="text-white font-rubik tracking-widest text-center text-xs font-medium">
                    {"35,000+ already joined".toUpperCase()}
                </span>
                <h3 className="text-2xl font-rubik py-6 font-semibold w-full text-center text-white">
                    Stay up-to-date with what we’re doing
                </h3>
                <div className="flex items-start gap-4 lg:flex-row flex-col lg:py-0 pt-4">
                    <InputComponent input={input} setInput={setInput} />
                    <button className="text-white lg:w-fit w-full flex-shrink-0 bg-soft_red border-2 border-soft_red transition hover:bg-white text-xs px-4 h-10 rounded hover:text-soft_red">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

function InputComponent(props: {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { input, setInput } = props;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return (
        <div className="flex-grow relative lg:h-16 lg:w-fit w-full">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="email"
                className={`w-full h-10 rounded px-4 text-xs focus:outline-none border-2 ${
                    input !== "" && !emailRegex.test(input)
                        ? "border-soft_red rounded-b-none"
                        : ""
                }`}
                placeholder="Enter your email address"
            />
            {input !== "" && !emailRegex.test(input) && (
                <Fragment>
                    <img src={IconError} alt="email error icon" className="absolute right-3 size-5 top-[0.65rem]" />
                    <div className="h-fit w-full -z-10 bg-soft_red rounded-b text-xs px-3 py-1 text-white font-rubik italic">
                        Whoops, make sure it's an email
                    </div>
                </Fragment>
            )}
        </div>
    );
}