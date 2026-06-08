import { useState } from "react";
import { customers } from "../assets/data";

const inputs = {
  name: {
    title: "Name",
    helper: "this name use in url",
    placeholder: "paypanel.com / name",
    type: "text",
  },
  cartNO: {
    title: "Cart nom",
    helper: "1234567894574651",
    placeholder: "1234 5678",
    type: "number",
  },

  instagram: {
    title: "Insatgram",

    placeholder: "ext.instagram",
    type: "text",
  },
  telegram: {
    title: "telegram",

    placeholder: "ext.telegram",
    type: "text",
  },
};

const AddCustomer = () => {
  const [allCustomers, setAllCustomers] = useState(customers);
  const [inputValue, setInputValue] = useState({
    name: "",
    cardNom: "",
    instagram: "",
    telegram: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      name: inputValue.name,
      cardNom: inputValue.cardNom,
      instagram: inputValue.instagram,
      telegram: inputValue.telegram,
    };

    setAllCustomers([...allCustomers, newCustomer]);

    setInputValue({
      name: "",
      cardNom: "",
      instagram: "",
      telegram: "",
    });

    console.log([...allCustomers, newCustomer]);
  };
  return (
    <div>
      <form action="" className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1 ">
          <div className="flex items-center gap-1.5 ml-1">
            <p className="text-gray-700 text-sm">{inputs.name.title}</p>{" "}
            {inputs?.name.helper && (
              <span className="text-xs text-gray-500 border border-gray-300 p-0.5 px-1.5 bg-gray-200 rounded-full">
                {inputs.name.helper}
              </span>
            )}
          </div>
          <input
            value={inputValue.name.title}
            onChange={handleChange}
            type={inputs.name.type}
            placeholder={inputs.name.placeholder}
          />
        </div>
        <div className="space-y-1 ">
          <div className="flex items-center gap-1.5 ml-1">
            <p className="text-gray-700 text-sm">{inputs.cartNO.title}</p>{" "}
            {inputs?.cartNO.helper && (
              <span className="text-xs text-gray-500 border border-gray-300 p-0.5 px-1.5 bg-gray-200 rounded-full">
                {inputs.cartNO.helper}
              </span>
            )}
          </div>
          <input
            value={inputValue.cartNO}
            onChange={handleChange}
            type={inputs.cartNO.type}
            placeholder={inputs.cartNO.placeholder}
          />
        </div>
        <div className="space-y-1 ">
          <div className="flex items-center gap-1.5 ml-1">
            <p className="text-gray-700  text-sm">{inputs.instagram.title}</p>{" "}
            {inputs?.instagram.helper && (
              <span className="text-xs text-gray-500 border border-gray-300 p-0.5 px-1.5 bg-gray-200 rounded-full">
                {inputs.instagram.helper}
              </span>
            )}
          </div>
          <input
            value={inputValue.instagram.name}
            onChange={handleChange}
            type={inputs.instagram.type}
            placeholder={inputs.instagram.placeholder}
          />
        </div>
        <div className="space-y-1 ">
          <div className="flex items-center gap-1.5 ml-1">
            <p className="text-gray-700  text-sm">{inputs.telegram.title}</p>{" "}
            {inputs?.telegram.helper && (
              <span className="text-xs text-gray-500 border border-gray-300 p-0.5 px-1.5 bg-gray-200 rounded-full">
                {inputs.telegram.helper}
              </span>
            )}
          </div>
          <input
            value={inputValue.telegram.name}
            onChange={handleChange}
            type={inputs.telegram.type}
            placeholder={inputs.telegram.placeholder}
          />
        </div>
        <button
          type="submit"
          className="border border-green-500 w-full rounded-md py-1 bg-green-300 text-sm"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
