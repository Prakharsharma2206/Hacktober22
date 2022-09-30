import "./App.css";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Basics of &nbsp;{" "}
        <strong>
          <i>Github</i>
        </strong>
        &nbsp; and Introduction to &nbsp;{" "}
        <strong>
          <i>Hactoberfest</i>
        </strong>
      </header>

      <div className="App-body">
        {/* 
        <div className="Card">
          <div className="Left-Section">
            <img
              src="./Images/Prakhar1.JPG"
              alt="Your Name"
              className="profile-image"
            />
          </div>
          <div className="Right-Section">
            <div>
              <strong>Name : </strong> Your Name
            </div>
            <div>
              <strong>College/Organization : </strong> Name of your
              college/organization
            </div>
            <div>
              <strong>Year : </strong> Your Year
            </div>
            <div>
              <strong>Branch : </strong> Your Branch Here
            </div>
            <div className="Social">
              <strong>Social Links</strong>
              <div className="icons">
                <a href="Your Twitter Link Here">
                  <AiOutlineTwitter size={30} />
                </a>

                <a href="Your LinkedIn Link Here">
                  <AiFillLinkedin size={30} />
                </a>
                <a href="Your Github Link Here">
                  <AiOutlineGithub size={30} />
                </a>
                <a
                  href="Your Website Link Here"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CgWebsite size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
            */}

        <div className="Card">
          <div className="Left-Section">
            <img
              src="./Images/Prakhar1.JPG"
              alt="Prakhar"
              className="profile-image"
            />
          </div>
          <div className="Right-Section">
            <div>
              <strong>Name : </strong> Prakhar Sharma
            </div>
            <div>
              <strong>College/Organization : </strong> Maharaja Agrasen
              Institute of Technology
            </div>
            <div>
              <strong>Year : </strong> 4th Year
            </div>
            <div>
              <strong>Branch : </strong> Computer Science
            </div>
            <div className="Social">
              <strong>Social Links</strong>
              <div className="icons">
                <a href="https://twitter.com/prakhar_2206">
                  <AiOutlineTwitter size={30} />
                </a>

                <a href="https://www.linkedin.com/in/prakhar-sharma-2206">
                  <AiFillLinkedin size={30} />
                </a>
                <a href="https://github.com/Prakharsharma2206">
                  <AiOutlineGithub size={30} />
                </a>
                <a
                  href="https://prakharsharma.software"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CgWebsite size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Change the image name and add your image in the Images folder in Public folder */}
        {/* Copy Line 25 to 70 and paste it below the last card and change the details accordingly. */}
        
      </div>
    </div>
  );
}

export default App;
