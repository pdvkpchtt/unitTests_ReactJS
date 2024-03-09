import { useState } from "react";

import DropDown from "./ui/DropDown";
import { Input } from "./ui/Input";

const items = [
  { label: "Москва" },
  { label: "Абудаби" },
  { label: "Сан Франциско" },
  { label: "Дубай" },
  { label: "Самара" },
  { label: "Уфа" },
];

function App() {
  const [state, setState] = useState(false);
  const [city, setCity] = useState({ label: "" });
  const [data, setData] = useState({
    name: "",
    username: "",
    age: "",
    agree: true,
  });

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/handle", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, city }),
    });

    const json = await res.json();
    console.log(json);
  };

  // console.log(data);

  return (
    <div className="w-[1000px] mx-auto p-[20px] flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[6px]">
        <p className="text-[12px] text-[#8f8f8f] font-medium">Город:</p>
        <p>{city.label === "" ? "Выберите город" : city.label}</p>
      </div>
      <DropDown
        state={state}
        setState={setState}
        city={city}
        setCity={setCity}
        items={items}
        placeholder="Город"
      />

      {/* <ImageSelector />  */}

      <Input
        label="Имя"
        placeholder="Введите имя"
        value={data.name}
        onChange={(val) => setData({ ...data, name: val })}
      />
      <Input
        label="Username"
        placeholder="Введите username"
        value={data.username}
        onChange={(val) => setData({ ...data, username: val })}
      />
      <Input
        label="Возраст"
        placeholder="Введите возраст"
        value={data.age}
        onChange={(val) => setData({ ...data, age: Number(val) })}
      />

      <div className="w-full flex flex-col">
        <p className="font-medium text-[14px] select-none leading-[16.8px] tracking-[-0.013em] mb-[6px] text-[#8f8f8f]">
          Даю согласие на рекламную рассылку
        </p>
        <div
          onClick={() => setData({ ...data, agree: !data.agree })}
          className="cursor-pointer flex items-center justify-center w-[35px] h-[35px] border-[2px] rounded-[8px] border-[#8f8f8f] text-center font-bold text-[22px] select-none"
        >
          {data?.agree && <>X</>}
        </div>
      </div>

      <div
        onClick={handleSubmit}
        className="w-full p-[12px] text-center rounded-[13px] cursor-pointer select-none bg-[#5875e8] transition duration-[250ms] hover:bg-[#4c65c8] active:hover:bg-[#4b5c9e] text-white font-medium text-[16px]"
      >
        Отправить
      </div>
    </div>
  );
}

export default App;
