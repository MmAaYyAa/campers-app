import Header from '../Header/Header';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {Container} from './Layout.styled';

const Layout = () => {
    return (
      <Container>
         <Header/>
      <Suspense fallback={<Loader/>}>
      <Outlet/>
      </Suspense>
      </Container>
    );
  };
  
  export default Layout;
  