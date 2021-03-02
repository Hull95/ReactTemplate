import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddForm from "./addForm/addFormData";
import NavWM from "./components/NavWM";
import BlogInfo from "./addForm/BlogInfo";
import CreateNewBlog from "./addForm/CreateNewBlog";
import Page404 from "./404page.js/Page404";
import PreviewInformation from "./Information/PreviewInformation";
import AllComponents from "./UIUXComponent/AllComponents";
import ExampleUseEffect from "./example-useEffect/exampleUseEffect";

function App() {
  return (
    <Router>
      <NavWM />
      <Switch>
        <Route exact path="/">
          <AddForm />
        </Route>
        <Route path="/blogs/:id">
          <BlogInfo />
        </Route>
        <Route path="/create_blog">
          <CreateNewBlog />
        </Route>
        <Route path="/information">
          <PreviewInformation />
        </Route>
        <Route path="/component">
          <AllComponents />
        </Route>
        <Route path="/exampleUE">
          <ExampleUseEffect />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
