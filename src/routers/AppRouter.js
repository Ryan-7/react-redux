import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';


// React router passes in props that are defined in a <Route />
// Header wouldn't have props in this case 

const AppRouter = () => (  // put router into stateless functional component 
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage}  />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

// If you remove a path, react will consider it a match and always render that component
// Switch will go through all of the paths until it finds a match
// Thats why we put the 404 without a path and at the bottom. 
// and if you dont specifiy a path, it will always show up.

export {
    AppRouter as default
}