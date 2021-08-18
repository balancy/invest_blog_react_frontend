import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainNavbar from '../components/UI/navbar/MainNavbar'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Mentors from '../pages/Mentors'

const Router = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <MainNavbar />
                <Switch>
                    <Route exact path="/">
                        <Courses />
                    </Route>
                    <Route exact path="/mentors">
                        <Mentors />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
