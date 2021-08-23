import About from "../pages/About";
import CourseId from "../pages/CourseId";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Mentors from "../pages/Mentors";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/courses', component: Courses},
    {path: '/courses/:id', component: CourseId},
    {path: '/mentors', component: Mentors},
]

export const publicRoutes = [
    {path: '/login', component: Login},
]