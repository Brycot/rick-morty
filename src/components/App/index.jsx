import { useContext } from "react";
import Characters from "../Characters";
import Header from "../Header";
import ThemeContext from "../../context/Context";
import "./App.css";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme ? "App-dark" : "App"}`}>
            <Header />
            <Characters />
            <footer>Coded With 💙 By Bryan(Brycot)</footer>
        </div>
    );
}

export default App;
