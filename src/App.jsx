import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  ProjectDetails,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const Layout = () => {
  const location = useLocation(); // Agora o useLocation está dentro do BrowserRouter

  // Condição para verificar se a rota atual é a de projetos
  const isProjectDetailsPage = location.pathname.includes("/projects/");

  return (
    <div className="bg-primary relative z-0">
      {/* Renderiza Hero e Navbar apenas se NÃO estiver na página de detalhes do projeto */}
      {!isProjectDetailsPage && (
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
                <Footer />
              </div>
            </>
          }
        />
        {/* Rota para exibir os detalhes do projeto */}
        <Route path="/projects/:id" element={
          <div className="relative z-0">
            <Navbar />
            <ProjectDetails />
            <StarsCanvas />
          </div>
          
        } />
      </Routes>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
