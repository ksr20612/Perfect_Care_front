import SamplePic from "../../assets/sample.jpg";

// 실제로는 fetch해서 가져올 것
const CardList = [
    {
        name : "1",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "2",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "3",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "4",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "5",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "6",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "7",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "8",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "9",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "10",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "11",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "12",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "13",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
    {
        name : "14",
        definition : "감정에 대한 설명",
        image : SamplePic
    },
    {
        name : "15",
        definition : "부당한 상황에서 화가 치밀어 오르는 감정",
        image : SamplePic
    },
]
Object.freeze(CardList);

export const translateDb = (obj = {
    "화남" : 5,
    "슬픔" : 3,
    "우울함" : 6,
}) => {

    /*
        {
            "화남" : 5,
            "슬픔" : 3,
        } 
        => "화남 5점 / 슬픔 3점"
    */
    return Object.keys(obj).reduce((pre, cur, i) => pre+`${i===0? '' : ' / '}${cur} ${obj[cur]}점`, "");

}

export default CardList;