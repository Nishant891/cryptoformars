import Button from "../components/Button";
import Heading from "../components/Heading";

export default function CollectionSection() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start col gap-4 items-start pr-4">
                <Heading heading="Collection" subHeading="Extraterrestial NFT Items" />
                <span className="text-app_gray/80">
                Own a piece of the cosmos! These unique, limited-edition NFTs are inspired by alien worlds and intergalactic adventures. Join the journey beyond the stars. 🚀✨
                </span>
                <Button outline>View on Opensea</Button>
            </div>
            <div className="flex-[2] overflow-x-scroll flex-grow max-w-[90vw] no-scrollbar inline-flex flex-row gap-4">
                {[1, 2, 3, 4, 5].map((n, i) => (
                    <div className="min-w-[200px] rounded-md" key={i}>
                        <img
                            className="object-cover"
                            src={`/assets/av-${n}.jpeg`}
                            alt="avatar"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
