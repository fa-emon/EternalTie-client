import { FaRegHeart } from "react-icons/fa";
import { MdOutlineGirl } from "react-icons/md";
import { MdOutlineBoy } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const SuccessCounterSection = () => {
  return (
    <div>
      <SectionTitle heading={"Success Counter Section"}></SectionTitle>
      <div className="flex justify-between items-center px-10 full">
        <div className="border border-l-0 p-12 w-1/4">
          <div className="flex justify-center items-center space-x-4">
            <div className="border p-3 rounded-lg">
              <FaRegHeart className="text-3xl"></FaRegHeart>
            </div>
            <p className="text-4xl">2k+</p>
          </div>
          <p className="text-center">Total Biodata</p>
        </div>
        <div className="border p-12 w-1/4">
          <div className="flex justify-center items-center space-x-4">
            <div className="border p-3 rounded-lg">
              <MdOutlineBoy className="text-3xl"></MdOutlineBoy>
            </div>
            <p className="text-4xl">1600+</p>
          </div>
          <p className="text-center">Boys Biodata</p>
        </div>
        <div className="border p-12 w-1/4">
          <div className="flex justify-center items-center space-x-4">
            <div className="border p-3 rounded-lg">
              <MdOutlineGirl className="text-3xl"></MdOutlineGirl>
            </div>
            <p className="text-4xl">4000+</p>
          </div>
          <p className="text-center">Girls Biodata</p>
        </div>
        <div className="border border-r-0 p-12 w-1/4">
          <div className="flex justify-center items-center space-x-4">
            <div className="border p-3 rounded-lg">
              <BsFillPeopleFill className="text-3xl"></BsFillPeopleFill>
            </div>
            <p className="text-4xl">2000+</p>
          </div>
          <p className="text-center">Marriages Completed</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounterSection;
