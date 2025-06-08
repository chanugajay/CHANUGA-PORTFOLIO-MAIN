import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, FileJson, Server, FileCode, Code } from "lucide-react";
const ProjectsSection = () => {
  const projects = [{
    title: "Image Enhancement and Early-Stage Ankylosing Spondylitis Detection Web Application",
    description: "This was a final year research project. Developed a deep learning-based diagnostic tool for enhancing MRI images and detecting Ankylosing Spondylitis, a chronic inflammatory spinal disease. The system integrates image preprocessing using CLAHE to improve image clarity and employs a fine-tuned VGG16 convolutional neural network to classify MRI scans. Supporting reliable early-stage detection and aiding radiologists in diagnosis.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "VGG16", "CLAHE", "scikit-learn", "React JS", "TypeScript", "Node.js", "Flask"],
    icons: {
      primary: "Python"
    }
  }, {
    title: "Hotel Review Summarization and Emotion Detection Web Application",
    description: "This was the 2nd year Software Development Group Project. The project involved building a web-based application that summarizes hotel reviews and detects the sentiment expressed in the text. It uses machine learning to classify reviews as positive, negative, or neutral, while also providing statistical insights into the most common emotions detected. Frontend developer, backend team member.",
    technologies: ["Python", "Flask", "React JS", "Node.js", "TextRank"],
    icons: {
      primary: "Python"
    }
  }, {
    title: "Estate Agent Client-side Web Application",
    description: "A client-side web application that enables a user to search properties by different criteria such as price and location. Implemented features like property filtering and detailed property views.",
    technologies: ["HTML", "CSS", "jQuery UI", "JSON", "JavaScript"],
    icons: {
      primary: "Html"
    }
  }, {
    title: "Westminster Skin Consultation",
    description: "A system to manage skin consultation where patients can consult doctors. Implemented secure patient-doctor communication and appointment scheduling.",
    technologies: ["Java"],
    icons: {
      primary: "Java"
    }
  }, {
    title: "E-Commerce Based DJ Equipment Selling Website",
    description: "Developed an e-commerce website for selling DJ equipment, featuring secure transactions, product management, and a user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icons: {
      primary: "Html"
    }
  }];
  return <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow border-primary/10">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  {getProjectIcon(project.icons.primary, "w-6 h-6 text-primary")}
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow py-3">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-2 border-t">
                {project.technologies.map((tech, techIndex) => <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 text-xs rounded">
                    {tech}
                  </span>)}
              </CardFooter>
            </Card>)}
        </div>
      </div>
    </section>;
};

// Helper function to get the appropriate icon based on the primary technology
const getProjectIcon = (iconName: string, className: string) => {
  switch (iconName.toLowerCase()) {
    case 'python':
      return <Code2 className={className} />;
    // Changed from Python to Code2
    case 'react':
      return <FileJson className={className} />;
    // Changed from React to FileJson
    case 'node':
    case 'nodejs':
      return <Server className={className} />;
    case 'html':
      return <FileCode className={className} />;
    case 'javascript':
    case 'java':
      return <Code className={className} />;
    default:
      return <Code className={className} />;
  }
};
export default ProjectsSection;