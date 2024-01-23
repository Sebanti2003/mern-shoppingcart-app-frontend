import { useState } from "react";
import { useDispatch} from "react-redux";
import { createcustomer } from "../slices/Customerslice";

const Createaccount = () => {
  const [form, setform] = useState({ name: "", nationid: "" });
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(createcustomer(form.name, form.nationid));
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 p-2 justify-center items-center">
          <div className="font-bold text-lg">
            Welcome to <span className="text-violet-500">React Bank</span>
          </div>
          <div className="flex gap-3 items-center font-semibold">
            <label htmlFor="name">Name:</label>
            <input
              value={form.name}
              onChange={(e) => setform({...form, name: e.currentTarget.value })}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="border-[1px] p-1 border-black"
            />
          </div>
          <div className="flex gap-3 items-center font-semibold">
            <label htmlFor="name">NationalID:</label>
            <input
              value={form.nationid}
              onChange={(e) => setform({ ...form, nationid: e.currentTarget.value })}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="border-[1px] p-1 border-black"
            />
          </div>
          <button
            onClick={handleclick}
            className="p-2 border-2 border-black  font-bold bg-green-400"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Createaccount;
