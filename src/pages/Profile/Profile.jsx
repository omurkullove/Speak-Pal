/** @format */

import './profile.css';

import React, { useEffect, useState } from 'react';
import calendar from '../../icons/calendar.png';
import clock from '../../icons/clock.png';
import earth from '../../icons/earth.png';
import feedabck from '../../icons/feedback.png';
import filter from '../../icons/filter.png';
import gender from '../../icons/gender.png';
import hour from '../../icons/24.png';
import location from '../../icons/location.png';
import message from '../../icons/message.png';
import { useGetAccountInfoQuery } from '../../Api/Auth.api';
import { useDispatch } from 'react-redux';
import { setSaveAccountInfo } from '../../features/AccountSlice';

export const Profile = () => {
   const { data: AccountInfo, isError, isSuccess } = useGetAccountInfoQuery();
   const dispatch = useDispatch();
   const [EnglishLevel, setEnglishLevel] = useState('');
   const [Gender, setGender] = useState('');
   const [localTime, setLocalTime] = useState('');

   const [curentCountry, setCurrntCountry] = useState('');

   const LevelSwitch = () => {
      switch (AccountInfo?.eng_level) {
         case 1:
            setEnglishLevel('A1');
            break;
         case 2:
            setEnglishLevel('A2');
            break;
         case 3:
            setEnglishLevel('B1');
            break;
         case 4:
            setEnglishLevel('B2');
            break;
         case 5:
            setEnglishLevel('C1');
            break;
         case 6:
            setEnglishLevel('C2');
            break;
         default:
            break;
      }
   };

   const GenderSwitch = () => {
      switch (AccountInfo?.gender) {
         case 1:
            setGender('Male');
            break;
         case 2:
            setGender('Female');
            break;
         case 3:
            setGender('Other');
            break;

         default:
            break;
      }
   };

   const GetLocaltime = () => {
      const intervalId = setInterval(() => {
         setLocalTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(intervalId);
   };

   const GetCurrentLocation = () => {
      navigator?.geolocation?.getCurrentPosition(position => {
         const { latitude, longitude } = position.coords;
         const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
         fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
               setCurrntCountry(data.countryName);
            })
            .catch(err => {
               setCurrntCountry('undefind...');
               console.log(err);
            });
      });
   };

   useEffect(() => {
      GetLocaltime();
   }, [localTime]);

   useEffect(() => {
      if (isSuccess) {
         dispatch(setSaveAccountInfo(AccountInfo));
         LevelSwitch();
         GenderSwitch();
         GetCurrentLocation();
         console.log(AccountInfo);
      }
   }, [AccountInfo, isError, isSuccess]);

   return (
      <div className='Profile'>
         <div className='main__section'>
            <div id='image__column'>
               <div id='img__profile'>
                  <img
                     className='rounded-full'
                     src='https://avatarko.ru/img/kartinka/26/devushka_blondinka_kapyushon_25929.jpg'
                     alt='img'
                  />
                  <p>{AccountInfo?.username}</p>
                  <button>Изменить профиль</button>
                  <div id='icons'>
                     <div id='icon' className='rounded-full'>
                        <img src={feedabck} alt='icon' />
                        <p>Feedback</p>
                        <span>0</span>
                     </div>
                     <div id='icon' className='rounded-full'>
                        <img src={message} alt='icon' />
                        <p>Talks</p>
                        <span>0</span>
                     </div>
                     <div id='icon' className='rounded-full'>
                        <img src={hour} alt='icon' />
                        <p>Hours</p>
                        <span>0</span>
                     </div>
                  </div>
               </div>
            </div>
            <div id='information__column'>
               <h2 id='title'>Information</h2>
               <div id='inform__col'>
                  <div id='inform__img'>
                     <div id='circle__img'>
                        <img src={earth} alt='' />
                     </div>

                     <p>Native Language</p>
                  </div>

                  <h3>{AccountInfo?.mlang}</h3>
               </div>
               <div id='inform__col'>
                  <div id='inform__img'>
                     <div id='circle__img'>
                        <img src={filter} alt='' />
                     </div>

                     <p>English level</p>
                  </div>

                  <h3>{EnglishLevel}</h3>
               </div>
               <div id='inform__col'>
                  <div id='inform__img'>
                     <div id='circle__img'>
                        <img src={gender} alt='' />
                     </div>

                     <p>Gender</p>
                  </div>

                  <h3>{Gender}</h3>
               </div>

               <div id='inform__col'>
                  <div id='inform__img'>
                     <div id='circle__img'>
                        <img src={location} alt='' />
                     </div>

                     <p>Location</p>
                  </div>

                  <h3>{curentCountry}</h3>
               </div>
               <div id='inform__col'>
                  <div id='inform__img'>
                     <div id='circle__img'>
                        <img src={clock} alt='' />
                     </div>

                     <p>Local Time</p>
                  </div>

                  <h3>{localTime}</h3>
               </div>
            </div>
         </div>
      </div>
   );
};
