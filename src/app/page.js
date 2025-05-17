import About from "@/components/about/About";
import ContactForm from "@/components/contact/ContactForm";
import DrawerComponent from "@/components/drawer/DrawerComponent";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Introduction from "@/components/introduction/Introduction";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Services from "@/components/services/Services";
import Sidebar from "@/components/sidebar/Sidebar";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Sidebar (fixed on md and up) */}
      <div className="w-full md:w-1/4 md:fixed md:min-h-screen">
        <Sidebar />
      </div>

      {/* Main content (scrolls and avoids fixed sidebar) */}
      <div className="md:flex-1 py-10 md:ml-[25%] dark:bg-[#161929] md:min-h-screen space-y-9 sm:space-y-14 md:space-y-10 lg:space-y-16">
        <Introduction />
        <About />
        <Experience />
        <Skills />
        <Services />
        <FeaturedProjects />
        <Education />
        <ContactForm />
      </div>
      <div className="fixed top-40 right-0">
        <DrawerComponent />
      </div>
    </div>
  );
}
