import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
    const [counter, setCounter] = useState(0);


    return <div><Outlet context={{counter, setCounter}}></Outlet></div>;
}

export default App;