import React from'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../views/Home'
import Movies from '../views/movies'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/videos/:id" exact component={Movies} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes