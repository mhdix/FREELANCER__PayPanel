import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { customers } from "../assets/data";
import { LiaInstagram, LiaSocksSolid, LiaTelegramPlane } from "react-icons/lia";
import { TfiGallery } from "react-icons/tfi";
import { LuBookImage } from "react-icons/lu";
import { IoMdImage, IoMdImages } from "react-icons/io";

function Customer() {
  const [copied, setCopied] = useState({
    // card
    cardNom: false,
    cardSheba: false,
    // social
    telegram: false,
    instagram: false,
    bale: false,
    number: false,
  });
  const location = useLocation();
  const findCustomer = customers.filter(
    (customer) => customer.name == location.pathname.split("/")[1],
  );

  console.log(findCustomer[0].cardSheba);



  
  
  
  const resetCopy = () => {
    setCopied({
      cardNom: false,
      cardSheba: false,
      telegram: false,
      instagram: false,
      bale: false,
      number: false,
    });
  };
  const copyHandler = async (value) => {
    switch (value) {
      case "telegram":
        await navigator.clipboard.writeText(findCustomer[0].telegram);
        setCopied({
          telegram: true,
        });

        setTimeout(() => {
          setCopied({
            cardNom: false,
            cardSheba: false,
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
            cardNom: false,
            cardSheba: false,
            telegram: false,
            instagram: false,
            bale: false,
            number: false,
          });
        }, 2000);

        break;
      case "cardNom":
        await navigator.clipboard.writeText(findCustomer[0].cardNom);
        setCopied({
          cardNom: true,
        });
        setTimeout(() => {
          setCopied({
            cardNom: false,
            cardSheba: false,
            telegram: false,
            instagram: false,
            bale: false,
            number: false,
          });
        }, 2000);

        break;
      case "sheba":
        await navigator.clipboard.writeText(findCustomer[0].cardSheba);
        setCopied({
          sheba: true,
        });
        setTimeout(() => {
          setCopied({
            cardNom: false,
            cardSheba: false,
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
            cardNom: false,
            cardSheba: false,
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
            cardNom: false,
            cardSheba: false,
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
          className={`number-box mb-4 ${copied.cardNom && "bg-green-50 border-green-500"}`}
        >
          <div className={`number`} id="cardNumber">
            <p className="text-end text-sm">{findCustomer[0].cardName}</p>

            <p className="text-gray-500  mt-4 text-end mb-0.5 text-sm">
              شماره کارت
            </p>
            <p>{findCustomer[0]?.cardNom.match(/.{1,4}/g).join(" ")}</p>
            <p className="text-gray-500  mt-4 text-end mb-0.5 text-sm">
              شماره شبا
            </p>

            <p>{findCustomer[0]?.cardSheba.match(/.{1,4}/g).join(" ")}</p>
          </div>
          <div className="grid grid-cols-2 place-items-center justify-between w-full">
            <p className="col-span-full text-gray-500 w-full text-end mb-0.5">
              کپی
            </p>
            <button
              className={`copy-btn text-nowrap w-24 ${copied.cardNom && "bg-green-500"}`}
              onClick={() => copyHandler("cartNo")}
            >
              {copied.cardNom ? "کپی شد" : "شماره کارت"}
            </button>
            <button
              className={`copy-btn  text-nowrap w-24 ${copied.sheba && "bg-green-500"}`}
              onClick={() => copyHandler("cartShj")}
            >
              {copied.cardNom ? "کپی شد" : "شبا"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center text-sm gap-2 px-2">
          <Link
            to={`gallery`}
            className={`grid grid-cols-2 items-center hover:scale-105 duration-300 active:text-red-500 text-start`}
          >
            <IoMdImages size={30} className="justify-self-center" />
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
