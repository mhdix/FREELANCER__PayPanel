import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { customers } from "../assets/data";
import { LiaInstagram, LiaSocksSolid, LiaTelegramPlane } from "react-icons/lia";
import { IoMdImages } from "react-icons/io";

function Customer() {
  const [copied, setCopied] = useState({
    // card
    cardNom: false,
    cardSheba: false,
    // social
    telegram: false,
    instagram: false,
    bale: false,
    phoneNumber: false,
  });
  const location = useLocation();
  const findCustomer = customers.filter(
    (customer) => customer.url == location.pathname.split("/")[1],
  );
  console.log(findCustomer);

  const resetCopy = () => {
    setCopied({
      cardNom: false,
      cardSheba: false,
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
      console.log("copyText error: ", error);
    }
  };

  const copyHandler = async (value) => {
    switch (value) {
      case "telegram":
        await copyText(findCustomer[0].telegram, "telegram");
        break;

      case "instagram":
        await copyText(findCustomer[0].instagram, "instagram");
        break;

      case "cardNom":
        await copyText(findCustomer[0].cardNom, "cardNom");
        break;

      case "cardSheba":
        await copyText(findCustomer[0].cardSheba, "cardSheba");
        break;

      case "bale":
        await copyText(findCustomer[0].bale, "bale");
        break;

      case "phoneNumber":
        await copyText(findCustomer[0].phoneNumber, "phoneNumber");
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-full bg-linear-to-b from-slate-100 via-white to-slate-50 flex items-center justify-center p-4 text-right">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-slate-900 to-slate-700 text-white p-2.5 px-6">
          <h2 className="text-2xl font-bold tracking-tight">
            {findCustomer[0]?.name}
          </h2>

          <p className="text-sm text-slate-300 mt-1">
            {findCustomer[0]?.brand}
          </p>
        </div>

        {/* Card Section */}
        <div
          className={`mx-4 mt-4 p-5 rounded-2xl border transition-all duration-300 ${copied.cardNom || copied.cardSheba ? "bg-green-50 border-green-500" : "bg-slate-50 border-slate-200"}
        `}
        >
          <p className="mb-4 font-bold text-lg">آزاده صدیق کفشچین</p>
          <div>
            <p className="text-xs text-gray-500 mb-1">شماره کارت</p>
            <p className="font-mono tracking-widest text-lg">
              {findCustomer[0]?.cardNom.match(/.{1,4}/g).join(" ")}
            </p>

            {findCustomer[0]?.cardSheba && (
              <>
                <p className="text-xs text-gray-500 mt-4 mb-1">شماره شبا</p>
                <p className="font-mono tracking-widest text-lg">
                  {findCustomer[0]?.cardSheba.match(/.{1,4}/g).join(" ")}
                </p>
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
                  : "bg-slate-900 text-white hover:bg-slate-700"
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
          </div>
        </div>

        {/* Links Section */}
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
          <button
            onClick={() => copyHandler("telegram")}
            className={`
            flex items-center justify-center gap-2 h-10 rounded-2xl border transition
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

          {/* Insgram */}
          <button
            onClick={() => copyHandler("instagram")}
            className={`
            flex items-center justify-center gap-2 h-10 rounded-2xl border transition
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
        </div>
      </div>
    </div>
  );
}

export default Customer;
