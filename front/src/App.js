import './App.css';
import LoginForm from "./components/LoginForm";
import {useState} from "react";
import ChuckNorris from "./components/ChuckNorris";

function App() {
    const [token, setToken] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                {!token ? (
                    <LoginForm setToken={setToken} />
                ) : (
                    <ChuckNorris token={token} />
                )}
            </header>
        </div>
    );
}

export default App;
