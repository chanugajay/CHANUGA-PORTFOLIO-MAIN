
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const techSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Java", level: 75 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "SQL", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Flask", level: 75 },
    { name: "TensorFlow", level: 75 },
    { name: "Keras", level: 70 },
    { name: "OpenCV", level: 80 },
    { name: "scikit-learn", level: 75 },
    { name: "TextRank", level: 70 },
    { name: "jQuery UI", level: 75 },
    { name: "CNN", level: 70 },
    { name: "Image preprocessing (CLAHE)", level: 75 },
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Jira", level: 75 },
    { name: "SAP", level: 65 },
  ];

  const softSkills = [
    "Problem-solving",
    "Agile team collaboration",
    "Quick learning and adaptability",
    "Application deployment and maintenance"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {techSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
