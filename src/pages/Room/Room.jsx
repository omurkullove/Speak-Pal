/** @format */

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';

import Call from '../../Assets/img/Call.svg';
import Microphone from '../../Assets/img/microphone.png';
import Muted_Microphone from '../../Assets/img/mute-microphone.png';
import { useSelector } from 'react-redux';

const Room = () => {
   const { id: roomID } = useParams();
   const rooms = useSelector(state => state.webrtc.roomInfo);

   const {
      clients,
      provideMediaRef,
      toggleAudio,
      toggleVideo,
      isAudioEnabled,
   } = useWebRTC(roomID);

   const navigate = useNavigate();

   return (
      <div className='m-[50px]'>
         <div className='w-full flex justify-between'>
            {clients.map(clientID => {
               return (
                  <div key={clientID} className='w-[40%]'>
                     <h1 className='text-center font-bold text-[20px]'>
                        {clientID}
                        {rooms.author}
                     </h1>
                     <video
                        className='rounded-lg shadow-buttonShadow'
                        ref={instance => {
                           provideMediaRef(clientID, instance);
                        }}
                        width={700}
                        height={500}
                        autoPlay
                        playsInline
                        poster='https://allthings.how/content/images/wordpress/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo.png'
                        muted={clientID === LOCAL_VIDEO}
                     />
                  </div>
               );
            })}
         </div>
         <div className='mt-[50px] flex justify-center'>
            <div className='flex items-center '>
               <div
                  className='rounded-full shadow-lg  m-3 p-[18px] bg-red-500 hover:scale-105 transition-transform cursor-pointer'
                  onClick={() => navigate('/routes/lobby')}
               >
                  <img src={Call} alt='Call svg' />
               </div>
               <div
                  onClick={() => toggleAudio()}
                  className='rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer p-[18px] m-3'
               >
                  {isAudioEnabled ? (
                     <img src={Microphone} alt='microphone' width={18} />
                  ) : (
                     <img
                        src={Muted_Microphone}
                        alt='muted-microphone'
                        width={18}
                     />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Room;
