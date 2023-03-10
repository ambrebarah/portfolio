import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faNodeJs, faApple } from '@fortawesome/free-brands-svg-icons';
import { faLaravel, faSymfony } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section className="bg-primary px-5 text-white py-32" id="skills">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] border-indigo-600 pb-2">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <FontAwesomeIcon icon={faHtml5} size="4x" className="mb-3" />
            <p className="font-bold">HTML5</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faCss3Alt} size="4x" className="mb-3" />
            <p className="font-bold">CSS3</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faJs} size="4x" className="mb-3" />
            <p className="font-bold">JavaScript</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faReact} size="4x" className="mb-3" />
            <p className="font-bold">React</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faPhp} size="4x" className="mb-3" />
            <p className="font-bold">PHP</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faLaravel} size="4x" className="mb-3" />
            <p className="font-bold">Laravel</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faSymfony} size="4x" className="mb-3" />
            <p className="font-bold">Symfony</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faNodeJs} size="4x" className="mb-3" />
            <p className="font-bold">Node.js</p>
          </div>
          {/* <div className="text-center">
            <FontAwesomeIcon icon={faDatabase} size="4x" className="mb-3" />
            <p className="font-bold">MongoDB</p>
          </div> */}
          {/* <div className="text-center">
            <FontAwesomeIcon icon={faDatabase} size="4x" className="mb-3" />
            <p className="font-bold">MySQL</p>
          </div> */}
          <div className="text-center">
            <FontAwesomeIcon icon={faServer} size="4x" className="mb-3" />
            <p className="font-bold">Express</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faApple} size="4x" className="mb-3" />
            <p className="font-bold">macOS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;