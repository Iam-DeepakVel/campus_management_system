import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
//Campus
import CampusPage from './pages/CampusPage';
import AddCampus from './pages/Campus/AddCampus';
import Campus from './pages/Campus/Campus';
import EditCampus from './pages/Campus/EditCampus';

//Building
import BuildingPage from './pages/BuildingPage';
import AddBuilding from './pages/Building/AddBuilding';
import Building from './pages/Building/Building';
import EditBuilding from './pages/Building/EditBuilding';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route  path="/" exact element={<CampusPage/>} />
        <Route  path="/campusPage" exact element={<CampusPage/>} />
        <Route  path="/campus/:id" exact element={<Campus/>} />
        <Route  path="/add-campus" exact element={<AddCampus/>} />
        <Route  path="/edit-campus/:id" exact element={<EditCampus/>} />
        
        <Route  path="/buildingPage" exact element={<BuildingPage/>} />
        <Route  path="/building/:id" exact element={<Building/>} />
        <Route  path="/add-building/:id" exact element={<AddBuilding/>} />
        <Route  path="/edit-building/:id" exact element={<EditBuilding/>} />
      
      </Routes>
    </div>
  );
}

export default App;
