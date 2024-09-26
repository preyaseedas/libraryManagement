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
        <Route path="/" element={<Maintenance />} />

        <Route path="/Reports" element={<Reports />} />
        <Route path="/Transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}
