import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavWM from "./NavbarComponent/NavWM";
import Page404 from "./404page.js/Page404";
import PreviewInformation from "./InformationWithoutRedux/PreviewInformation";
import PageWithComponent from "./UIUXComponent/PageWithComponent";
import TodoList from "./TodoExample/TodoList";
import FormRedux from "./formRedux/formRedux";
import NewPostRedux from "./formRedux/createNewPost";
import PreviewDetailPost from "./formRedux/previewDetailPost";
import EditPost from "./formRedux/editPost";
import AllDevMembers from "./DevTeam/AllDevMembers";
import ReactLogicPage from "./ReactHomePage/ReactLogicPage";
import SettingsPanel from "./SettingsPanel/SettingsPanel";
import ComponentTest1 from "./ComponentTesting/ComponentTest1";
import { RandomComponent } from "./ComponentTesting/RandomComponent";

function App() {
  return (
    <Router>
      <NavWM />
      <Switch>
        <Route exact path="/" component={ReactLogicPage} />
        <Route path="/information" component={PreviewInformation} />
        <Route path="/component" component={PageWithComponent} />
        <Route path="/exampleUE" component={TodoList} />
        <Route path="/formRedux" component={FormRedux} />
        <Route path="/create_post" component={NewPostRedux} />
        <Route path="/preview_post/:id" component={PreviewDetailPost} />
        <Route path="/edit_post/:id" component={EditPost} />
        <Route path="/alldevmembers" component={AllDevMembers} />
        <Route path="/settings" component={SettingsPanel} />
        <Route path="/compTest1" component={ComponentTest1} />
        <Route path="/componentsRandom" component={RandomComponent} />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
