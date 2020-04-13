/*to render the whole card that has approval and rejection button. with space for 
something in the top. for eg. space for comments, to be rejected or approved */
import React from 'react';
import Faker from 'faker';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
                {props.approvalMessegeDetail}
                {props.approvalMessegeDetail_2}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">
                        Approve
                    </div>
                    <div className="ui basic red button">
                        Reject
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ApprovalCard; 