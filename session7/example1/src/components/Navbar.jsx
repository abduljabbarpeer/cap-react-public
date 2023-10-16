function Navbar() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        padding: "16px",
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          gridColumn: "span 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        Logo
      </div>
      <div
        style={{
          gridColumn: "span 4",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div
        style={{
          gridColumn: "span 2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button>LOGIN</button>
        <button>LOGOUT</button>
      </div>
    </div>
  )
}

export default Navbar
