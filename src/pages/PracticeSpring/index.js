import React, {useState} from 'react';
import { spring } from 'react-motion';

const SprintPactice = () => {
    const [isTogled, setToggled] = useState(false);
    const setSpringVal = {
        opacity: spring(isTogled ? 1 : 0),
        x : spring(isTogled ? 500 : 0)
    }
    
    const handleToggled = () => {
        setToggled(!isTogled);
    };

    return (
        <div onClick={()=> {setToggled(!isTogled)}}>
            <div style={{
                opacity: spring(isTogled ? 1 : 0), 
                transform: `translateX(${spring(isTogled ? 500 : 0)}px)`
            }}>
                Click me to see the transistion !
            </div>
        </div>
    )
}

export default SprintPactice;