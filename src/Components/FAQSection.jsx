import Lottie from "lottie-react";
import FAQAccordion from "./FAQAccordion";
import faq from "../assets/faq.json"
import FramerAnimeComponent from "./FramerAnimeComponent";

const FAQSection = () => {
    return (
        <div className="bg-[#c4a4843b] p-6 md:p-12">
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
                <FramerAnimeComponent className="md:w-1/2">
                    <FAQAccordion></FAQAccordion>
                </FramerAnimeComponent>
                <Lottie className="h-[340px] lg:h-[500px]" animationData={faq}></Lottie>
            </div>
        </div>
    );
};

export default FAQSection;