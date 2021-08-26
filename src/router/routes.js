import About from "../pages/About";
import Account from "../pages/Account";
import ContactUs from "../pages/ContactUs";
import CourseId from "../pages/CourseId";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Mentors from "../pages/Mentors";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/courses', component: Courses},
    {path: '/courses/:id', component: CourseId},
    {path: '/mentors', component: Mentors},
    {path: '/account', component: Account},
    {path: '/contact', component: ContactUs},
]

export const publicRoutes = [
    {path: '/about', component: About},
    {path: '/courses', component: Courses},
    {path: '/courses/:id', component: CourseId},
    {path: '/mentors', component: Mentors},
    {path: '/login', component: Login},
    {path: '/contact', component: ContactUs},
]