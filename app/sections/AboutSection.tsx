import Heading from "../components/Heading";
import { SectionProps } from "../types";
const tags = [
    "Wide range of platforms",
    "World class artists",
    "Passionate coders",
    "Knowlegable researchers",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Learn more Collect And Sell Rare NFTs"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                We’re a group of passionate students building the future of blockchain from our dorm rooms. Driven by innovation and a desire to make a difference, we aim to create secure, accessible, and impactful solutions that redefine how the world connects and collaborates.
                Join us as we revolutionize the blockchain space, one idea at a time.
                </span>
                <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/robo.png"
                    alt="robo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
