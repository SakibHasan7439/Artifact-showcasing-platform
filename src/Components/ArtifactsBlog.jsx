import { FaCalendarAlt } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import blogHero from "../assets/blogHero.png";
import blogSubImg1 from "../assets/blogSubImg1.jpg";
import blogSubImg2 from "../assets/blogSubImg2.jpg";

const ArtifactsBlog = () => {
    return (
        <div className="bg-[#c4a4843b]">
            <div className="max-w-7xl w-full mx-auto pb-4 pt-12">
                <h2 className="text-xl font-playfair mb-4 md:mb-8 text-center md:text-3xl">coin hoard found in lead casing</h2>
                <div className="flex items-center mb-3 md:mb-8 justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt></FaCalendarAlt>
                        <p>January 8, 2025</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFolderOpen></FaFolderOpen>
                        <p>Medieval, Treasures</p>
                    </div>
                </div>
                <div className="flex border border-black items-center justify-between gap-4 mb-8 flex-col-reverse md:flex-row">
                <div className="p-4 w-full">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Hoard of 11th Century coins found at Sizewell C</h2>
                    <p>
                        A hoard of 11th century coins tightly wrapped in lead sheeting has been discovered at Sizewell C on the Suffolk coast. The packet contained 321 silver coins issued between 1036 and 1044 that were first placed in a textile object that has now decomposed before having the lead sheet bent around it.
                        Sizewell C is the site of a planned nuclear power station. Contractors Oxford Cotswold Archaeology were engaged to excavate before construction. The team unearthed the hoard at the intersection of two medieval boundary lines, suggesting the person who buried it picked the spot for ease of retrieval. The hoard, still tightly encased in its lead sheet, was removed to a laboratory where conservators carefully pried open the lead seam and excavated the coins from the interior.
                    </p>
                    <img src="" alt="" />
                </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="w-full">
                        <img src={blogHero} alt="" />
                    </div>
                </div>
                <div className="flex items-center my-4 justify-between gap-4 flex-col-reverse md:flex-row">
                    <img className="w-full md:w-[40%]" src={blogSubImg1} alt="" />
                    <div className="w-full md:w-[60%]">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">How it was stored...</h2>
                        The coins are all pennies except for two cut halfpence, so a notable chunk of change, but not coins of enormous value individually or in the aggregate. Based on prices recorded in legal codes from the period, the hoard would have been enough to buy 16 cows. It was likely the savings of someone who made good money, perhaps a prosperous local farmer, not a member of the regional or national elite.
                    </div>
                </div>
                <div className="flex items-center my-4 justify-between gap-4 flex-col-reverse md:flex-row">
                    <div className="w-full md:w-[70%]">
                        <span className="text-xl md:text-2xl font-semibold">The coins were issued </span>
                            during the reigns of Harold I ‘Harefoot’ (1036-40), Harthacnut (1040-2) and Edward the Confessor (1042-66), with the majority being issued by Harold I, Harthacnut second and Edward the Confessor taking up the rear with just 24 coins. The most recent of the coins are of the PACX type, issued at the beginning Edward’s reign between the summer of 1042 and the end of 1044. The coins were struck in more than 30 different mints. About 40% of the coins were minted in London; the other were struck in mints across England, include Thetford, Norwich, Ipswich, Bedford, Huntingdon, Cambridge, Lincoln, Stamford, Axbridge and Langport.
                    </div>
                    <img className="object-cover h-[300px] md:w-[30%]" src={blogSubImg2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ArtifactsBlog;