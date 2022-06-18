const Parts = [
    {
        "pageLen" : 5
    },
    {
        "pageLen" : 7
    },
    {
        "pageLen" : 7
    },
    {
        "pageLen" : 8
    },
    {
        "pageLen" : 4
    },
];
Object.freeze(Parts);

const getPageLen = (partIdx) => {

    const idx = partIdx*1 - 1;
    if(typeof idx !== "number") return false;
    return Parts[idx].pageLen || false;

}

export { getPageLen };