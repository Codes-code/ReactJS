import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import genderer from './Gender'; //un-used
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
                        sex={gender()} 
                        dateandtime="Today at 4PM" 
                        text="such shock, much wow" 
                        avatar={Faker.image.avatar()}
                    /> 
                }
            />

            <ApprovalCard> 
                <CommentDetail 
                    author="KailashK" 
                    sex={gender()} 
                    dateandtime="Today at 12PM" 
                    text="Love it alot" 
                    avatar={Faker.image.avatar()}
                />
                <CommentDetail  
                    author="B.B. Ding Ding" 
                    sex={gender()} 
                    dateandtime="Today at 6AM" 
                    text="dobad" 
                    avatar={Faker.image.avatar()}
                />

            </ApprovalCard>
            
            <ApprovalCard 
                approvalMessegeDetail={
                    <CommentDetail  
                        author="B.B. King" 
                        sex={gender()} 
                        dateandtime="Today at 3AM" 
                        text="bamboozled" 
                        avatar={Faker.image.avatar()}
                    />
                }
                approvalMessegeDetail_2={
                    <CommentDetail 
                        author="John Die" 
                        sex={gender()} 
                        dateandtime="Tuesday at 7PM" 
                        text="Goddah" 
                        avatar={Faker.image.avatar()}
                    />  
                }
            />        

            <ApprovalCard 
                approvalMessegeDetail={
                    <CommentDetail 
                        author="John Mayer" 
                        sex={gender()} 
                        dateandtime="Monday at 5PM" 
                        text="Goddammitbruh" 
                        avatar={Faker.image.avatar()}
                    /> 
                }
            />

            <ApprovalCard
                approvalMessegeDetail="Do you want to Continue?"            
            />
        </div>
    );
};

//for gender generation alternatively
var b="Male"; var a="Female"; const gender=()=> {var temp=a; a=b; b=temp; return a;};


//ReactDOM.render(*Render what, render where*)
ReactDOM.render(<App />, document.querySelector('#root'));