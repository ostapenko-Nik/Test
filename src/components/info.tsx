import { useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate(); // 👈 создаём функцию навигации

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="text-5xl font-bold mb-2">Добро пожаловать!</p>
      <p className="text-2xl mb-6">Выберите подходящий для себя курс/секцию.</p>

      <button
        onClick={() => navigate("/courses")}
        type="button"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 
                   hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                   focus:ring-pink-200 dark:focus:ring-pink-800 
                   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                   transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        Перейти
      </button>
    </div>
  );
}
