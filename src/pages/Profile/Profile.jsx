import React from "react";
import style from "./profile.css";
import feedabck from "../../icons/feedback.png";
import earth from "../../icons/earth.png";
import message from "../../icons/message.png";
import hour from "../../icons/24.png";
import gender from '../../icons/gender.png';
import filter from '../../icons/filter.png'
import calendar from '../../icons/calendar.png';
import location from '../../icons/location.png';
import clock from '../../icons/clock.png';

export const Profile = () => {
  return (
    <div className="Profile">
      <div className="main__section">
        <div id="image__column">
          <div id="img__profile">
            <img
              className="rounded-full"
              src="https://avatarko.ru/img/kartinka/26/devushka_blondinka_kapyushon_25929.jpg"
              alt="img"
            />
            <p>User#947652</p>
            <button>Изменить профиль</button>
            <div id="icons">
              <div id="icon" className="rounded-full">
                <img src={feedabck} alt="icon" />
                <p>Feedback</p>
                <span>0</span>
              </div>
              <div id="icon" className="rounded-full">
                <img src={message} alt="icon" />
                <p>Talks</p>
                <span>0</span>
              </div>
              <div id="icon" className="rounded-full">
                <img src={hour} alt="icon" />
                <p>Hours</p>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <div id="information__column">
          <h2 id="title">Information</h2>
          <div id="inform__col">
            <div id="inform__img">
              <div id="circle__img">
                <img src={earth} alt="" />
              </div>

              <p>Native Language</p>
            </div>

            <h3>Russian</h3>
          </div>
          <div id="inform__col">
            <div id="inform__img">
              <div id="circle__img">
                <img src={filter} alt="" />
              </div>

              <p>English level</p>
            </div>

            <h3>Intermediate(B1)</h3>
          </div>
          <div id="inform__col">
            <div id="inform__img">
              <div id="circle__img">
                <img src={gender} alt="" />
              </div>

              <p>Gender</p>
            </div>

            <h3>Female</h3>
          </div>
          <div id="inform__col">
            <div id="inform__img">
              <div id="circle__img">
                <img src={calendar} alt="" />
              </div>

              <p>Age</p>
            </div>

            <h3>20 years old</h3>
          </div>
          <div id="inform__col">
            <div id="inform__img">
              <div id="circle__img">
                <img src={location} alt="" />
              </div>

              <p>Location</p>
            </div>

            <h3>Russian</h3>
          </div>
          <div id="inform__col">
            <div id="inform__img">
              <div id="circle__img">
                <img src={clock} alt="" />
              </div>

              <p>Local Time</p>
            </div>

            <h3>22:00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
