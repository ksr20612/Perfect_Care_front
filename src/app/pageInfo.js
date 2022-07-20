const PageInfo = [
    {
        "title" : "Part 01.완벽 마주하기",
        "pages" : [
            {
                "title" : "들어가며",
            },
            {
                "title" : "나의 완벽주의",
            },
            {
                "title" : "나를 괴롭히는 완벽주의",
            },
            {
                "title" : "심리검사",
            },
            {
                "title" : "검사 결과",
            },
            {
                "title" : "감정의 기능(1)",
            },
            {
                "title" : "감정의 기능(2)",
            },
            {
                "title" : "감정의 기능(3)",
            },
            {
                "title" : "나를 괴롭히는 완벽주의",
            },
            {
                "title" : "목표 세우기",
            },
            {
                "title" : "마치며",
            },
            {
                "title" : "요점정리",
            },
        ]
    },
    {
        "title" : "Part 02.가혹한 기준의 덫",
        "pages" : [
            {
                "title" : "지난 파트 돌아보기",
            },
            {
                "title" : "기준 점검하기",
            },
            {
                "title" : "비현실적인 기준을 변경하는 방법",
            },
            {
                "title" : "나를 성장시키는 기준",
            },
            {
                "title" : "완벽주의 내 친구에게",
            },
            {
                "title" : "마치며",
            },
            {
                "title" : "요점 정리",
            },
        ]
    },
    {
        "title" : "Part 03.완벽 관리하기",
        "pages" : [
            {
                "title" : "지난 파트 돌아보기",
            },
            {
                "title" : "생각을 수색하라!",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(1)",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(2)",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(3)",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(4)",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(5)",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(6)",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(7)",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지(8)",
            },
            {
                "title" : "생각을 수색하라! - 인지 오류",
            },
            {
                "title" : "어떻게 생각을 바꿀 수 있을까?",
            },
            {
                "title" : "범인을 기억하자 - 인지 오류 찾기(1)",
            },
            {
                "title" : "범인을 기억하자 - 인지 오류 찾기(2)",
            },
            {
                "title" : "범인을 기억하자 - 인지 오류 찾기(3)",
            },
            {
                "title" : "찾았다! 완벽주의의 주범",
            },
            {
                "title" : "마치며",
            },
            {
                "title" : "요점 정리",
            },
        ]
    },
    {
        "title" : "Part 04.완벽 관리하기",
        "pages" : [
            {
                "title" : "지난 파트 돌아보기",
            },
            {
                "title" : "완벽주의자 Y양의 실수",
            },
            {
                "title" : "완벽주의자 Y양의 실수",
            },
            {
                "title" : "실수가 두려운 완벽주의자에게",
            },
            {
                "title" : "실패를 축하하다",
            },
            {
                "title" : "실패를 축하하다",
            },
            {
                "title" : "실패를 축하하다",
            },
            {
                "title" : "실수 피드백",
            },
            {
                "title" : "실수 피드백",
            },
            {
                "title" : "실수를 해보자!",
            },
            {
                "title" : "마치며",
            },
            {
                "title" : "요점 정리",
            },
        ]
    },
    {
        "title" : "Part 05.완벽을 버릴때 완벽에 가까워진다",
        "pages" : [
            {
                "title" : "지난 파트 돌아보기",
            },
            {
                "title" : "내가 통제하는 완벽주의",
            },
            {
                "title" : "내가 통제하는 완벽주의",
            },
            {
                "title" : "내가 통제하는 완벽주의",
            },
            {
                "title" : "불균형 완벽주의 vs 균형있는 완벽주의",
            },
            {
                "title" : "내가 통제하는 완벽주의",
            },
            {
                "title" : "내가 통제하는 완벽주의",
            },
            {
                "title" : "내가 통제하는 완벽주의",
            },
        ]
    }
];
Object.freeze(PageInfo);
const getPageLen = (partIdx) => {
    const idx = partIdx*1 - 1;
    if(typeof idx !== "number") return false;
    return PageInfo[idx].pages.length || false;
}
const getPartTitle = (partIdx) => {
    const idx = partIdx*1 - 1;
    if(typeof idx !== "number") return false;
    return PageInfo[idx].title || false;
}
const getPageTitle = (partIdx, pageIdx) => {
    const idxPart = partIdx*1 - 1;
    const idxPage = pageIdx*1 - 1;
    if(typeof idxPart !== "number" && typeof idxPage !== "number") return false;
    return PageInfo[idxPart].pages[idxPage].title || false;
}
const numParts = PageInfo.length;

export default PageInfo;
export { getPageLen, numParts, getPartTitle, getPageTitle };