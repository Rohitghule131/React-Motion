import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';

const SprintPactice = () => {
    const [isTogled, setToggled] = useState(false);

    return (
        <Motion
            defaultStyle={{
                opacity: 1
            }}
            style={{
                opacity: spring(isTogled ? 0 : 1)
            }}
        >
            {value =>
                <div onClick={() => {
                    setToggled(!isTogled)
                }}>
                    <div style={{
                        opacity: value.opacity,
                    }}>
                        Click me to see the transistion !
                    </div>
                </div>}
        </Motion>
    )
}

export default SprintPactice;