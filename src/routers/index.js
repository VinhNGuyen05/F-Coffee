import About from '../features/About'
import CoffeeMoment from '../features/CoffeeMoment'
import Coffees from '../features/Coffees'
import Contact from '../features/Contact'
import Home from '../features/Home'
import News from '../features/News'

const publicRoutes = [
    {
        path: '/',
        name: '',
        component: Home
    },{
        path: '/about',
        name: 'about',
        component: About
    }, {
        path: '/coffeemoment',
        name: 'coffeeMoment',
        component: CoffeeMoment
    }, {
        path: '/coffees',
        name: 'coffees',
        component: Coffees
    }, {
        path: '/contact',
        name: 'contac',
        component: Contact
    }, {
        path: '/news',
        name: 'news',
        component: News
    }
]

const privateRouters = []

export { publicRoutes, privateRouters }