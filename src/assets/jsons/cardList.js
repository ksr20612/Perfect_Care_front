import anger from "../emotions/anger.svg";
import annoyed from "../emotions/annoyed.svg";
import anxiety from "../emotions/anxiety.svg";
import confidence from "../emotions/confidence.svg";
import depressed from "../emotions/depressed.svg";
import discomfort from "../emotions/discomfort.svg";
import ease from "../emotions/ease.svg";
import embarrased from "../emotions/embarrased.svg";
import excited from "../emotions/excited.svg";
import fear from "../emotions/fear.svg";
import guilty from "../emotions/guilty.svg";
import happiness from "../emotions/happiness.svg";
import lonely from "../emotions/lonely.svg";
import panic from "../emotions/panic.svg";
import proud from "../emotions/proud.svg";
import regret from "../emotions/regret.svg";
import sadness from "../emotions/sadness.svg";
import satisfied from "../emotions/satisfied.svg";
import thankful from "../emotions/thankful.svg";
import disappointed from "../emotions/disappointed.svg";
import shame from "../emotions/shame.svg"
import self_blame from "../emotions/self-blame.svg";

const CardList = [
    {
        name : "슬픔",
        definition : "마음이 아프고 괴로운 감정",
        icon : sadness
    },
    {
        name : "분노",
        definition : "부당한 상황에서 화가 치밀어오르는 감정",
        icon : anger
    },
    {
        name : "짜증남",
        definition : "뜻대로 되지 않을때 발생하는 불쾌한 감정",
        icon : annoyed
    },
    {
        name : "우울감",
        definition : "기분이 가라앉고 무기력하며 즐거움을 잘 느끼지 못하는 상태",
        icon : depressed
    },
    {
        name : "행복",
        definition : "일상에서 충분한 만족과 기쁨을 느낌",
        icon : happiness
    },
    {
        name : "만족",
        definition : "욕구가 충족되어 흡족한 상태",
        icon : satisfied
    },
    {
        name : "신남",
        definition : "기분이 들뜨고 즐거우며 흥분됨",
        icon : excited
    },
    {
        name : "감사함",
        definition : "도움이나 베품에 대해 고맙게 여기는 감정",
        icon : thankful
    },
    {
        name : "자랑스러움",
        definition : "스스로에 대해 자부심이 들고 뿌듯함을 느끼는 감정",
        icon : proud
    },
    {
        name : "자신감",
        definition : "스스로 잘할 수 있다는 믿음",
        icon : confidence
    },
    {
        name : "편안함",
        definition : "걱정, 긴장이 없는 이완된 상태",
        icon : ease
    },
    {
        name : "당황스러움",
        definition : "놀라서 어찌할 바를 모르는 상태",
        icon : panic
    },
    {
        name : "아쉬움",
        definition : "미련이 남아 서운한 상태",
        icon : regret
    },
    {
        name : "불안함",
        definition : "마음이 불편하고 조마조마하여 초조한 감정",
        icon : anxiety
    },
    {
        name : "공포/두려움",
        definition : "위협 또는 위험한 상황에서 발생하는 무서운 감정",
        icon : fear
    },
    {
        name : "죄책감",
        definition : "사회적 규범, 개인적 가치에 어긋나는 행동을 했을때 느끼는 감정",
        icon : guilty
    },
    {
        name : "수치심",
        definition : "다른 사람이 나를 결점이 있는 사람으로 평가한다고 느끼는 감정",
        icon : shame,
    },
    {
        name : "실망감",
        definition : "기대했던 것보다 결과가 좋지 않을때 느끼는 감정",
        icon : disappointed,
    },
    {
        name : "자괴감/자책감",
        definition : "스스로를 탓하며 부끄럽게 여기는 감정",
        icon : self_blame
    },
    {
        name : "외로움",
        definition : "혼자라는 생각이 들 때 느끼는 쓸쓸한 감정",
        icon : lonely
    },
    {
        name : "초조함",
        definition : "애가 타서 마음이 조마조마한 상태",
        icon : embarrased,
    },
    {
        name : "불쾌함",
        definition : "못마땅하여 기분이 좋지 않은 상태",
        icon : discomfort
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