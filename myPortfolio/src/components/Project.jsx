import React, { useState } from "react";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio website using React and Tailwind CSS",
      description:
        "A responsive portfolio website built using React and Tailwind CSS. The website showcases my skills, projects, and certifications.",
      fullDescription:
        "This portfolio includes sections like About Me, Skills, Projects, and Certifications. It's built entirely with React and styled using Tailwind CSS for rapid development and responsive design. It includes dark mode, smooth scroll, and reusable modular components. The project demonstrates a strong understanding of component-driven architecture and modern front-end principles.",
      imageSrc: "/proj_img01.png",
    },
    {
      title: "Object detection using TensorFlow",
      description:
        "A machine learning project that uses TensorFlow to detect objects in images.",
      fullDescription:
        "In this project, a custom CNN model was trained using TensorFlow to recognize multiple object classes with bounding boxes. It includes data preprocessing, augmentation, model architecture, training pipelines, and real-time inference. This project highlights expertise in ML workflows, including TensorBoard visualization, model evaluation, and deployment readiness.",
      imageSrc: "/proj_img02.png",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div id="projects" className="relative px-4 md:px-10">
      <p className="mt-6 text-3xl font-bold text-center md:text-left">Projects</p>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ${selectedProject ? 'blur-sm pointer-events-none' : ''}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mx-auto"
            onClick={() => openModal(project)}
          >
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={project.imageSrc}
              alt={project.title}
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">{project.description}</p>
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300">
                Read more
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full p-10 relative transition-transform duration-300"
          >
            {/*  yellow bubble */}
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-4 w-6 h-6 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-md flex items-center justify-center text-black font-bold text-lg transition-colors"
              title="Close"
            >     
              &minus;
            </button>


            <img
              src={selectedProject.imageSrc}
              alt={selectedProject.title}
              className="rounded-lg w-full h-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {selectedProject.fullDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
