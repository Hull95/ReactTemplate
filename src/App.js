import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListWithData from "./navbar/ListWithData";
import AddForm from "./addForm/addFormData";
import ListDataTable from "./tableListData/ListDataTable";
import NavWM from "./components/NavWM";

function App() {
  return (
    <Router>
      <NavWM />
      <Switch>
        <Route path="/example-navbar" component={AddForm} />
        <Route path="/AddAndDeleteForm" component={ListWithData} />
        <Route path="/table" component={ListDataTable} />
      </Switch>
    </Router>
  );
}

export default App;
