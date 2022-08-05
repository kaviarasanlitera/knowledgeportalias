import React from "react";
import { useMediaPredicate } from "react-media-hook";

const MediaPredicatecomponent = () => {
    const biggerThan300px = useMediaPredicate("(min-width: 300px)");
    const biggerThan768px = useMediaPredicate("(min-width: 768px)");
    const biggerThan992px = useMediaPredicate("(min-width: 992px)");
    const biggerThan1224px = useMediaPredicate("(min-width: 1224px)");
    

    const smallerThan300px = useMediaPredicate("(max-width: 300px)");
    const smallerThan768px = useMediaPredicate("(max-width: 768px)");
    const smallerThan992px = useMediaPredicate("(max-width: 992px)");
    const smallerThan1224px = useMediaPredicate("(max-width: 1224px)");
    return (
    <div>
        {biggerThan300px && <button>biggerThan300px</button>}
        {biggerThan768px && <button>biggerThan768px</button>}
        {biggerThan992px && <button>biggerThan992px</button>}
        {biggerThan1224px && <button>biggerThan1224px</button>}
<br/>
        <div align="center">
            {smallerThan300px&&<h1>smallerThan300px</h1>}
            {smallerThan768px&&<h1>smallerThan768px</h1>}
            {smallerThan992px&&<h1>smallerThan992px</h1>}
            {smallerThan1224px&&<h1>smallerThan1224px</h1>}
        </div>
    </div>
    );
};
export default MediaPredicatecomponent;
