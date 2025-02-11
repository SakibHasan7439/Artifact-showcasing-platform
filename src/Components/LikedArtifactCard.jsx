import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const LikedArtifactCard = ({artifact}) => {
    const {name, imageUrl, like_count, _id} = artifact;
  return (
        <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={imageUrl}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{like_count}</td>
        <td>
        <Link to={`/artifact-details/${_id}`} className="px-4 py-2 rounded-md shadow-md shadow-slate-400 bg-[#786655da] btn-anime text-white">Details</Link>
        </td>
      </tr>
  );
};

export default LikedArtifactCard;
