import "./App.css";
import { Route, Routes } from "react-router-dom";
import { customers } from "./assets/data";
import Customer from "./components/Customer";
import AddCustomer from "./components/AddCustomer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="w-full flex flex-col items-center space-y-14 min-h-screen relative">
        <Routes>
          <Route path="/">
            {customers.map((customer) => {
              return (
                <>
                  <Route path={`${customer?.url}`} element={<Customer />} />
                  <Route
                    path={`${customer.url}/gallery`}
                    element={<Gallery />}
                  />
                </>
              );
            })}
          </Route>
          <Route path="/admin" element={<AddCustomer />} />
        </Routes>
      <footer className="left-0 bottom-0 w-full border-t border-[#9c9c9c] py-4">
        <div className="flex items-center justify-center gap-2.5 text-[#34455c]">
          <a
            href="tel:0925438078"
            className="flex flex-col items-center justify-between gap-3 bg-[#f8fafc] border border-[#e5e7eb] rounded-[14px] p-2 px-6"
          >
            09925438078
          </a>
          <p>رزرو کوئیک‌کارت</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
