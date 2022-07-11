const spring = {
    hidden : { opacity : 0, y : 10 },
    visible : (delaySec=0.5) => ({ 
        opacity : 1, 
        y : 0,
        color : "#ff0000",
        transition : {
            delay : delaySec * 1,
            type : "spring",
            stiffness : 100,
        }
    }),
    on : (delaySec=0.5) => ({
        borderColor : "#ff0000",
        transition : {
            delay : delaySec * 1 + 0.2,
            type : "spring",
        }
    }),
    off : {
        borderColor : "#000",
    }
}

export default spring;