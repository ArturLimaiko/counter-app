import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className='settings'>
                    <Settings/>
                </div>
                <div className='counter'>
                    <Counter/>
                </div>
            </div>
        </div>
    )
}

export default App;
