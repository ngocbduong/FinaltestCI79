import HomePage from './Other Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Other Pages/Productlist';
import Profile from './Other Pages/Profile';
import Header from './Other Pages/Header';
import NotFound from './Other Pages/NotFound';
import ProductDetails from './Other Pages/ProductDetail';
import Courses from './Components/Courses';
import AboutMe from './Components/AboutMe';
import EditSetting from './Components/EditSetting';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/Home" element={<HomePage />} />
                    <Route path="/Product" element={<ProductList />} />
                    <Route path="/Product/:id" element={<ProductDetails />} />
                    <Route path="/Profile" element={<Profile />}>
                        <Route path="AboutMe" element={<AboutMe />} />
                        <Route path="Course" element={<Courses />} />
                        <Route path="Editsetting" element={<EditSetting />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
