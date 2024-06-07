import ChromeIcon from "/images/logo-chrome.svg";
import FirefoxIcon from "/images/logo-firefox.svg";
import OperaIcon from "/images/logo-opera.svg";

export default function Extension() {
    return (
        <div className="flex flex-col justify-center py-24">
            <div className="flex flex-col font-rubik items-center">
                <h3 className="text-3xl font-rubik font-medium text-center">
                    Download the extension
                </h3>
                <p className="font-rubik text-grayish_blue w-[30rem] py-6 text-center">
                    We’ve got more browsers in the pipeline. Please do let us
                    know if you’ve got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 py-24">
                <div className="flex flex-col items-center shadow-lg rounded-lg w-[15rem] -translate-y-[2.5rem]">
                    <div className="w-full flex flex-col items-center justify-center py-8">
                        <img
                            src={ChromeIcon}
                            alt="chrome icon"
                            className="size-20"
                        />
                        <p className="font-medium font-rubik text-lg mt-8">
                            Add to Chrome
                        </p>
                        <span className="font-rubik text-grayish_blue text-xs py-2">
                            Minimum version 62
                        </span>
                    </div>
                    <div className="w-full p-5 py-6 border-t-4 border-dotted border-grayish_blue">
                        <button className="text-xs transition text-white w-full py-3 font-bold border-2 border-soft_blue hover:bg-transparent hover:text-soft_blue bg-soft_blue rounded-lg">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center shadow-lg rounded-lg w-[15rem]">
                    <div className="w-full flex flex-col items-center justify-center py-8">
                        <img
                            src={FirefoxIcon}
                            alt="firefox icon"
                            className="size-20"
                        />
                        <p className="font-medium font-rubik text-lg mt-8">
                            Add to Firefox
                        </p>
                        <span className="font-rubik text-grayish_blue text-xs py-2">
                            Minimum version 55
                        </span>
                    </div>
                    <div className="w-full p-5 py-6 border-t-4 border-dotted border-grayish_blue">
                        <button className="text-xs transition text-white w-full py-3 font-bold border-2 border-soft_blue hover:bg-transparent hover:text-soft_blue bg-soft_blue rounded-lg">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center shadow-lg rounded-lg w-[15rem] translate-y-[2.5rem]">
                    <div className="w-full flex flex-col items-center justify-center py-8">
                        <img
                            src={OperaIcon}
                            alt="opera icon"
                            className="size-20"
                        />
                        <p className="font-medium font-rubik text-lg mt-8">
                            Add to Opera
                        </p>
                        <span className="font-rubik text-grayish_blue text-xs py-2">
                            Minimum version 46
                        </span>
                    </div>
                    <div className="w-full p-5 py-6 border-t-4 border-dotted border-grayish_blue">
                        <button className="text-xs transition text-white w-full py-3 font-bold border-2 border-soft_blue hover:bg-transparent hover:text-soft_blue bg-soft_blue rounded-lg">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
