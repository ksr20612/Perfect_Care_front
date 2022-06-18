import { useEffect } from "react";
import YouTube from "react-youtube";
import useResize from "../hooks/useResize";

const MovieClip = ({
    videoId = "NUKKHsgD3rc",
    width,
    height,
}) => {

    const [widthFull, heightFull] = useResize();

    useEffect(()=>{
        console.log({widthFull, heightFull});
    },[widthFull, heightFull]);

    return (
        <YouTube videoId={videoId}
            opts={{
                width : width || (widthFull * 0.8 * 0.9)+"",
                height : height || (heightFull * 0.8 * 0.9)+"",
                palyerVars : {
                    autoplay : 1,
                    rel : 0,
                    modestbranding : 1,
                }
            }}
            onEnd={(e)=>{e.target.stopVideo(0);}}
        />
    )
}

export default MovieClip