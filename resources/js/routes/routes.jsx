import React from 'react';
import App from './../container/page/index'
import NavBar from './../container/NavBar/NavBar'
import productContainer from './../container/Product/product'
import actionContainer from './../container/Product/actionProduct'
import cateContainer from './../container/Cate/cateContainer'
import subcateContainer from './../container/Cate/subcateContainer'
import unitContainer from './../container/Cate/unitContainer'
import { HashRouter, Link, Route, BrowserRouter, Switch } from 'react-router-dom';
const appRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/product/list/all" component={productContainer} exact={true} />
                <Route path="/product/new" component={actionContainer} exact={true} />
                <Route path="/cate/all" component={cateContainer} exact={true} />
                <Route path="/subcate/all" component={subcateContainer} exact={true} />
                <Route path="/unit/list/all" component={unitContainer} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default appRouter;