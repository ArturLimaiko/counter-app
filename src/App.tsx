import React, {useState} from 'react';
import './App.css';
import {Button} from "./Components/Button/Button";

function App() {
    const [currentCount, setCurrentCount] = useState(0);

    const onClickButtonHandler = () => {
        if (currentCount !== 5) {
            setCurrentCount(currentCount + 1)
        }
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('currentCount', JSON.stringify(currentCount));
    }

    const getFromLocalStorageHandler = () => {
        let currentCountAsString  = localStorage.getItem('currentCount')
        if(currentCountAsString) {
            let newCurrentCount = JSON.parse(currentCountAsString)
            setCurrentCount(newCurrentCount)
        }
    }

    //удаление localStorage
    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    //     setCurrentCount(0)
    // }
    //

    return (
        <div className="App">
            <div className='count-wrapper'>
                <h1 className={currentCount === 5 ? 'colorCount' : ''}>{currentCount}</h1>
            </div>

            <div className='button-wrapper'>
                <Button disabled={currentCount >= 5} name={'inc'} callBack={onClickButtonHandler}/>

                <Button disabled={currentCount <= 0} name={'reset'} callBack={() => {
                    setCurrentCount(0)
                }}/>

                <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
                <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
                {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
            </div>
        </div>
    );
}

export default App;
