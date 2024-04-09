import React, {useRef, useState} from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

interface AccordionItemProps {
    title: string;
    content: string;
}

const QuestionCollapse: React.FC<AccordionItemProps> = ({title,content}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const collapseRef = useRef<HTMLDivElement>(null);

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return(
        <div className="m-3 p-md-1">
            <div className="d-flex align-items-center justify-content-between" style={{backgroundColor: "#FAF8FF"}} data-bs-toggle="collapse" data-bs-target={`#collapse-${title}`} aria-expanded="false" aria-controls="collapseExample">
                <p className="p-2" style={{color: isCollapsed ? "#000000": "#6B3CC9"}}>{title}</p>
                {isCollapsed ? <TiPlus onClick={handleToggleCollapse} /> : <TiMinus onClick={handleToggleCollapse} />}
            </div>
            <div ref={collapseRef} className={`collapse ${isCollapsed ? '' : 'show'}`} id="collapseExample">
                <div className="card card-body" style={{backgroundColor: "#FAF8FF",border:"none"}}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default QuestionCollapse;