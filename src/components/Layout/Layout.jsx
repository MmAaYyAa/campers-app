import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {Container} from './Layout.styled';

const Layout = () => {
    return (
      <Container>
         <Header/>
         <Toaster
        position="top-right"
        toastOptions={{
          style: {
            padding: '16px',
            marginTop: '80px',
          },
        }}
      />
      <Suspense fallback={<Loader/>}>
      <Outlet/>
      </Suspense>
      </Container>
    );
  };
  
  export default Layout;
  