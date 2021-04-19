import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddForm from "./addForm/addFormData";
import NavWM from "./components/NavWM";
import BlogInfo from "./addForm/BlogInfo";
import CreateNewBlog from "./addForm/CreateNewBlog";
import Page404 from "./404page.js/Page404";
import PreviewInformation from "./Information/PreviewInformation";
import AllComponents from "./UIUXComponent/AllComponents";
import TodoList from "./TodoExample/TodoList";
import FormRedux from "./formRedux/formRedux";
import NewPostRedux from "./formRedux/createNewPost";
import PreviewDetailPost from "./formRedux/previewDetailPost";
import Map from "./Map/Map";
import EditPost from "./formRedux/editPost";
import AllDevMembers from "./DevTeam/AllDevMembers";

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
        <Route path="/exampleUE" component={TodoList} />
        <Route path="/formRedux">
          <FormRedux />
        </Route>
        <Route path="/create_post">
          <NewPostRedux />
        </Route>
        <Route path="/preview_post/:id" component={PreviewDetailPost}></Route>
        <Route path="/edit_post/:id" component={EditPost}></Route>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/alldevmembers" component={AllDevMembers}></Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
