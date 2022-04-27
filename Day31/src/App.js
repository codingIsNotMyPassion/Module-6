import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Teachers from './components/Teachers';
import Createteacher from './components/Createteacher';
import Viewdetail from './components/Viewdetail';
import EditDetail from './components/Editdetail';
import Students from './components/Students'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createuser from './components/createuser';
import Userview from './components/userview';
import Edit from './components/edit';
import { UserProvider } from './components/UserContext';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <BrowserRouter>
      <div id='wrapper'>
        <UserProvider value={{ users, setUsers }}>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Home/>} /> 
                  <Route path="/teachers" element={<Teachers />} />
                  <Route path="/createteacher" element={<Createteacher/>} />
                  <Route path="/view-detail/:id" element={<Viewdetail />} />
                  <Route path="/edit-detail/:id" element={<EditDetail />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/userscreate" element={<Createuser />} />
                  <Route path="/users-view/:id" element={<Userview />} />
                  <Route path="/users-edit/:id" element={<Edit />} />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;