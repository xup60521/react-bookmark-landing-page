export default function Contact() {
    return (
        <div className="w-full bg-soft_blue text-whtie flex flex-col items-center py-12">
            <div className="flex flex-col w-[23rem]">
                <span className="text-white font-rubik tracking-widest text-center text-xs font-medium">
                    {"35,000+ already joined".toUpperCase()}
                </span>
                <h3 className="text-2xl font-rubik py-6 font-semibold w-full text-center text-white">
                    Stay up-to-date with what we’re doing
                </h3>
                <div className="flex items-start gap-4">
                    <div className="flex-grow relative">
                        <input type="email" className="w-full h-10 rounded px-4 text-xs focus:outline-none" placeholder="Enter your email address" />
                        <div></div>
                    </div>
                    <button className="text-white bg-soft_red border-2 border-soft_red transition hover:bg-white text-xs px-4 h-10 rounded hover:text-soft_red">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
