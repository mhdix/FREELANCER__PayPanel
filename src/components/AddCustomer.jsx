import { useState } from "react";
import { inputs } from "./forms/formConfig";
import axios from "axios";
import { customers } from "../data";

const AddCustomer = () => {
  const [allCustomers, setAllCustomers] = useState(customers);
  const [inputValue, setInputValue] = useState({
    name: "",
    cartNom: "",
    instagram: "",
    telegram: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCustomer = {
      name: inputValue.name,
      cartNom: inputValue.cartNom,
      instagram: inputValue.instagram,
      telegram: inputValue.telegram,
    };

    setAllCustomers([...allCustomers, newCustomer]);

    setInputValue({
      name: "",
      cartNom: "",
      instagram: "",
      telegram: "",
    });

    customers.push([...allCustomers, newCustomer]);

    const data = await axios.post("http://localhost:3000/customers", {
      name: inputValue.name,
      cartNom: inputValue.cartNom,
      instagram: inputValue.instagram,
      telegram: inputValue.telegram,
    });
    console.log(data);
    // const response = await fetch("http://localhost:3000/customers", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: inputValue.name,
    //     cartNom: inputValue.cartNom,
    //     instagram: inputValue.instagram,
    //     telegram: inputValue.telegram,
    //   }),
    // });
  };

  return (
    <div>
      <form action="" className="space-y-6" onSubmit={handleSubmit}>
        {inputs.map((input, index) => {
          const inputName = input.name;
          const currentValue = inputValue?.[inputName] || "";

          return (
            <div className="space-y-1" key={index}>
              <div className="flex items-center gap-1.5 ml-1">
                <p className="text-gray-700 text-sm">{input.title}</p>{" "}
                {input.helper && (
                  <span className="text-xs text-gray-500 border border-gray-300 p-0.5 px-1.5 bg-gray-200 rounded-full">
                    {input.helper}
                  </span>
                )}
              </div>
              <input
                value={currentValue}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setInputValue((prev) => ({
                    ...prev,
                    [inputName]: newValue,
                  }));
                }}
                type={input.type}
                placeholder={input.placeholder}
              />
            </div>
          );
        })}

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
