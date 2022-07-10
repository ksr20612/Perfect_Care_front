const PageInfo = [
    {
        "title" : "Part1 가혹한 기준의 덫",
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
        ]
    },
    {
        "title" : "Part2 가혹한 기준의 덫",
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
                "title" : "",
            },
            {
                "title" : "요점 정리",
            },
        ]
    },
    {
        "title" : "Part3 완벽 관리하기",
        "pages" : [
            {
                "title" : "지난 파트 돌아보기",
            },
            {
                "title" : "생각을 수색하라!",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 자동사고 기록지",
            },
            {
                "title" : "생각을 수색하라! - 인지 오류",
            },
            {
                "title" : "어떻게 생각을 바꿀 수 있을까?",
            },
            {
                "title" : "범인을 기억하자 - 인지 오류 찾기",
            },
            {
                "title" : "범인을 기억하자 - 인지 오류 찾기",
            },
            {
                "title" : "범인을 기억하자 - 인지 오류 찾기",
            },
            {
                "title" : "찾았다! 완벽주의의 주범",
            },
            {
                "title" : "",
            },
            {
                "title" : "요점 정리",
            },
        ]
    },
    {
        "title" : "Part4 완벽 관리하기",
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
                "title" : "",
            },
            {
                "title" : "요점 정리",
            },
        ]
    },
    {
        "title" : "Part5 완벽 관리하기",
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