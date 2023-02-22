import Header from "./Header";

const SlotM = () => {
  let x = '😄';
  let y = '😄';
  let z = '🍌';

  if (x === y && y === z && x === z) {
    return (
      <>
        <div className="msg">{x} {y} {z}
          <br />
          <span className="msg-span">This is matching</span>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="msg">{x} {y} {z}
          <br />
          <span className="msg-span">This is Not matching</span>
        </div>
      </>
    )
  }
}

const App = () => {
  return (
    <>
      <Header />
      <SlotM />
    </>
  )
}
export default App;