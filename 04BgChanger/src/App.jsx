import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 mt-20">
          <div
            className="flex flex-wrap justify-center
         gap-3 shadow-lg bg-white px-6 py-5 rounded-3xl"
          >
            <button
              // onclick ko fuction chahiye fuction se jo return aa rha vo usko nhi chahiye {() call back le liye bcz ye ek function hai}
              onClick={() => setColor("red")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>

            <button
              onClick={() => setColor("maroon")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "maroon" }}
            >
              Maroon
            </button>

            <button
              onClick={() => setColor("orange")}
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
        <div className="flex justify-center  text-white  text-2xl shadow-lg py-5 rounded-lg">
          <h1>Color Changer App</h1>
        </div>
      </div>
    </>
  );
}

export default App;
