import Home from './page/home'
import Detail from './page/detail'
import List from './page/list'
import Option from './page/option'

let routerConfig = [
    {
        "path":'/',
        "component":Home
    },
    {
        "path":'/list',
        "component":List
    },
    {
        "path":'/detail',
        "component":Detail
    },
    {
        "path":'/option',
        "component":Option
    }
]


export default routerConfig;