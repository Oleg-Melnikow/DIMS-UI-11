import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { appTitle } from '../config';
import classes from './App.module.css';
import Header from '../components/Header/Header';
import { Members } from '../pages/Members';
import { MemberProgress } from '../pages/MemberProgress';

export const App = () => {
  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <div className={classes.App}>
      <Header />
      <header className={classes.Header}>
        <Switch>
          <Route path='/members' component={Members} />
          <Route path='/member-progress' component={MemberProgress} />
        </Switch>
      </header>
    </div>
  );
};
