import { Route,Routes,BrowserRouter as Router } from "react-router-dom";


import BranchLogin from "./admin/branch/BranchLogin";
import BranchDashboard from "./admin/branch/BranchDashboard";
import Branch from "./admin/branch/Branch"
import AdminDashboard from "./admin/adminlogin/AdminDashboard"
import AdminLogin from "./admin/adminlogin/AdminLogin"
import DeliveryIterface from "./admin/dilevery/DeliveryIterface"
import DeliveryDisplay from "./admin/dilevery/DeliveryDisplay"

function App() {
  return (
    <div style={{fontFamily:'Quicksand'}}>
      <Router>
        <Routes>
          <Route element={<BranchLogin />} path="/branchlogin" />
          <Route element={<BranchDashboard />} path="/branchdashboard/*" />
          <Route element={<Branch />} path="/branch" />
          <Route element={<AdminLogin />} path="/adminlogin" />
          <Route element={<AdminDashboard />} path="/admindashboard/*" />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
