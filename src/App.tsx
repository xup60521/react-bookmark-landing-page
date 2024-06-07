import Logo from "/images/logo-bookmark.svg";
import TabletImage from "/images/illustration-hero.svg";

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
            <div className="flex lg:flex-row-reverse flex-row">
                <div>
                    <img src={TabletImage} alt="tablet image" />
                    <div>
                        
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see your sites load
                        instantly. Try it for free.
                    </p>
                    <div>
                        <button>Get it on Chrome</button>
                        <button>Get it on Firefox</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
