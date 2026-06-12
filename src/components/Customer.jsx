import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { customers } from "../data/index";
import {
  LiaInstagram,
  LiaMapPinSolid,
  LiaSocksSolid,
  LiaTelegramPlane,
} from "react-icons/lia";
import { IoMdImages } from "react-icons/io";

function Customer() {
  const [copied, setCopied] = useState({
    // card
    cardNom: false,
    cardSheba: false,
    // social
    phoneNumber: false,
    telegram: false,
    instagram: false,
    bale: false,
    phoneNumber: false,
  });
  const { url } = useParams();

  const findCustomer = customers.find((customer) => customer.url === url);
  const index = findCustomer.length;

  console.log(findCustomer);

  const resetCopy = () => {
    setCopied({
      cardNom: false,
      cardSheba: false,
      phoneNumber: false,
      telegram: false,
      instagram: false,
      bale: false,
      phoneNumber: false,
    });
  };

  const copyText = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied({
        [key]: true,
      });

      setTimeout(resetCopy, 2000);
    } catch (error) {
      console.log("clipboard failed", error);
    }
  };
  if (!findCustomer) {
    return <h1>Customer Not Found</h1>;
  }
  const {
    telegram,
    instagram,
    cardName,
    cardNom,
    cardSheba,
    bale,
    name,
    phoneNumber,
    brand,
  } = findCustomer;
  const copyHandler = async (value) => {
    console.log(findCustomer);
    switch (value) {
      case "telegram":
        await copyText(telegram, "telegram");
        break;

      case "instagram":
        await copyText(instagram, "instagram");
        break;

      case "cardNom":
        await copyText(cardNom, "cardNom");
        break;

      case "cardSheba":
        await copyText(cardSheba, "cardSheba");
        break;

      case "bale":
        await copyText(bale, "bale");
        break;

      case "phoneNumber":
        await copyText(phoneNumber, "phoneNumber");
        break;
      default:
        break;
    }
  };

  console.log(location.pathname);
  console.log(findCustomer);

  return (
    <div className="h-full flex items-center justify-center p-4 text-right">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-slate-900 to-slate-700 text-white p-2.5 px-6">
          <h2 className="text-2xl font-bold tracking-tight">{name}</h2>

          <p className="text-sm text-slate-300 mt-1">{brand}</p>
        </div>

        {/* Card Section */}
        <div
          className={`mx-4 mt-4 p-5 mb-4 rounded-2xl border transition-all duration-300 ${copied.cardNom || copied.cardSheba ? "bg-green-50 border-green-500" : "bg-slate-50 border-slate-200"}
        `}
        >
          <p className="mb-4 font-bold text-lg">{cardName}</p>
          <div>
            <p className="text-xs text-gray-500 mb-1">شماره کارت</p>
            <p
              // className="font-mono tracking-widest text-md"
              className={`font-mono tracking-widest text-md ${copied.cardNom && "text-green-500"}`}
              onClick={() => copyHandler("cardNom")}
            >
              {cardNom.match(/.{1,4}/g).join(" ")}
            </p>

            {cardSheba && (
              <>
                <p className="text-xs text-gray-500 mt-4 mb-1">شماره شبا</p>
                <p
                  className={`font-mono tracking-widest text-md ${copied.cardSheba && "text-green-500"}`}
                  onClick={() => copyHandler("cardSheba")}
                >
                  {cardSheba.match(/.{1,4}/g).join(" ")}
                </p>
              </>
            )}
            {cardSheba && (
              <>
                <p className="text-xs text-gray-500 mt-4 mb-1">شماره موبایل</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-mono tracking-widest text-lg"
                >
                  {phoneNumber}
                </a>
              </>
            )}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <button
              className={`
              h-11 rounded-xl font-medium transition-all duration-300
              ${
                copied.cardNom
                  ? "bg-green-500 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }
            `}
              onClick={() => copyHandler("cardNom")}
            >
              {copied.cardNom ? "✓ کپی شد" : "شماره کارت"}
            </button>

            <button
              className={`
              h-11 rounded-xl font-medium transition-all duration-300
              ${
                copied.cardSheba
                  ? "bg-green-500 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }
            `}
              onClick={() => copyHandler("cardSheba")}
            >
              {copied.cardSheba ? "✓ کپی شد" : "شبا"}
            </button>
            <a
              className={`
              h-11 col-span-full rounded-xl font-medium transition-all duration-300 flex justify-center items-center
              ${
                copied.phoneNumber
                  ? "bg-green-500 text-white"
                  : "bg-slate-900 text-white hover:bg-slate-700"
              }
            `}
              onClick={() => copyHandler("phoneNumber")}
              href={`tel:${phoneNumber}`}
            >
              {copied.phoneNumber ? "✓ کپی شد" : "شماره موبایل"}
            </a>
          </div>
        </div>
        <p className="px-4 text-center">آدرس : {findCustomer.address}</p>

        {/* Links Section */}
        {findCustomer.plan === 2 && (
          <div className="p-4 grid grid-cols-2 gap-3">
            {/* Gallery */}
            <Link
              to="gallery"
              className="flex items-center justify-center gap-2 h-10 rounded-2xl border border-gray-200 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <span className="text-sm">گالری</span>
              <IoMdImages size={22} />
            </Link>

            {/* Bale */}
            <button
              onClick={() => copyHandler("bale")}
              className={`
            flex items-center justify-center gap-2 h-10 rounded-2xl border transition
            ${
              copied.bale
                ? "bg-green-50 border-green-500 text-green-700"
                : "border-gray-200 hover:shadow-md hover:-translate-y-0.5"
            }
          `}
            >
              <span className="text-sm">بله</span>
              <img src="/icons/bale.png" className="w-5" />
            </button>

            {/* Telegram */}
            {findCustomer.telegram && (
              <button
                onClick={() => copyHandler("telegram")}
                className={`
            flex items-center justify-center gap-2 h-10 rounded-2xl border transition
             ${
               index === items.length - 1 && items.length % 2 !== 0
                 ? "col-span-2"
                 : ""
             }
            ${
              copied.telegram
                ? "bg-green-50 border-green-500 text-green-700"
                : "border-gray-200 hover:shadow-md hover:-translate-y-0.5"
            }
          `}
              >
                <span className="text-sm">تلگرام</span>
                <LiaTelegramPlane size={22} />
              </button>
            )}
            {/* Insgram */}
            {findCustomer.instagram && (
              <button
                onClick={() => copyHandler("instagram")}
                className={`
              flex items-center justify-center gap-2 h-10 rounded-2xl border transition
               ${
                 index === items.length - 1 && items.length % 2 !== 0
                   ? "col-span-2"
                   : ""
               }
              ${
                copied.instagram
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "border-gray-200 hover:shadow-md hover:-translate-y-0.5"
              }
                `}
              >
                <span className="text-sm">اینستاگرام</span>
                <LiaInstagram size={22} />
              </button>
            )}

            <button
              onClick={() => copyHandler("instagram")}
              className={`
              flex items-center justify-center gap-2 h-10 rounded-2xl border transition 
              ${
                index === findCustomer.length - 1 &&
                findCustomer.length % 2 !== 0
                  ? "col-span-2"
                  : ""
              }
              ${
                copied.instagram
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "border-gray-200 hover:shadow-md hover:-translate-y-0.5"
              }
                `}
            >
              <span className="text-sm">لوکیشن</span>
              <LiaMapPinSolid size={22} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Customer;
