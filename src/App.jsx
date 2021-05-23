import React from "react";
import Home from "./components/Home";
import udemyCourses from "./udemyCourses/UdemyCourses";
import noCourses from "./NoCourses"
import { Route, Switch } from "react-router";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/udemy" component={udemyCourses} />
        <Route path="/coursera" component={noCourses}/>
        <Route path="/Edx" component={noCourses}/>
        <Route path="/udacity" component={noCourses}/>
        <Route path="/khan academy" component={noCourses}/>
        <Route path="/skillshare" component={noCourses}/>
        <Route path="/whitehat jr" component={noCourses}/>
        <Route path="/LinkedIn Learning" component={noCourses}/>
      </Switch>
    </main>
  );
}

export default App;
