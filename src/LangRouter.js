import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Application from './Application';

class LangRouter extends React.Component {
    constructor(props) {
        super(props)

        let locale = window.localStorage.getItem('locale') // sets locale to the variable
        if (locale === null) { // if locale isn't set
            window.localStorage.setItem('locale', 'en') // creates key-value pair
            locale = 'ru' // sets a value to the variable
        }
        this.state = {
            locale: locale // if locale is set - set it as state
        }
    }

    setLocale = (newLocale) => {
        console.log('newLocale = ', newLocale);
        window.localStorage.setItem('locale', newLocale)
        this.setState({ locale: newLocale }) // sets new value to the state
    }

    render() {
        const { locale } = this.state // what { locale } means? why not just locale?
        console.log('Rendering Locale = ', locale);
        return (
            <Switch>
                <Route path="/" exact render={(propRouter) => {
                    return <Redirect to={locale + "/"} />
                }} />
                <Route path="/en/*" render={
                    propsRouter =>
                        <Application
                            {...propsRouter}
                            locale={locale}
                            setLocale={this.setLocale}
                        />
                } />
                <Route path="/ru/*" render={
                    propsRouter =>
                        <Application
                            {...propsRouter}
                            locale={locale}
                            setLocale={this.setLocale}
                        />
                } />
                <Route path="/uk/*" render={
                    propsRouter =>
                        <Application
                            {...propsRouter}
                            locale={locale}
                            setLocale={this.setLocale}
                        />
                } />
                <Route path="/pl/*" render={
                    propsRouter =>
                        <Application
                            {...propsRouter}
                            locale={locale}
                            setLocale={this.setLocale}
                        />
                } />
                {/* <Route path="*" render={
                    propsRouter =>
                        <NoFound
                            {...propsRouter}
                            locale={locale}
                            setLocale={this.setLocale}
                        />
                } /> */}
            </Switch>
        )
    }
}
export default LangRouter;