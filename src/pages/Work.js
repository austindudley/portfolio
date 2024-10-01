import { GlobeAltIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <GlobeAltIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Places I've Worked
          </h1>
          <p className="mx-auto leading-relaxed text-base">
          I am grateful to the startup and corporate companies I've worked for, as they have significantly contributed to the development of my skills. Hover over the logos to learn about the tasks and achievements accomplished with each respective company.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <span
                key={project.id}
                className="sm:w-1/2 w-100 p-4">
                <div className="">
                    
                    <div className="px-8 py-10  z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                      <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                          {project.title}
                      </h2>
                      <h1 className="title-font text-sm font-medium text-white mb-3">
                          {project.subtitle}
                      </h1>
                      <p className="leading-relaxed whitespace-pre-line text-justify tracking-tighter">{project.description}</p>
                    </div>
                </div>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}