import { color } from "framer-motion";

export default function Schedule() {
  return (
    <div className="flex flex-col items-center min-h-screen text-center p-8 mt-[50px]">
      <h1 className="text-4xl font-bold mb-6 "   style={{ textShadow: "0px 0px 15px #00f7ff",color: "#00f7ff", }}
      >Расписание</h1>
      <p className="text-gray-500 " style={{ textShadow: "0px 0px 20px #00f7ff",color: "#00f7ff", }}>Тут будет информация о расписании.</p>
    </div>
  );
}
