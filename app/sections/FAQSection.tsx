import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is the NFT-X Space?",
        answer: "NFT-X Space is a newer way of connecting things that seamlessly integrates with the network.",
    },
    {
        question: "Where are your company branches located?",
        answer: "Our company operates globally, with branches in major tech hubs including New York, London, and Singapore.",
    },
    {
        question: "What is metamask?",
        answer: "MetaMask is a popular cryptocurrency wallet and gateway to blockchain applications, allowing you to manage digital assets and interact with decentralized apps securely.",
    },
    {
        question: "How can I buy, sell, and mint NFTs?",
        answer: "You can buy, sell, and mint NFTs by connecting your wallet, such as MetaMask, to our platform, browsing available items, or using our creation tools to mint your own NFTs.",
    },
    {
        question: "What's the best selling liquid at the moment?",
        answer: "Currently, the best-selling liquid item is the 'Alien Ether,' a highly sought-after NFT with unique features and benefits.",
    },
    {
        question: "What is the Service fee?",
        answer: "The service fee is a small percentage charged per transaction to support the platform’s operations and development.",
    },
    {
        question: "How should I start?",
        answer: "To get started, set up a crypto wallet, such as MetaMask, connect it to our platform, and explore NFTs to buy, sell, or mint your own creations.",
    },
    {
        question: "What are NFTs?",
        answer: "NFTs, or Non-Fungible Tokens, are unique digital assets stored on the blockchain, representing ownership of items like art, music, or virtual goods.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>

            {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
