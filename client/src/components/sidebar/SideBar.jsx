import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> About Blog</span>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/08/02/24/chess-2727443_1280.jpg"
          alt="" width="300" height="170"
        />
        <p font="Arial">
        The people united will never be defeated. The moment I realized that there needs to be a safe haven where 
        people can post and use the first amendment right. "Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people 
        peaceably to assemble, and to petition the Government for a redress of grievances"Constitution of United States of America 1789 (rev. 1992).
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarListItems">●POLITICS</li>
        <li className="sidebarListItems">●CURRENT EVENTS</li>
        <li className="sidebarListItems">●CRYPTO</li>
        <li className="sidebarListItems">●SOCIAL JUSTICE</li>
        <li className="sidebarListItems">●MUSIC</li>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <span className="sideTittle">𝒟𝑜𝓃𝒶𝓉𝑒 @CashApp $cccinema </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
