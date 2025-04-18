import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    We Are Launching Soon 🚀.
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    We are a group of students trying to revolutionized the blockchain space from our dorm room.
                </span>
                <div className="row gap-4">
                    <Button>Get Started</Button>
                    <Button outline={true}>Join Discord</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/etherum.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
