import { Link } from "react-router-dom";
import FramerAnimeComponent from "./FramerAnimeComponent";

/* eslint-disable react/prop-types */
const FeaturedArtifactInfoCard = ({ artifact }) => {
  const { name, imageUrl, like_count,  historical_context, _id } =
    artifact;
  return (
    <FramerAnimeComponent className="col-span-12 md:col-span-6 lg:col-span-3">
      <div className="card border bg-white shadow-md rounded-md h-[500px]">
        <figure className="h-[270px]">
          <img className="h-full w-full object-cover"
            src={imageUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-playfair">{name.slice(0, 20)}</h2>
          <p className="font-playfair text-sm lg:text-lg"><strong>Historical Context: </strong>{historical_context.substring(0, 30)}...</p>
          <div className="card-actions justify-start">
            <div className="px-4 py-2 mb-2, .m mv,..nmv, rounded-full border border-black"><strong>Like Count: </strong>{like_count}</div>
            <Link to={`/artifact-details/${_id}`} className="px-4 py-2 rounded-md bg-[#C4A484] hover:bg-[#766656] shadow-md btn-anime shadow-slate-600 text-white">View Details</Link>
          </div>
        </div>
      </div>
    </FramerAnimeComponent>
  );
};

export default FeaturedArtifactInfoCard;
