const fadein = {
    hidden : { opacity : 0, y : 30 },
    visible : (delaySec=0.5) => ({ 
        opacity : 1, 
        y : 0,
        transition : {
            delay : delaySec * 1,
        }
    }),
}

export default fadein;