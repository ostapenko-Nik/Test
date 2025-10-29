import { Link } from "react-router-dom";

export default function Head() {
  return (
    <div className="div-nav">
      <div className="div-div">
       <Link to="/" className="div-text"> <button className="buton">Главная</button></Link>
        <Link to="/courses" className="div-text"> <button className="buton">Курсы</button></Link>
        <Link to="/sections" className="div-text"> <button className="buton">Секции</button></Link>
        <Link to="/schedule" className="div-text"> <button className="buton">Расписание</button></Link>
      </div>
    </div>
  );
}
