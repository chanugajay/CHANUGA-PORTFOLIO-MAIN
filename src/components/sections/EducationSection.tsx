
const EducationSection = () => {
  const education = [
    {
      degree: "BSc. (Hons) in Computer Science",
      institution: "Informatics Institute of Technology - Affiliated with the University of Westminster",
      period: "2021 - 2025",
    },
    {
      degree: "GCE Advanced Level - Physical Science",
      institution: "Thurstan College, Colombo 07",
      period: "2018 - 2020",
    },
    {
      degree: "G. C. E. Ordinary Level Examination",
      institution: "Thurstan College, Colombo 07",
      period: "2017",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        <div className="mt-8 max-w-3xl">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                {edu.institution && (
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                )}
                <p className="text-sm text-primary font-medium mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
