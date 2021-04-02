import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { SeparatePost } from './pages/SeparatePost/SeparatePost'
import { RoutesConfig as Routes } from './routes'
import { NewPost } from './pages/NewPost/NewPost'

export const App: FC = () => (
  <>
    <header>
      <nav>
        <Link to={Routes.MainPage}>Home</Link>
        <Link to={Routes.NewPost}>New post</Link>
      </nav>
    </header>
    <main>
      <Switch>
        <Route path={Routes.MainPage} exact component={MainPage} />
        <Route path={Routes.Post} component={SeparatePost} />
        <Route path={Routes.NewPost} component={NewPost} />
      </Switch>
    </main>
    <footer>Footer</footer>
  </>
)
