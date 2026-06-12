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
      <div className="sticky top-0 mt-4 mb-2 z-50 bg-white border-b border-slate-200">
        <div className="h-16 px-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack size={30} />
          </button>

          <img src={logo} alt="NIPcard" className="h-8 object-contain" />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
        <p className="font-bold text-right">
          {customer.gallery?.length || 0} تصویر
        </p>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border">
            {isImage ? (
              <img src={brand} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs">
                {brand}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-bold text-xl">{customer.name}</h1>
            <p className="text-sm text-slate-500">{customer.address}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div
          className="overflow-hidden rounded-2xl border border-slate-200"
        >
          <img
            src='/images/gallery.png'
            alt=""
            className="w-full aspect-square object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
