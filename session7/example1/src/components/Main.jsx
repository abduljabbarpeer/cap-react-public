import BottomMain from "./BottomMain"
import TopMain from "./TopMain"

function Main({ isLoggedIn }) {
  return (
    <div style={{ backgroundColor: "lightseagreen", padding: "10px" }}>
      <div>Main component contains Top Main and Bottom main section</div>
      <TopMain isLoggedIn={isLoggedIn} />
      <BottomMain isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default Main
