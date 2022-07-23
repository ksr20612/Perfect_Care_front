const questionList = {
    "우울" : [
        "문항1",
        "문항2",
        "문항3",
        "문항4",
        "문항5",
        "문항6",
        "문항7",
        "문항8",
        "문항9",
        "문항10",
    ]
}
Object.freeze(questionList);

export const getLength = () => questionList["우울"].length;

export default questionList;