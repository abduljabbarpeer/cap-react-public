function BottomMainLeft({ isLoggedIn }) {
  return (
    <div
      style={{
        height: "150px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      <div>Bottom Main Left</div>
      <div>Is User Logged In : {isLoggedIn.toString()}</div>
    </div>
  )
}
export default BottomMainLeft
