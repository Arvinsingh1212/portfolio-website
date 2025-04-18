const skills = [
    {
      name: 'Matlab',
      description: 'Used for numerical computing, simulations, and data visualization.',
    },
    {
      name: 'AutoCAD',
      description: 'CAD software for mechanical drafting and engineering drawings.',
    },
    {
      name: 'CATIA',
      description: '3D modeling software for high-precision design in automotive and aerospace.',
    },
    {
      name: 'Fusion 360',
      description: 'Integrated CAD/CAM/CAE tool for product design and manufacturing.',
    },
    {
      name: '3D Modeling',
      description: 'Creating detailed 3D models for engineering and design purposes.',
    },
    {
      name: 'Simulink',
      description: 'Model-based design environment used with MATLAB for simulations.',
    },
    {
      name: 'Simscape',
      description: 'Simulink toolbox to simulate physical systems like mechanics and hydraulics.',
    },
  ]
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-blue-50 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-blue-700 mb-10 text-center">Skills</h2>
  
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="relative group">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium rounded-full shadow hover:shadow-md transition duration-300 cursor-default">
                  {skill.name}
                </span>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-60 text-xs text-white bg-gray-800 rounded px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 text-center">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  