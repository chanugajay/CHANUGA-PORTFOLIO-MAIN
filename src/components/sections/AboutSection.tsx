
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed mb-6">
            Enthusiastic and dedicated final-year Computer Science student with a strong academic 
            background and professional experience in software development. Skilled in web development, 
            data analysis, and machine learning.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I'm passionate about developing innovative software solutions and have experience in building 
            responsive web applications, analyzing complex datasets, and implementing machine learning models. 
            My goal is to continue growing as a professional developer while delivering high-quality solutions 
            that address real-world problems.
          </p>
          <p className="text-lg leading-relaxed">
            I pride myself on my adaptability, quick learning capabilities, and collaborative approach 
            to project development. I'm committed to continuous learning and staying updated with the 
            latest technologies and industry trends while striving to grow as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
