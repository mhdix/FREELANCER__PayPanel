import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import image from "/images/gallery.jpg";
import logo from "/images/logo.png";

import { customers } from "../data";
const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const url = location.pathname.split("/")[1];

  // ✅ درست: find به جای filter
  const customer = customers.find((c) => c.url === url);

  // ✅ جلوگیری از کرش
  if (!customer) {
    return <h1>Customer Not Found</h1>;
  }

  const { brand } = customer;

  const isImage = brand && brand.includes("/");

  return (
    <>
      {/* Brand Section */}
      <div className="relative flex">
        <div className="border border-gray-200 p-1.5 mb- rounded-lg h-20 w-20 flex justify-center items-center shadow-md">
          {/* <img src={logo} alt="brand" /> */}
          Golha
        </div>
      </div>

      {/* Gallery Card */}
      <div className="card">
        <div className="flex items-center justify-between border-b border-gray-400 mb-3">
          <button onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack size={30} />
          </button>
          10
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="w-full h-fit">
            <img src={image} alt="" />
          </div>
          <div className="w-full h-fit">
            <img src={image} alt="" />
          </div>
          <div className="w-full h-fit">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
