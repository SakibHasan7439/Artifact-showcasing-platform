import { useEffect, useState } from "react";
import useAxiosSecure from "./hooks/UseAxiosSecure";
import FeaturedArtifactInfoCard from "./FeaturedArtifactInfoCard";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const FeaturesArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(()=>{
        setTimeout(() => {
            fetchFeaturedData();
        }, 1000);
    }, []);

    const fetchFeaturedData = async() =>{
        const {data} = await axiosSecure.get('/features-artifacts');
        setArtifacts(data);
    }

    return (
        <div className="p-4 lg:p-8 bg-[#c4a4843b]">
            
            <div className="max-w-7xl w-full mx-auto mb-8 md:mb-12">
                <h1 className="font-playfair h-8 text-3xl text-center mb-6 md:my-12">
                <Typewriter 
                    words={['Featured Artifacts']}
                    loop={true}
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}>
                </Typewriter></h1>
                <div className="mb-8">
                    <Swiper slidesPerView={4}
                        breakpoints={{
                        350: {
                            slidesPerView: 1
                        },

                        414: {
                            slidesPerView: 2
                        },

                        640:{
                            slidesPerView: 3
                        },

                        1024: {
                            slidesPerView: 4, // For larger devices
                        },
                        }}
                        spaceBetween={20}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div>
                            {
                            artifacts.map((artifact) =><SwiperSlide key={artifact._id}>
                                <FeaturedArtifactInfoCard
                                key={artifact._id}
                                artifact={artifact}>                      
                            </FeaturedArtifactInfoCard>
                            </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                    
                </div>
                <Link to={"/all-artifacts"} className="text-xl btn-anime font-playfair hover:bg-[#756453] md:text-2xl px-4 py-2 rounded-md bg-[#C4A484] text-white shadow-md shadow-slate-800">
                See all Artifacts
                </Link>
            </div>
        </div>
    );
};

export default FeaturesArtifacts;