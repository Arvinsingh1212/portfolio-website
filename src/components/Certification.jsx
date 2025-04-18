const certifications = [
    { name: 'Matlab', file: 'matlab.pdf' },
    { name: 'AutoCAD', file: 'autocad.pdf' },
    { name: 'Simulink Onramp', file: 'simulink-onramp.pdf' },
    { name: 'Simscape Onramp', file: 'simscape-onramp.pdf' },
  ]
  
  const Certification = () => {
    return (
      <section id="certifications" className="py-20 bg-blue-50 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-blue-700 mb-10 text-center">Certifications</h2>
          
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="bg-white border-l-4 border-blue-500 shadow-md hover:shadow-lg transition duration-300 rounded-lg p-5 flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-800">{cert.name}</span>
                <a
                  href={`/certificates/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded"
                >
                  View Certificate
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  
  export default Certification
  