import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Gender from './Gender'; //un-used
import Faker from 'faker';

// here, we are sendin this information through props
/*what this is allowing is to use a premade frame/structure/fill-in-the-blanks type 
of page called CommentDetail.js and then feed cutsom info in it's fill-in-the-blanks.*/ 
const App=()=> {
    return (
        <div className="ui container comments">
            <ApprovalCard 
                approvalMessegeDetail={
                    <CommentDetail 
                        author="JBonamassa" 
                        sex={Gender()} 
                        dateandtime="Today at 4PM" 
                        text="such shock, much wow" 
                        avatar={Faker.image.avatar()}
                    /> 
                }
            />

            {/* i've written the commentdetail component directly in the approvalcard component, and now it is going to be passed
            in the props as it's children. when using children you cannot choose to show let's say 1 particular child,
             or the children in any particular order. whenever you'll call props.children , all the children will be 
             rendered in the same order */}
            <ApprovalCard> 
                <CommentDetail 
                    author="KailashK" 
                    sex={Gender()} 
                    dateandtime="Today at 12PM" 
                    text="Love it alot" 
                    avatar={Faker.image.avatar()}
                />
                <CommentDetail  
                    author="B.B. Ding Ding" 
                    sex={Gender()} 
                    dateandtime="Today at 6AM" 
                    text="dobad" 
                    avatar={Faker.image.avatar()}
                />

            </ApprovalCard>
            
            {/* i've passed Commentdetail as one of the custom props of ApprovalCard. with this technique, i can pass 
            any and all components i want in the ApprovalCard, and then later simply choose by calling props.whatever 
             and select which i wanna render isntead of having to render all when using props.children */}
            <ApprovalCard 
                approvalMessegeDetail={
                    <CommentDetail 
                        author="John Mayer" 
                        sex={Gender()} 
                        dateandtime="Monday at 5PM" 
                        text="Goddammitbruh" 
                        avatar={Faker.image.avatar()}
                    />
                }
                approvalMessegeDetail_2={
                    <CommentDetail 
                        author="John Die" 
                        sex={Gender()} 
                        dateandtime="Tuesday at 7PM" 
                        text="Goddah" 
                        avatar={Faker.image.avatar()}
                    />  
                }
            />        
            
            <ApprovalCard
                approvalMessegeDetail="Are you sure?"            
            />
            
            {/* All of this is passes as a children, and can be accesed by props.children
            NOW THIS METHOD ALLOWS ME TO PASS JSX THROUGH PROPS, WHICH I CAN'T PASS THROUGH NORMAL PROPS.  */}                        
            <ApprovalCard>
                <div>
                    <h3>Warning</h3>
                    Do you want to Continue?  
                </div>          
            </ApprovalCard>

        </div>
    );
};


//ReactDOM.render(*Render what, render where*)
ReactDOM.render(<App />, document.querySelector('#root'));