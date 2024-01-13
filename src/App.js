import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import CompanyServices from "./pages/CompanyServices/CompanyServices.jsx";

import routes from "./common/constants/routes.jsx";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path={routes.homePage} element={<HomePage/>}/>
        <Route path={routes.newsPage} element={<NewsPage/>}/>
        <Route path={routes.companyServices} element={<CompanyServices/>}/>
        <Route path={routes.contacts} element={<Contacts/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
