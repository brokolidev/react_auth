import './App.css';
import LoginForm from "./components/LoginForm";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                {!token ? (
                    <LoginForm setToken={setToken} />
                ) : (
                    <div>
                        <h2>Welcome to the App!</h2>
                        {/* Here, you can add other components that should be displayed once the user is authenticated */}
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
