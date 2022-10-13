/*
    [
        {
            type : 1
            score : 5
        },
    ]
*/
export const calculate = (data = []) => {
    const result = new Map();
    data.forEach(({type, score}, idx) => {
        if(!type || !score) return;
        result.set(type, ((result.has(type))? result.get(type)*1 : 0) + score*1);
    });
    let highlyScoredData = { score : 0 };
    result.forEach((value, key)=>{
        if(value > ((highlyScoredData?.score) || 0)) {
            highlyScoredData = {
                type : key,
                score : value,
            }
        }
    })
    console.log({highlyScoredData});
    return { result, highlyScoredData };
}
/*
    Map 
    {
        key : value
    }
*/
const colorList = ["#008CCC", "#F15A22", "#05b1ff", "#f47a28", "#008CCC", "#F15A22", "#05b1ff", "#f47a28"];
export const transform = (data = new Map()) => {
    const result = [];
    data.forEach((value, key)=>{
        result.push({
            id : key,
            label : key,
            value : value,
        })
    })
    result.forEach((v,i)=>{
        v.color = colorList[i];
    })
    console.log(result);
    return result;
}
