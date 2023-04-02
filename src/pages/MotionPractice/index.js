import "./motionPractice.css";
import React, { useState } from 'react';
import { spring, Motion, presets } from 'react-motion';

const MotionPractice = () => {
    const initialStiffnessDamping = presets.gentle;
    const presetsValue = {
        "gentle": presets.gentle,
        "noWobble": presets.noWobble,
        "stiff": presets.stiff,
        "wobbly": presets.wobbly
    };
    const [stiffnessDamping, setStiffnessDamping] = useState(initialStiffnessDamping);
    const [dropDownValue, setDropDownValue] = useState("gentle");

    return (
        <div>
            <div>
                <select className="dropdown-style" value={dropDownValue}
                    onChange={(e) => {
                        const value = e.target.value;
                        setDropDownValue(value);
                        setStiffnessDamping(presets[value]);
                    }}>
                    {Object.keys(presetsValue).map((elem, i) =>
                        <option key={i} value={elem}>
                            {elem}
                        </option>)}
                </select>
                <div className="stffness-damping-presets-style">
                    <div>
                        Damping: {stiffnessDamping.damping}
                    </div>
                    <div>
                        Stiffness : {stiffnessDamping.stiffness}
                    </div>
                </div>
            </div>
            <div className="motion-contianer">
                <Motion defaultStyle={{
                    opacity: 0,
                    marginLeft: -2000,
                    padding: 0
                }} style={{
                    opacity: spring(1),
                    marginLeft: spring(100, stiffnessDamping),
                }}>
                    {value =>
                        <div style={{
                            transform: `translateX(${value.marginLeft}px)`,
                        }}
                            className="div-container">
                            <div style={{
                                backgroundColor: "aqua",
                            }} >
                                A
                            </div>
                            <div style={{
                                backgroundColor: "aqua"
                            }} >
                                B
                            </div>
                            <div style={{
                                backgroundColor: "aqua"
                            }} >
                                C
                            </div>
                            <div style={{
                                backgroundColor: "aqua"
                            }} >
                                D
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        </div>
    )
}

export default MotionPractice;