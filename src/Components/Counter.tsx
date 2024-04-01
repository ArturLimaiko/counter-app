import React, {useEffect, useState} from 'react';
import {Button} from "./Button/Button";

export const Counter = () => {

    const [currentCount, setCurrentCount] = useState<number>(0);


    useEffect( () => {
        let currentCountAsString  = localStorage.getItem('currentCount')
        if(currentCountAsString) {
            let newCurrentCount = JSON.parse(currentCountAsString)
            setCurrentCount(newCurrentCount)
        }
    },[])

    useEffect( () => {
        localStorage.setItem('currentCount', JSON.stringify(currentCount));
    },[currentCount])

    const onClickButtonHandler = () => {
        if (currentCount !== 5) {
            setCurrentCount(currentCount + 1)
        }
    }

    const onHandleResetOnCLick = () => setCurrentCount(0)

    return (
        <>
            <div className='count-wrapper'>
                <h1 className={currentCount === 5 ? 'colorCount' : ''}>{currentCount}</h1>
            </div>
            <div className='button-wrapper'>
                <Button disabled={currentCount >= 5} name='inc' callBack={onClickButtonHandler}/>

                <Button disabled={currentCount <= 0} name='reset' callBack={onHandleResetOnCLick}/>
            </div>
        </>

    );
};