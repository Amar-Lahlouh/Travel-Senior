import React from "react";
import pro from "../../../public/profile.jpeg";
import { Link } from "react-router-dom";
function TripsCard({ q: { TripName, Trip_Image, TripID }, onDelete }) {
  const handleDelete = () => {
    onDelete(TripID);
  };
  return (
    <div>
      <div className="guideline-card flex flex-wrap pb-2 lg:flex-nowrap mt-2 px-7 mb-2 justify-between align-middle shadow-lg rounded-md my-4">
        <div className="guide_details flex gap-4 p-3">
          <div className="max-w-[70px]">
            {" "}
            <img src={`../../${Trip_Image}`} alt="" className="" />
          </div>
          <div>
            <h3 className="border-b-2 border-black p-2 text-xl font-bold">
              {TripName}
            </h3>
          </div>
        </div>
        <div className="guide-buttons mt-5">
          <Link
            to={`/usersadminparticipate/${TripID}`}
            className="bg-red-100 border-gray-600 p-2 mx-1 rounded-lg  hover:bg-red-200"
          >
            View Users
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-100 border-gray-600 p-2 mx-1 rounded-lg  hover:bg-red-200"
          >
            Delete
          </button>
          <Link to={`/tripadminup/${TripID}`}>
            <button className="border-[1px] border-gray-600 p-2 mx-1 rounded-lg  hover:bg-gray-300">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TripsCard;
