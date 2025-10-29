import { useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate(); // 👈 создаём функцию навигации

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="p-main">Добро пожаловать!</p>
      <p className="p-main2">Выберите подходящий для себя курс/секцию.</p>

      <button
        onClick={() => navigate("/courses")}
        type="button"
        className="button"
      >
        Перейти
      </button>
    </div>
  );
}
