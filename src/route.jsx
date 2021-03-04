import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import routerConfig from './routerConfig'
import Home from './page/home'

function router(){
    //渲染路由组件
    let Routes = routerConfig.map((item,index)=>{
        return <Route exact path={item.path} key={index} component={item.component}></Route>
    })
    return(
        <BrowserRouter>
            <Switch>
                {Routes}
                {/* 首页默认重定向到 /dashboard */}
                <Redirect exact from="/home" to="/" />
                {/* 未匹配到的路由重定向到 <Guide> 组件，实际情况应该重定向到 404 */}
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default router