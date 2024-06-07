import React from "react";
import "./Team.css";
import { FaTwitter, FaPinterest, FaFacebook, FaDribbble } from "react-icons/fa";

const Myteam = () => {
  const message = `There are many variations of passages of Lorem Ipsum available but the
      majority have suffered alteration in some injected humour.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="text-center col-md-12">
            <h2 className="section-title">The Team Behind Oasis Interior</h2>
          </div>
          <div className="team-col">
            <div className="team-item">
              <img
                src="https://cdn.openart.ai/uploads/image_Lr6rpafb_1686657456395_512.webp"
                className="team-img"
                alt="pic"
              />
              <h3>JOHNATHAN HAWKINS</h3>
              <div className="team-info">
                <p>Head of SEO</p>
              </div>
              <p>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients from international brands to medium
                sized businesses for over five years.
              </p>

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
              </ul>
            </div>
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>ALEXANDRA SMITHS</h3>
              <div className="team-info">
                <p>SEO Specialist</p>
              </div>
              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency.
              </p>

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
              </ul>
            </div>
            <div className="team-item">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"

                className="team-img"
                alt="pic"
                style={{ width: '500px', height: '145px' }}
              />
              <h3>ELISA JOHANSON</h3>
              <div className="team-info">
                <p>Marketing Manager</p>
              </div>
              <p>
                Elisa first fell in love with digital marketing at the
                university. He loves to learn, and looks forward to being part
                of this new exciting industry for many years.
              </p>

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myteam;
