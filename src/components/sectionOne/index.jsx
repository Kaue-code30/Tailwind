import { MdKeyboardArrowDown } from "react-icons/md";
const Home = () => {
    return (
        <section className="sectionOne h-screen ">
            <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
                <h1 className="text-white text-5xl font-bold md:text-8xl">
                    HUMAN SPACEFLIGHT
                </h1>
                <h2 className="text-white font-normal md:text-md">
                    Making life multiplanetary
                </h2>
                <a className="animate-bounce" href="">
                    <MdKeyboardArrowDown fontSize={50} fill="#FFF" />
                </a>
            </div>

        </section>
    )
}

export default Home