import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

import image from "/images/gallery.jpg";
import { customers } from "../assets/data";

const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const findCustomer = customers.filter(
    (customer) => customer.url == location.pathname.split("/")[1],
  );
  console.log(location);
  return (
    <>
      <div className="relative flex">
        <div className="relative border border-gray-200 p-1.5 mb- rounded-lg h-20 w-20 flex justify-center items-center  shadow-md">
          {findCustomer[0].brand.split("/").length > 1 ? (
            <img src={findCustomer[0].brand} alt="" />
          ) : (
            <p className="text-black text-xs">{findCustomer[0].brand}</p>
          )}
          {/* <div className="">{findCustomer[0].brand}</div> */}
        </div>
      </div>
      <div className="card ">
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
