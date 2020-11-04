import React from "react";
import "./App.css";
import Homepage from "./screens/Homepage/Homepage";
import EditChecking from "./screens/EditAccount/EditChecking";
import EditSavings from "./screens/EditAccount/EditSavings";
import EditCreditCards from "./screens/EditAccount/EditCreditCards";
import AddAccount from "./screens/AddAccount/AddAccount";
import MyAccount from "./screens/MyAccount/MyAccount";
import { Route, Switch } from "react-router-dom";
import Checkings from "../../client/src/components/DropDown/checkings";
import Savings from "../../client/src/components/DropDown/savings";
import CreditCard from "../../client/src/components/DropDown/creditcard";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/EditChecking/:id/edit" component={EditChecking} />
        <Route exact path="/EditSavings/:id/edit" component={EditSavings} />
        <Route
          exact
          path="/EditCreditCards/:id/edit"
          component={EditCreditCards}
        />
        <Route exact path="/AddAccount" component={AddAccount} />
        <Route exact path="/MyAccount" component={MyAccount} />
        <Route path="/checkings" exact component={Checkings} />
        <Route path="/savings" exact component={Savings} />
        <Route path="/creditcard" exact component={CreditCard} />
      </Switch>
    </div>
  );
};

export default App;