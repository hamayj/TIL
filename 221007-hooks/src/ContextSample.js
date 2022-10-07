import React, { createContext, useContext } from "react";

const ThemeContext = createContext('black'); // 이게 몬뎅
const ContextSample = () => {
    const theme = useContext(ThemeContext);
    const style = {
        width: '24px',
        height: '24px',
        background: theme
    };
    return <div style={style} />;
};

export default ContextSample;