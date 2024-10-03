import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../constants";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>(); // Captura o parâmetro da URL
  const navigate = useNavigate(); // Hook para navegação
  const projectId = id ? parseInt(id) : -1; // Define um valor padrão inválido (-1) caso id seja undefined
  const project = projects[projectId]; // Encontra o projeto baseado no ID da URL
  
  if (!project) {
    return <div className="text-center text-white mt-10">Projeto não encontrado!</div>;
  }

  return (
    <div className="p-5 sm:p-10 min-h-screen text-white">
        
      {/* Cabeçalho do projeto */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 mt-20">{project.name}</h1>

      {/* Descrição do projeto */}
      <div className="max-w-4xl mx-auto">
        <p className="text-secondary text-lg sm:text-xl text-center mb-10">{project.description}</p>
        
        {/* Imagem do projeto */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover border border-white rounded-xl"
          />
        </div>

        {/* Descrição detalhada e tags */}
        <div className="mt-8">
          <p className="text-lg sm:text-xl text-white mb-4 font-extralight">{project.detailedDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag.name} className={`text-[14px] px-3 py-1 rounded-md ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Botões: GitHub e Voltar */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => window.open(project.sourceCodeLink, "_blank")}
            className="px-5 py-3 bg-blue-500 text-white rounded-md shadow-md hover:opacity-70 transition duration-300"
          >
            Visualizar Projeto
          </button>

          <button
            onClick={() => navigate("/")} // Navega de volta para a página inicial
            className="px-5 py-3 bg-gray-800 text-white rounded-md shadow-md hover:opacity-70 transition duration-300"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
