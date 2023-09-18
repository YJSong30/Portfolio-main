import profileImage from './profilepic.jpg';

const Home = () => {
    return (
      <div className="home">
        <h2 class="section-header">About Me</h2>
        <br></br>
        <div>
          <img
            src={profileImage}
            alt="Young Song"
            style={{ width: "300px", height: "400px" }}
          />
          <br></br>
 
          <div>
            <p style={{ paddingBottom: 15 }}>
              Hi, my name is Young Song and I'm from Los Angeles, California. I
              am a highly motivated student who is committed to developing
              innovative projects and contributing to the professional world of
              software development.
            </p>
            <p>
              I currently attend University of the Pacific where I originally
              majored in pharmacy but decided to switch to computer science
              after being inspired by the rapid pace of technological
              growth, which I want to be a part of in the future.
            </p>
            <br></br>
            <blockquote>
              <i>
                "Any sufficiently advanced technology is indistinguishable from
                magic." - Arthur C. Clark 1962
              </i>{" "}
            </blockquote>
          </div>
        </div>

        <div className="skills">
          <h2 class="section-header">Skills</h2>
          <br></br>
          <div className="skills-content">
            <ol className="list">
              <p>
                <b>Languages: </b> Python, Javascript, Java, C++, C, SQL
              </p>
              <br></br>
              <p>
                <b>Front-end: </b>ReactJS, React Native, HTML, CSS
              </p>
              <br></br>
              <p>
                <b>Back-end: </b>NodeJS, MySQL, MongoDB, Flyspeed
              </p>
            </ol>
          </div>
        </div>
      </div>
    );
}
 
export default Home;