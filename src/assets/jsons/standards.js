const Standards = {

    "학업/능력" : {
        "나는 다른 사람들에게 뭐든 잘한다는 평가를 받고 싶다." : true,
        "경력이나 지위가 높은 사람이 되어야 한다(사회적 인정)." : false,
        "내가 속한 집단에서는 늘 상위권을 유지하고 싶다." : false,
        "내가 하는 일이 가치가 있어야 한다." : false,
        "나는 결과물을 남들에게 보여줄 때 심하게 긴장된다." : false,
        "대학교는 무조건 인서울로 진학해야 한다." : false,
    },
    "외모/건강" : {
        "남들에게 인정받을 만한 외모여야 한다." : true,
        "젊을 때는 날씬하고 예쁘게 유지해야 한다." : false,
        "살이 찌면 안된다." : false,
        "나는 이 프로그램을 통해 완벽주의가 완전히 없어지길 기대한다." : false,
        "정서적 긴장, 불안이 없어지면 좋을 것 같다." : false,
    },
    "대인관계" : {
        "누군가에게 늘 도움이 되는 존재이고 싶다." : true,
        "어디에서든 적응할 수 있는 친화력이 있어야 한다." : false,
        "부정적인 감정은 드러내지 않는 것이 좋다." : false,
        "나를 싫어하는 사람이 한 명만 있어도 우울해지곤 한다." : false,
        "주위에서 칭찬해주면 자존감이 높아진다." : false,
        "평가에 민감한 편이다." : false,
    },
    "성공/행복" : {
        "무리해서라도 좋은 결과를 내는 것이 최선을 다하는 것이다." : true,
        "내 능력을 인정받지 못하면 분하다." : false,
        "실패할까봐 일을 시작하기 전 모든 경우의 수를 다 생각한다." : false,
        "실수를 하면 너무 부끄러울 것 같다." : false,
        "빠른 시간 안에 성공해야 한다." : false,
    }

}

const getChecked = (key) => {
    const range = Standards[key];
    for(const item in range) {
        if(range[item]) return item;
    }
}

Object.freeze(Standards);

export default Standards;
export { getChecked };