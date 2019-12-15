import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';
import ItemPage from './pages/Item';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about-us' component={AboutUsPage}/>
                <Route path='/contact-us' component={ContactUsPage}/>
                <Route path='/item/:catagoryId/:itemId' component={ItemPage}/>
            </Switch>
        </div>
    );
}

export default App;
