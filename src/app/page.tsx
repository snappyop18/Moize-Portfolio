import { Suspense } from "react";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Hero from "@/components/hero";
import GlassmorphismCard from "@/components/glassmorphism-card";
import ProjectGrid from "@/components/project-grid";
import {
  getVideoCategoriesWithCountIncludingAll,
  getAllVideoProjectsFlattened
} from "@/lib/helper";

export default function HomePage() {
  // Fetch data on the server
  const categories = getVideoCategoriesWithCountIncludingAll();
  const allProjects = getAllVideoProjectsFlattened(); // We need all projects initially for the grid to filter client-side

 
    return (
  // Added a background gradient and flexbox centering
  <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-4">
    <MouseMoveEffect />

    {/* The main Carrd-style wrapper */}
    <div className="w-full max-w-2xl relative z-10 w-full mt-10">
      <GlassmorphismCard>
        {/* Place your profile image, bio, and social links inside this card. */}
        {/* You may need to adjust <Hero /> so it fits nicely inside this smaller container. */}
        <Hero />
      </GlassmorphismCard>
    </div>

    {/* Projects Section - kept below the card so users can scroll to see your work */}
    <section id="projects" className="py-20 px-4 sm:px-6 w-full z-10">
      <div className="max-w-7xl mx-auto">
         {/* Pass your fetched data to the ProjectGrid */}
         <ProjectGrid categories={categories} initialProjects={allProjects} />
      </div>
    </section>
  </div>
);
}
