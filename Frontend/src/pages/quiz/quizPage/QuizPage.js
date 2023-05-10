import React, {useState} from "react";
import "./QuizPage.css";
import Card from "../../../components/card/card/Card";
const QuizPage = () => {


    return(
        <>
            <div className="page">
                <h1> WYBIERZ QUIZ </h1>
            </div>
            {/*<div className="box">*/}
            {/*    <div className="quiz">*/}
            {/*        <img className="img" src={"https://www.popsci.com/uploads/2019/01/07/UQL4MLA6MXE6ECSZHOSXA3LA4E.jpg?auto=webp"}/>*/}
            {/*        <h5> QUIZ </h5>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="cards-box">
                <Card title="Food" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}/>
                <Card title="Sport" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}/>
                <Card title="Health" description="QuizDetails about something" image={"https://e0.pxfuel.com/wallpapers/423/293/desktop-wallpaper-house-md-for-iphone-7-dr-house-md-thumbnail.jpg"}/>
                <Card title="World" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1552764217-6d34d9795ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
                <Card title="Technology" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}/>
                <Card title="Music" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1558584673-650e95fef616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}/>
                <Card title="Literature>" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80"}/>
                <Card title="Culture" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1553613600-cc662dc488f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"}/>
                <Card title="Food" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}/>
                <Card title="Sport" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}/>
                <Card title="Health" description="QuizDetails about something" image={"https://e0.pxfuel.com/wallpapers/423/293/desktop-wallpaper-house-md-for-iphone-7-dr-house-md-thumbnail.jpg"}/>
                <Card title="World" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1552764217-6d34d9795ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
                <Card title="Technology" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}/>
                <Card title="Music" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1558584673-650e95fef616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}/>
                <Card title="Literature>" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80"}/>
                <Card title="Culture" description="QuizDetails about something" image={"https://images.unsplash.com/photo-1553613600-cc662dc488f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"}/>

            </div>
        </>
    )
}

export default QuizPage;
