import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';


// import { fetchContacts } from 'redux/operations';
// import ContactForm from './ContactForm/ContactForm'
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import ContactList from './ContactList/ContactList'
// import Filter from './Filter/Filter'

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts'));

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/contacts" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
    // {/* <div className='wrapper'>
    //     <h1 className='title'>Phonebook</h1>
    //     <ContactForm />
    //     <h2 className='title'>Contacts</h2>
    //     <Filter />
    //     <ContactList />
    //   </div> */}
  )
}


