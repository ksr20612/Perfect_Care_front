/*
    {
        "화남" : 10,
        "우울" : 3,
        "슬픔" : 5
    }

         =>

    ["화남 10점", "우울 3점", "슬픔 5점"]
*/
export const readInfo = (obj) => {

    const result = [];
    for(const key in obj) {
        result.push(`${key} ${obj[key]}점`);
    }
    result.sort((a, b)=>{
        return b - a;
    });

    return result;
}

export const writeInfo = (emotion, score) => {
    return {[emotion] : score};
}

export const toString = (obj) => {

    const result = [];
    for(const key in obj) {
        result.push(`${key} ${obj[key]}점`);
    }
    const string = result.join(", ");

    return string;

}