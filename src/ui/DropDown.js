import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import DropDownIcon from "../icons/DropDownIcon";

const DropDown = ({
  state = false,
  setState = () => {},
  items = [],
  city = {},
  placeholder = "",
  setCity = () => {},
}) => {
  const ref = useRef();
  const [filtered, setFiltered] = useState(items);

  return (
    <div className="relative">
      <div
        className={`flex w-full p-[12px] flex-row items-center cursor-pointer justify-between rounded-[8px] bg-[#e2e2e2]
        ${state && "rounded-b-none"}`}
        onClick={() => {
          setState(true);
          ref?.current?.focus();
        }}
      >
        <input
          ref={ref}
          value={city.label}
          onChange={(e) => {
            setCity({ label: e.target.value });
            const newArr = items.filter((i) =>
              i.label.toLowerCase().includes(e.target.value.toLowerCase())
            );
            console.log(newArr, e.target.value);
            setFiltered(newArr);
          }}
          readOnly={!state}
          placeholder={placeholder}
          className={`outline-none  z-[201]  bg-[#e2e2e2] w-full mr-[12px] ${
            !state ? "cursor-pointer" : "cursor-text"
          }`}
        />
        <DropDownIcon style={state && "transform rotate-180"} />
      </div>
      <AnimatePresence>
        {state && (
          <>
            <div
              className="z-[200] fixed left-0 top-0 w-full h-full"
              onClick={() => setState(false)}
            />

            <motion.div
              className={`h-fit w-full absolute z-[201] bg-[#c9c9c9] shadow-lg rounded-b-[8px]`}
              onClick={() => {
                if (city.label.length !== 0) setState(false);
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length !== 0 ? (
                filtered.map((item, key) => (
                  <div
                    className={`${
                      key === filtered.length - 1 && "rounded-b-[8px]"
                    } flex cursor-pointer flex-col transition duration-[250ms] p-[12px] hover:bg-[#9a9a9a] font-normal text-[14px] leading-[18px] tracking-[-0.015em] text-[#2c2c2c]`}
                    onClick={() => {
                      setCity({ label: item.label });
                      setState(false);
                    }}
                  >
                    {item.label}
                  </div>
                ))
              ) : (
                <div
                  className={`flex cursor-pointer rounded-b-[8px] flex-col transition duration-[250ms] p-[12px] hover:bg-[#9a9a9a] font-normal text-[14px] leading-[18px] tracking-[-0.015em] text-[#2c2c2c]`}
                  onClick={() => {
                    setState(false);
                  }}
                >
                  {city.label}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
