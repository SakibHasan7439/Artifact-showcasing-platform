import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Components/hooks/UseAxiosSecure";
import Lottie from "lottie-react";
import noData from "../../assets/noData.json";
import LikedArtifactCard from "../../Components/LikedArtifactCard";
import { Helmet } from "react-helmet-async";

const LikedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetchLikedArtifacts();
  }, [user?.email]);

  const fetchLikedArtifacts = async () => {
    const { data } = await axiosSecure.get(`/liked-artifacts/${user?.email}`);
    setArtifacts(data);
  };

  console.log(artifacts);
  return (
    <div>
      <Helmet>
        <title>Artifact Tracker | Liked Artifacts</title>
      </Helmet>
      {artifacts.length === 0 ? (
        <Lottie
          className="w-[80%] md:1/2 lg:w-1/4 mx-auto"
          animationData={noData}
        ></Lottie>
      ) : (
        <div className="max-w-5xl w-full mx-auto my-8">
            <h2 className="text-xl md:text-2xl font-playfair text-center my-8">My Liked Artifacts Collection</h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Total Liked</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {artifacts.map((artifact) => (
                    <LikedArtifactCard
                    key={artifact._id}
                    artifact={artifact}
                    ></LikedArtifactCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
