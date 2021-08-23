import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import MainNavbar from '../components/UI/navbar/MainNavbar'
import About from '../pages/About'
import CourseId from '../pages/CourseId'
import Courses from '../pages/Courses'
import Mentors from '../pages/Mentors'

const Router = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <MainNavbar />
                <Switch>
                    <Route exact path="/courses">
                        <Courses />
                    </Route>
                    <Route exact path="/courses/:id">
                        <CourseId />
                    </Route>
                    <Route exact path="/mentors">
                        <Mentors />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Redirect to="/courses" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
