const AboutMe = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="projects">
      <h2>About Me</h2>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default AboutMe;
