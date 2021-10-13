import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">One Society</span>
      </div>
      <img
        className="headerImg"
         src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg"
        alt=""
      />
    </div>
  );
}
