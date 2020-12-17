import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { appTitle } from '../config';
import classes from './App.module.css';
import Header from '../components/Header/Header';
import { MemberProgress } from '../pages/MemberProgress';
import Registration from '../components/Modal/Registration/Registration';
import Members from '../pages/Members';

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
          <Route path='/registration' component={Registration} />
        </Switch>
      </header>
    </div>
  );
};
