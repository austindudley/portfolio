import React from "react";
import { Link } from "react-router-dom";
import logo from '../hero.svg';
function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, Iam Austin Dudley
                        <br className="lg:inline-block md: text-base"/>
                        <span className="text-2xl text-lightblue">I love problem-solving and developing applications.</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        A software developer with above 4  years of experience in the information technology field, trained in web development, cloud engineering and data analysis. Recognized for the passion for technology, problem-solving and learning new concepts and technologies. Seeking to bring expertise and enthusiasm to a new opportunity.
                    </p>
                    <div className="flex justify-center">
                        <Link
                        to="contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                        </Link>
                        <Link
                        to="work"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Past Work
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="hero"
                        src={logo}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;