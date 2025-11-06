
export default function category() {
 const categories = [
    { name: "All", image: "/images/thali.png" },
    { name: "Poha", image: "/images/poha.png" },
    { name: "Samosa", image: "/images/samosa.png" },
    { name: "Idli", image: "/images/idli.png" },
    { name: "Jalebi", image: "/images/jalbi.png" },
  ];

  const activeCategory = "All"; // you can set this dynamically later

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#121212",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px 0",
        overflowX: "auto",
        
      }}
    >
      {categories.map((item) => (
        <div
          key={item.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
            margin:"15px",
            marginRight:"20px"
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              color: item.name === activeCategory ? "#fff" : "#aaa",
              fontWeight: item.name === activeCategory ? "700" : "400",
            }}
          >
            {item.name}
          </p>

          {/* Red underline for active */}
          {item.name === activeCategory && (
            <div
              style={{
                position: "absolute",
                bottom: "-6px",
                width: "50%",
                height: "4px",
                backgroundColor: "#e74c3c",
                borderRadius: "10px",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}