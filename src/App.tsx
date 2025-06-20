// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import MyTasks from './components/pages/MyTasks';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import MainLayout from './components/layout/MainLayout';
import NewTask from './components/pages/NewTask';

// Para rodar o backend: npm run backend
// Para rodar o frontend: npm run dev

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="MyTasks" element={<MyTasks />} />
          <Route path="NewTask" element={<NewTask />} />
          <Route path="contact" element={<Contact />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
