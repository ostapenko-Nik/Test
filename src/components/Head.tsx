import { Link } from "react-router-dom";

export default function Head() {
  return (
    <div className="div-nav">
      <div className="div-div">
        <Link to="/" className="div-text">Главная</Link>
        <Link to="/courses" className="div-text">Курсы</Link>
        <Link to="/sections" className="div-text">Секции</Link>
        <Link to="/schedule" className="div-text">Расписание</Link>
      </div>
    </div>
  );
}
