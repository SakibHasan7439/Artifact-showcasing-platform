import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Components/hooks/UseAxiosSecure";
import MyArtifactsCard from "../../Components/MyArtifactsCard";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import noData from "../../assets/noData.json"

const MyArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [artifacts, setArtifacts] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(()=>{
        fetchAllData();
    }, [user]);

    const fetchAllData = async () =>{
        const { data } = await axiosSecure.get(`/my-artifacts/${user?.email}`)
        setArtifacts(data);
    };

    return (
        <div>

            <Helmet>
                <title>Artifact Tracker | My Artifacts</title>
            </Helmet>
            {
                artifacts.length === 0 ?
                <Lottie className="w-[80%] md:1/2 lg:w-1/4 mx-auto" animationData={noData}></Lottie> :
            <div className="max-w-7xl w-full mx-auto">
            <h2 className="text-center text-3xl font-bold font-playfair mb-6 md:mb-8">My added artifacts</h2>
            <div className="grid grid-cols-12 gap-4">
                {
                    artifacts.map((artifact) => <MyArtifactsCard 
                        key={artifact._id}
                        artifact={artifact}
                        fetchAllData={fetchAllData}>   
                    </MyArtifactsCard>)
                }
            </div>
        </div>
            }
        </div>
    );
};

export default MyArtifacts;