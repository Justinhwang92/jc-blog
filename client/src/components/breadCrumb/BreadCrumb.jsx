import "./breadCrumb.css";

export default function BreadCrumb() {
  return (
    <div className="wrapper">
      <div className="content">
        <h1 className="title">Hi! I'm Justin!</h1>
        <h3 className="subtitle">
          Brings ideas to life with code <br /> CODE YOUR DREAM
        </h3>
      </div>
      <div className="about">
        <h2 className="aboutTitle">About Me</h2>
        <p className="aboutDescription">
          I am Software Engineer prepared to apply my technical and project
          management skills throughout the full application life cycle to ensure
          client expectations are met or exceeded. My software engineering
          experience has enhanced my abilities to design, implement, experiment
          and innovate. I am eager to utilize these skills and further
          strengthen my technical skills while contributing to team success.
        </p>
        <div class="aboutInfo">
          <div>
            <span class="aboutInfoTitle">1</span>
            <div class="aboutInfoName">
              Year <br /> SDE Experience
            </div>
          </div>
          <div>
            <span class="aboutInfoTitle">10+</span>
            <div class="aboutInfoName">
              Years <br /> Work Experience
            </div>
          </div>
          <div>
            <span class="aboutInfoTitle">10+</span>
            <div class="aboutInfoName">
              Completed <br /> Upper-level Courses
            </div>
          </div>
          <div>
            <span class="aboutInfoTitle">5+</span>
            <div class="aboutInfoName">
              Completed <br /> Projects
            </div>
          </div>
        </div>
        {/* Skills */}
        <h2 className="aboutTitle">Skills</h2>
        <p className="aboutDescription">
          Main focus on Frontend languages & frameworks <br /> Also, I like
          learning comparative programming languages to build up my functional
          programming skill.
          <br /> I have experience in developing various projects in multiple
          programming languages
        </p>
        <div class="skillsGrid">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}
