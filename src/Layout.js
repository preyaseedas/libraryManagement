import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  //useRouteMatch,
} from "react-router-dom";
import Reports from "./Reports";
import Transaction from "./Transaction";
import Maintenance from "./Maintenance";
export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maintenance />}></Route>

        <Route path="/Reports" element={<Reports />}></Route>
        <Route path="/Transaction" element={<Transaction />}></Route>
      </Routes>
    </Router>
  );
}
