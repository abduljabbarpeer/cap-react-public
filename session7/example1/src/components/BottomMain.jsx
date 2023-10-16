import BottomMainLeft from "./BottomMainLeft"
import BottomMainRight from "./BottomMainRight"

function BottomMain({ isLoggedIn }) {
  return (
    <div
      style={{
        height: "250px",
        backgroundColor: "lightsalmon",
      }}
    >
      <div>Bottom Main</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <BottomMainLeft isLoggedIn={isLoggedIn} />
        <BottomMainRight isLoggedIn={isLoggedIn} />
      </div>
    </div>
  )
}
export default BottomMain
