import './App.css';
import LoginForm from "./components/LoginForm";
import {useState} from "react";
import ChuckNorris from "./components/ChuckNorris";

function App() {
    const [token, setToken] = useState(null);
    
    const handleLogout = () => {
        setToken(null);
    };

    return (
        <div className="App">
            <header className="App-header">
                {!token ? (
                    <LoginForm setToken={setToken} />
                ) : (
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                        <ChuckNorris token={token} />
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
