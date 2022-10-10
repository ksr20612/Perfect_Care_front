export const Types = {
    "안정형" : Symbol("안정형"),
    "게으른" : Symbol("게으른"),
    "감독형" : Symbol("감독형"),
    "자책형" : Symbol("자책형"),
} 
const QuestionList = [
    {
        sent : "1",
        type : Types["안정형"],
    },
    {
        sent : "2",
        type : Types["게으른"],
    },
    {
        sent : "3",
        type : Types["감독형"],
    },
    {
        sent : "4",
        type : Types["자책형"],
    },
]

export default QuestionList;