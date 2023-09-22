import './App.css';
import Main from './Components/Main/Main';
import AboutCompanyContainer from './Components/pages/AboutCompany/AboutCompanyContainer';
import FaceOfCompanyContainer from './Components/pages/FaceOfCompany/FaceOfCompanyContainer';
import RealizedProjectsContainer from './Components/pages/RealizedProjects/RealizedProjectsContainer';
import CurrentlyBuildingContainer from './Components/pages/CurrentlyBuilding/CurrentlyBuildingContainer';
import RebildingContainer from './Components/pages/Rebilding/RebildingContainer';
import ContactsContainer from './Components/pages/Сontacts/ContactsContainer';
import NewsContainer from './Components/pages/News/NewsContainer';
import AdminContainer from './Components/Admin/AdminContainer';
import AdminPageContainer from './Components/Admin/AdminPageContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/news" element={ <NewsContainer />} />
        <Route path="/aboutCompany" element={ <AboutCompanyContainer />} />
        <Route path="/faceOfCompany" element={ <FaceOfCompanyContainer />} />
        <Route path="/projects" element={ <RealizedProjectsContainer />} />
        {/* <Route path="/currentlyBilding" element={ <CurrentlyBuildingContainer />} />
        <Route path="/rebilding" element={ <RebildingContainer />} /> */}
        <Route path="/contacts" element={ <ContactsContainer />} />
        <Route path="/adminLogined" element={ <AdminPageContainer />} />
        <Route path="/admin" element={ <AdminContainer />} />
        <Route path="/" element={ <Main />} />
      </Routes>
    </div>
  );
}

export default App;
