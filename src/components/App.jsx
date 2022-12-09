import { Routes, Route } from "react-router-dom";
import { Home } from 'pages/Home/Home';
import { ContactsPage } from "pages/ContactsPage/ContactsPage";
import { Register } from "pages/Register/Register";
import { Login } from "pages/Login/Login";
import { Layout } from "components/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; 
import { selectIsRefreshing } from "redux/auth/selectors";
import { refreshUser } from "redux/auth/operations";
import { PrivateRoute } from 'components/PrivateRoot';
import { RestrictedRoute } from 'components/RestrictedRoot';

export const App = () => {
   const dispatch = useDispatch();
   const isRefreshing = useSelector(selectIsRefreshing);

   useEffect(() => {
      dispatch(refreshUser())
   },[dispatch])

   return isRefreshing ? (<b>Is refreshing user...</b>) : (
      <Routes>
         <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />

            <Route
               path="/register"
               element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}   
            />
            
            <Route 
               path="/login"
               element={<RestrictedRoute redirectTo="/contacts" component={<Login />} /> }
            />
            
            <Route
               path="/contacts"
               element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
            />

            <Route path='*' element={<div>Page not found</div>} />
         </Route>
      </Routes>
   )
};
