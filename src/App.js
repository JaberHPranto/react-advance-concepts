import useLocalStorage from "./Hooks/customHooks/other/useLocalStorage";

function App() {
  const def = {
    jaber: "week",
  };
  const [data, setData] = useLocalStorage("pranto", def);
  // setData(data);
  console.log(data);
  return (
    <>
      Hello
      <button onClick={() => setData(def)}>Click to change D</button>
      <button onClick={() => setData("weekly")}>Click to change W</button>
      <button onClick={() => setData("monthly")}>Click to change M</button>
    </>
  );
}

export default App;
