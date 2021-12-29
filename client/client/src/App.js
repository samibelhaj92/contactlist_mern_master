import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact';
import ContactDetails from './Components/ContactDetails';
import ContactList from './Components/ContactList';
import Navigation from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation/>
   <Routes>
    <Route path='/contacts' element={<ContactList></ContactList>} />
    <Route path='/AddContact' element={<AddContact></AddContact>} />
    <Route path='/edit/:id' element={<AddContact></AddContact>} />
    <Route path='/contacts/:id' element={<ContactDetails></ContactDetails>} />
   </Routes>
    </div>
  );
}

export default App;
