import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { SeparatePost } from './pages/SeparatePost/SeparatePost'
import { RoutesConfig as Routes } from './routes'

export const App: FC = () => (
  <>
    <header>
      Header: <Link to={Routes.MainPage}>Home</Link>
    </header>
    <div>
      <Switch>
        <Route path={Routes.MainPage} exact component={MainPage} />
        <Route path={Routes.Post} component={SeparatePost} />
      </Switch>
    </div>
    <footer>Footer</footer>
  </>
)
