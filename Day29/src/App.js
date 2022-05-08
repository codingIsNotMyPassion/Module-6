import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import Editusers from "./components/EditUser";
import { UserProvider } from "./components/UserContext";
import { ProductProvider } from "./components/ProductContext";
import CreateProducts from "./components/CreateProducts";
import Editproducts from "./components/Editproducts";

function App() {
  return (
    <div className="App wrapper">
      <Sidebar />
      <div className="content-wrapper d-flex flex-column">
        <div className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route exact
              path="/users"
              element={
                <UserProvider>
                  <Users />
                </UserProvider>}/>

            
              <Route path="/products" exact element={<ProductProvider><Products /></ProductProvider>} />
            

            
              <Route path="/createuser" exact element={<UserProvider><CreateUser /></UserProvider>} />
            


            <Route path="/createproducts" exact element={<ProductProvider><CreateProducts />
              </ProductProvider>}/>

            <>
              
                <Route path="/users/edit/:id" element={<UserProvider><Editusers /></UserProvider>} />
              

              
                <Route
                  path="/products/edit/:id"
                  element={<ProductProvider><Editproducts /></ProductProvider>}
                />
              
            </>
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;
