// src/pages/ProjectDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../components/projectsData'; 

const ProjectDetails = () => {
  const { id } = useParams(); // URL থেকে আইডি নিচ্ছে
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center mt-20 text-white">Project not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 text-black dark:text-slate-100">
      {/* Back Button */}
      <Link to="/" className="text-purple-500 hover:text-purple-400 mb-6 inline-block font-medium">
        ← Back to Projects
      </Link>

      <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
        <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-2xl mb-8" />
        
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{project.longDesc}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-purple-500 mb-4">Challenges</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.challenges.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-purple-500 mb-4">Future Plans</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.futurePlans.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;