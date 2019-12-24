import React from "react";

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <div className="container-header">
          Martial Arts Classes In Kamareddy
        </div>
        <div className="intro-container">
          <div>
            <img
              src="https://svgsilh.com/svg/25770-795548.svg"
              className="logo"
              width="400"
              height="150"
              alt="Flexbox.ninja"
            />
          </div>
          <div>
            <article>
              <h3>
                Welcome to Kamareddy Ninjutsu, where you can learn authentic
                ninja and samurai martial arts! Why join Kamareddy Ninjutsu?
              </h3>
              <p>
                When you become a student, step-by step you'll be guided all the
                way from white belt to advanced black belt level. You'll learn
                authentic samurai and ninja martial arts via modern teaching
                methods, putting you on the fast track to success. From the
                first lesson you'll experience the many benefits of martial arts
                training, including:
              </p>
              <ul>
                <li>- Self defence</li>
                <li>- Fitness</li>
                <li>- Confidence</li>
                <li>- Better grades</li>
                <li>- Weight loss</li>
                <li>- Fun</li>
                <li>- Discipline</li>
                <li>- Respect</li>
                <li>- Leadership</li>
                <li>- Improved Focus</li>
                <li>- Personal Development</li>
                <li>- Freedom from fear</li>
              </ul>
              <h3>Ready to Get Started?</h3>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
