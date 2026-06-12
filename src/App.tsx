import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <main className="flex-auto w-full justify-center ">
      <header className=" flex-1 flex-row w-full justify-items-end">
        <div>
          <h1 className="text-xl text-text-color">Header</h1>
        </div>
        <Header />
      </header>
    </main>
  );
}

export default App;
