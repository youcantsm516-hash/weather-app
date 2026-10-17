import Weather from "./components/weather";

function App() {
  return (
    <div className="app">
      <h1 style={{marginBottom: "100px"}}>Weather in your current region</h1>
      <Weather />
    </div>
  )
}

export default App;
