// src/components/layout/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from './Container';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Container customClass="min_Height">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
