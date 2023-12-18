import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

import routes from "./components/constants/routes.jsx";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path={routes.homePage} element={<HomePage/>}/>
        <Route path={routes.newsPage} element={<NewsPage/>}/>
        <Route path={routes.contacts} element={<Contacts/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
