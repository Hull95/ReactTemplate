import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListWithData from "./navbar/ListWithData";
import AddForm from "./addForm/addFormData";
import NavWM from "./components/NavWM";
import BlogInfo from "./addForm/BlogInfo";
import CreateNewBlog from "./addForm/CreateNewBlog";

function App() {
  return (
    <Router>
      <NavWM />
      <Switch>
        <Route exact path="/">
          <AddForm />
        </Route>
        <Route path="/change">
          <ListWithData />
        </Route>
        <Route path="/blogs/:id">
          <BlogInfo />
        </Route>
        <Route path="/create_blog">
          <CreateNewBlog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
