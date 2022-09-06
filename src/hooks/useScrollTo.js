export const useScrollTo = ({container}) => {

    const next = (index) => {
        const content = container?.current.querySelector(".content");
        const quizNodeList = content.children;
        const targetNode = quizNodeList[index+1];
        if(targetNode) {
            container.current.scrollTo({
                top : targetNode.offsetTop,
                behavior : "smooth",
            })
        }else {
            container.current.scrollTo({
                top : container?.current.querySelector(".submit").offsetTop,
                behavior : "smooth",
            })
        }
    }

    return [next];
}