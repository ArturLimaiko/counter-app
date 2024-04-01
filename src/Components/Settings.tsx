import React, {useState} from 'react';
import {Button} from "./Button/Button";

export const Settings = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <div className='settings-wrapper'>
                <h3 className={'colorCount'}> Max value:
                    <input type={"number"} />
                </h3>
                <h3 className={'colorCount'}>Start value:
                    <input type={"number"}/>
                </h3>
            </div>
            <div className='button-wrapper'>
                <Button name='set' callBack={() => {
                }}/>
            </div>
        </div>
    );
};