const projects = [
    {
      title: 'Heat Transfer Condenser',
      mentor: 'Sudesh Powar',
      teamSize: 10,
      skills: ['Teamwork', 'Equipment Operation', 'Team Coordination', 'Communication', 'Patience'],
      description:
        'The condenser is an integral part of the system. Its main role is to provide a mechanism for heat transfer. We worked on optimizing its efficiency to handle varying temperatures and pressure conditions. The project also involved troubleshooting issues related to heat dissipation and ensuring durability under extreme conditions.',
    },
    {
      title: 'Fire-Fighting Robot',
      mentor: 'N.B Totla',
      teamSize: 4,
      skills: ['3D Modeling', 'Fusion 360', 'Time Management', 'Testing'],
      description:
        'A compact fire-fighting robot designed to extinguish fires without human involvement, equipped with multiple functionalities. It was engineered to autonomously detect fire sources and navigate through hazardous areas. Additionally, we integrated a water spraying mechanism and tested the robot’s ability to move in constrained environments, enhancing its real-world applicability.',
    },
    {
      title: 'Underwater ROV',
      mentor: 'Dr. Sandip Langade',
      teamSize: 3,
      skills: ['3D Modeling', 'AutoCAD', 'CATIA', 'Fusion 360', 'Operations'],
      description:
        'A remotely operated vehicle used for underwater scientific research, image enhancement, and military surveillance. The ROV was designed to operate in deep-sea environments and capture high-resolution imagery. We also worked on optimizing its buoyancy and ensuring reliable communication between the surface and the vehicle during long-duration missions.',
    },
  ]
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-blue-50 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-blue-700 mb-10 text-center">Projects</h2>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Mentor:</span> {project.mentor}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Team Size:</span> {project.teamSize}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects
  