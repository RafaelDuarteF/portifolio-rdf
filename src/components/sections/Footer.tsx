import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex justify-between items-center footer-container">
        <div className="text-center">
          <p className="text-sm ml-10 name-term">© {new Date().getFullYear()} Rafael Duarte de Freitas. Todos os direitos reservados.</p>
        </div>
        <div className="flex space-x-4 mr-10 icons-redes">
          <a
            href="https://github.com/RafaelDuarteF"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/rafa.duartef/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-duarte-de-freitas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
