import  React  from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home'



class Routes extends React.Component {
   render() {
      return (
        <Router >
           <Route path = "/" component = {Home} />
        </Router>
      );
   }
}
export default Routes;