import React, { useEffect, useRef } from 'react';
import style from '../styles/Portofolio.module.css';
import Image from 'next/image';
import Typed from 'typed.js';
import mySkills from '../public/json/skills.json';

const Index = () => {
  const animatedEl = useRef<HTMLSpanElement>(null);

  const { skills } = mySkills;

  useEffect(() => {
    const options = {
      strings: ['Fazrin Mutaqin ^1000 <br />Frontend Developer'],
      typeSpeed: 80,
      backSpeed: 50,
      onComplete: (self: any) => {
        self.cursor.remove();
      },
    };
    const currentElement = animatedEl.current as HTMLSpanElement;
    const typed = new Typed(currentElement, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={style.contentContainer}>
      <div className={style.portoProfilePict}>
        <Image src={require('../public/img/profile-pict-2.jpg')} />
      </div>
      <div className={style.introduction}>
        Hi, I'm <span className={style.animatedText} ref={animatedEl}></span>
      </div>
      <div className={style.aboutMev2}>
        Experienced Frontend Developer in building desktop & mobile web
        applications.
      </div>
      <div className={style.mySkills}>
        {mySkills.socialMedia.map((skill, skillIdx) => (
          <a href={skill.link} key={skillIdx} target="_blank">
            <Image src={skill.src} alt={skill.title} width={40} height={40} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;
