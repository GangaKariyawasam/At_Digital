import React from "react";
import QuestionCollapse from "./QuestionCollapse/QuestionCollapse.tsx";

const QuestionSection: React.FC = () => {

    return(
        <div className="container-fluid p-5">
            <div className="row m-0">
                <div className="col-12 text-center">
                    <h4 style={{color: "#6B3CC9"}}>Frequently asked questions</h4>
                </div>
                <div className="row">
                    <div className="col-12" style={{}}>
                    <QuestionCollapse title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."/>
                    <QuestionCollapse title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."/>
                    <QuestionCollapse title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionSection;