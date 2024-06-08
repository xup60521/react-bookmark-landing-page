import { useState } from "react";
import Ill1 from "/images/illustration-features-tab-1.svg";
import Ill2 from "/images/illustration-features-tab-2.svg";
import Ill3 from "/images/illustration-features-tab-3.svg";

type FeatureType = "Simple Bookmarking" | "Speedy Searching" | "Easy Sharing";
const data = {
    "Simple Bookmarking": {
        title: "Bookmark in one click",
        description: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,
        image: Ill1,
    },
    "Speedy Searching": {
        title: "Intelligent search",
        description: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
        image: Ill2,
    },
    "Easy Sharing": {
        title: "Share your bookmarks",
        description: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,
        image: Ill3,
    },
};

export default function Features() {
    const [selectedFeature, setSelectedFeature] =
        useState<FeatureType>("Speedy Searching");
    return (
        <div className="flex items-center lg:py-24 pt-36 lg:px-0 px-8 pb-0 w-full flex-col overflow-x-hidden">
            <h3 className="text-3xl font-rubik font-semibold">Features</h3>
            <p className="lg:w-[33rem] text-center font-rubik text-grayish_blue text-lg py-8">
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go.
            </p>
            <div className="lg:grid lg:grid-cols-3 flex flex-col py-2">
                <button
                    onMouseDown={() => setSelectedFeature("Simple Bookmarking")}
                    className={`w-64 py-6 transition ${
                        selectedFeature === "Simple Bookmarking"
                            ? "border-b-soft_red text-black font-bold border-b-4"
                            : " border-b-[1px] border-grayish_blue text-grayish_blue"
                    }`}
                >
                    Simple Bookmarking
                </button>
                <button
                    onMouseDown={() => setSelectedFeature("Speedy Searching")}
                    className={`w-64 py-6 transition ${
                        selectedFeature === "Speedy Searching"
                            ? "border-b-soft_red text-black font-bold border-b-4"
                            : " border-b-[1px] border-grayish_blue text-grayish_blue"
                    }`}
                >
                    Speedy Searching
                </button>
                <button
                    onMouseDown={() => setSelectedFeature("Easy Sharing")}
                    className={`w-64 py-6 transition ${
                        selectedFeature === "Easy Sharing"
                            ? "border-b-soft_red text-black font-bold border-b-4"
                            : " border-b-[1px] border-grayish_blue text-grayish_blue"
                    }`}
                >
                    Easy Sharing
                </button>
            </div>
            <FeatureSection featureType={selectedFeature} />
        </div>
    );
}

function FeatureSection({ featureType }: { featureType: FeatureType }) {
    const { title, description, image } = data[featureType];
    return (
        <div className="w-full flex items-center py-16 justify-between lg:pr-36 lg:flex-row flex-col">
            <div className="relative lg:w-fit w-[100vw] flex lg:justify-normal justify-center">
                <img src={image} alt={`${title} image`} className="lg:pl-52 lg:w-fit w-[80vw]" />
                <div className="absolute w-[110%] h-[85%] top-[6.5rem] -z-10 flex">
                    <div className="h-full flex-grow bg-soft_blue"></div>
                    <div className="h-full aspect-square rounded-full -translate-x-[50%] bg-soft_blue"></div>
                </div>
            </div>
            <div className="flex flex-col lg:w-[25rem] px-8 lg:py-0 pt-28">
                <h3 className="text-3xl font-semibold font-rubik lg:text-left text-center">{title}</h3>
                <p className="leader-8 font-rubik text-grayish_blue py-6 lg:text-left text-center">{description}</p>
                <button className="w-fit rounded-md bg-soft_blue text-white font-rubik px-5 py-3 text-sm lg:block hidden">More info</button>
            </div>
        </div>
    );
}
