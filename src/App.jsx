import { useContext } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import ThemeContext from "./context/Context";
import "./App.css";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme ? "App-dark" : "App"}`}>
            <Header />
            <Characters />
        </div>
    );
}

export default App;
