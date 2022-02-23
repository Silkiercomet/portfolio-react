import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import "./skills.scss"


const Skills = () => {
  const [skills, setSkills] = useState([])
  // const [experience, setExperience] = useState([])
  // useEffect(() => {
  //   // const query = '*[_type == "experiences"]';
  //   // client.fetch(query).then((data) => {
  //   //   setExperience(data);
  //   // });
  //   }
  // }, [])
  
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text" style={{marginTop:25}}>Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            key={index}>
              <div className="app__flex" style={{backgroundColor:skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills