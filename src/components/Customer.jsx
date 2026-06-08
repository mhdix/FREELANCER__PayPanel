import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { customers } from "../assets/data";
import { LiaInstagram, LiaSocksSolid, LiaTelegramPlane } from "react-icons/lia";
import { TfiGallery } from "react-icons/tfi";

function Customer() {
  const [copied, setCopied] = useState({
    number: false,
    instagram: false,
    telegram: false,
    bale: false,
  });
  const location = useLocation();
  const findCustomer = customers.filter(
    (customer) => customer.name == location.pathname.split("/")[1],
  );

  const copyHandler = async (value) => {
    switch (value) {
      case "telegram":
        await navigator.clipboard.writeText(findCustomer[0].telegram);
        setCopied({
          telegram: true,
        });

        setTimeout(() => {
          setCopied({
            telegram: false,
            instagram: false,
            bale: false,
            number: false,
          });
        }, 2000);

        break;
      case "instagram":
        try {
          await navigator.clipboard.writeText(findCustomer[0].instagram);
          console.log("copied");
        } catch (err) {
          console.error(err);
        }
        setCopied({
          instagram: true,
        });
        setTimeout(() => {
          setCopied({
            telegram: false,
            instagram: false,
            bale: false,
            number: false,
          });
        }, 2000);

        break;
      case "number":
        await navigator.clipboard.writeText(findCustomer[0].cardNom);
        setCopied({
          number: true,
        });
        setTimeout(() => {
          setCopied({
            telegram: false,
            instagram: false,
            bale: false,
            number: false,
          });
        }, 2000);

        break;

      case "bale":
        await navigator.clipboard.writeText(findCustomer[0].bale);
        setCopied({
          bale: true,
        });
        setTimeout(() => {
          setCopied({
            telegram: false,
            instagram: false,
            bale: false,
            number: false,
          });
        }, 2000);
        break;
      default:
        setTimeout(() => {
          setCopied({
            telegram: false,
            instagram: false,
            bale: false,
            number: false,
          });
        }, 2000);
        break;
    }
  };

  return (
    <>
      <div className="relative flex -mt-14">
        <div className="relative border border-gray-200 p-1.5 mb-4 rounded-lg h-20 w-20 flex justify-center items-center  shadow-md">
          {findCustomer[0].brand.split("/").length > 1 ? (
            <img src={findCustomer[0].brand} alt="" />
          ) : (
            <p className="text-black text-xs">{findCustomer[0].brand}</p>
          )}
          {/* <div className="">{findCustomer[0].brand}</div> */}
        </div>
      </div>
      
      <div className="card">
        <div className="username">{findCustomer[0]?.name}</div>

        <div
          className={`number-box mb-4 ${copied.number && "bg-green-50 border-green-500"}`}
        >
          <div className={`number `} id="cardNumber">
            {findCustomer[0]?.cardNom.match(/.{1,4}/g).join(" ")}
          </div>

          <button
            className={`copy-btn ${copied.number && "bg-green-500"}`}
            onClick={() => copyHandler("number")}
          >
            {copied.number ? "Copy success" : "Copy"}
          </button>
        </div>

        <div className="grid grid-cols-2 items-center text-sm gap-2 px-2">
          <Link
            to={`gallery`}
            className={`grid grid-cols-2 items-center hover:scale-105 duration-300 active:text-red-500 text-start`}
          >
            <TfiGallery size={25} className="justify-self-center" />
            <span className="text-xs cursor-pointer">Gallery</span>
          </Link>
          <button
            className={`grid grid-cols-2 items-center hover:scale-105 duration-300 active:text-red-500 ${copied.bale && "text-green-700"} text-start cursor-pointer`}
            onClick={() => copyHandler("bale")}
          >
            <img
              src="/icons/bale.png"
              className="w-6 justify-self-center"
              alt=""
            />
            <span className="text-xs cursor-pointer">Bale</span>
          </button>
          <div className="border-b col-span-full"></div>
          <button
            className={`grid grid-cols-2 items-center hover:scale-105 duration-300 active:text-red-500 ${copied.telegram && "text-green-700"} text-start cursor-pointer`}
            onClick={() => copyHandler("telegram")}
          >
            <LiaTelegramPlane size={30} className="justify-self-center" />
            <span className="text-xs cursor-pointer">Telegram</span>
          </button>
          <button
            className={`grid grid-cols-2 items-center hover:scale-105 duration-300 active:text-red-500 ${copied.instagram && "text-green-700"} text-start cursor-pointer`}
            onClick={() => copyHandler("instagram")}
          >
            <LiaInstagram size={30} className="justify-self-center" />
            <span className="text-xs cursor-pointer">Instagram</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Customer;
