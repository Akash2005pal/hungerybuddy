import search from "./search.module.css";

export default function SearchBar() {
  return (
    <div className={search.maicontainer}>
      <div className={search.stylebar}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={search.searchbox}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/search-line.png" height={30} width={30} />
            </div>
            <input type="text" placeholder="Search" />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src="/images/line.png" height={30} width={30} />
              <img
                src="/images/mic-fill.png"
                height={30}
                width={30}
                alt="mic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
