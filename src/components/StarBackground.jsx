/*
  StarBackground Component

  Creates animated background with:
  - stars → subtle glowing particles
  - meteors → shooting star animation

  Used in hero section to enhance visual appeal
*/

import { useEffect, useState } from "react";

// Star properties: id, size, x, y, opacity, animationDuration
// Meteor properties: id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  /*
    stars   → array of star objects
    meteors → array of meteor objects
  */
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  /*
    Runs once when component mounts
    - Generates initial stars and meteors
    - Adds resize listener for responsiveness
  */
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars(); //Regenerate stars when screen size changes
    };

    window.addEventListener("resize", handleResize);
    /*
      Cleanup function
      Removes event listener to prevent memory leaks
    */
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /*
    Generates stars based on screen size
    More screen area → more stars
  */
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // unique key for React
        size: Math.random() * 3 + 1, // size between 1px–4px
        x: Math.random() * 100, // horizontal position (%)
        y: Math.random() * 100, // vertical position (%)
        opacity: Math.random() * 0.5 + 0.5, // brightness
        animationDuration: Math.random() * 4 + 2, // animation speed
      });
    }
    setStars(newStars);
  };


  /*
    Generates shooting meteors
    Fixed small number for performance + visual clarity
  */
  const generateMeteors = () => {
    const numberOfMeteors = 4; //4 are enough
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, 
        size: Math.random() * 2 + 1, 
        x: Math.random() * 100, 
        y: Math.random() * 20, // upper area only
        delay: Math.random() * 15, // staggered animation
        animationDuration: Math.random() * 3 + 3, 
      });
    }
    setMeteors(newMeteors);
  };
  return (
    /*
      Background container
      fixed → stays behind all content
      pointer-events-none → does not block clicks
    */
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Render stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Render meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size*50 + "px",
            height: meteor.size * 1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
