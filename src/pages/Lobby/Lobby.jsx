/** @format */

import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ACTIONS from '../../socket/action';
import Call from '../../Assets/img/Call.svg';
import { setGetRoomInfo } from '../../features/webRTCslice';
import socket from '../../socket/socket';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
   const [rooms, updateRooms] = useState([]);
   const [newRoomName, setNewRoomName] = useState('');
   const [author, setAuthor] = useState('');
   const [gender, setGender] = useState('');
   const roomss = useSelector(state => state.webrtc.roomInfo);

   const navigate = useNavigate();

   useEffect(() => {
      socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
         updateRooms(rooms);
      });
   }, []);

   //Modal
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
      setIsModalOpen(true);
   };

   const dispatch = useDispatch();

   const handleOk = e => {
      const roomInfo = {
         author,
         gender,
         newRoomName,
      };

      dispatch(setGetRoomInfo(roomInfo));

      setIsModalOpen(false);
      e.preventDefault();
      navigate(`/routes/room/${roomInfo.newRoomName}`);
      setNewRoomName('');
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };

   return (
      <div className='flex flex-col items-center mb-[190px] '>
         <div className='flex flex-col text-center w-1/2 '>
            <h1 className='text-[40px] font-semibold leadding-[48.41px]'>
               Online partners: {rooms.length}
            </h1>
            <p className='font-semibold text-[36px] leadding-[43.57px]'>
               Invite a partner or start an instant talk
            </p>
         </div>
         <div className='w-1/2 flex flex-col items-center mt-[55px] mb-[55px]'>
            {rooms.length ? (
               rooms.map(roomID => (
                  <div
                     className='flex  w-full items-center justify-between px-[30px] mt-[50px] shadow-lg py-[20px] rounded-xl'
                     key={roomID}
                  >
                     <div className='flex items-center gap-x-[44px]'>
                        <div className='w-[20%]'>
                           <img
                              src='https://img.freepik.com/free-icon/user_318-563642.jpg'
                              alt='user img'
                           />
                        </div>
                        <div>
                           <div className='bg-[#66E5BA] text-[8px] text-black  w-[80px] py-[8px] font-bold text-center uppercase rounded-[30px]'>
                              Ready to talk
                           </div>
                           <p className='font-black text-[20px] leading-[24.2px]'>
                              Aidin
                           </p>
                           <p className='font-bold'>
                              B2 &#x2022; Male &#x2022; 17 years
                           </p>
                           <p className='font-bold'>
                              Kyrgyzstan &#x2022; 83 talks
                           </p>
                        </div>
                     </div>

                     <div
                        className='p-[18px] flex rounded-full bg-[#415BD4] cursor-pointer hover:scale-105 hover:shadow-buttonShadow transition-all'
                        onClick={() => {
                           navigate(`/routes/room/${roomID}`);
                        }}
                     >
                        <img src={Call} alt='talk logo' />
                     </div>
                  </div>
               ))
            ) : (
               <h1>At the moment there are no rooms! Be the first!</h1>
            )}
         </div>
         <div className='flex justify-center w-1/2'>
            <button
               className='bg-[#415BD4] px-[48px] py-[23px] text-[28px] rounded-[20px] text-white'
               onClick={showModal}
            >
               Create Room!
            </button>
            <Modal
               open={isModalOpen}
               title='Create a room!'
               footer={[
                  <Button
                     key='back'
                     onClick={handleCancel}
                     className='text-white bg-red-500 '
                     type='text'
                     size='large'
                  >
                     Cancel
                  </Button>,
                  <Button
                     type='text'
                     size='large'
                     key='submit'
                     className='text-white bg-green-500'
                     onClick={handleOk}
                  >
                     Create
                  </Button>,
               ]}
               onCancel={handleCancel}
            >
               <input
                  maxLength={9}
                  type='text'
                  placeholder='Add room name'
                  value={newRoomName}
                  className='w-full py-2 px-5 rounded-md border-2 text-lg mt-5 mb-5'
                  onChange={e => setNewRoomName(e.target.value)}
               />
               <input
                  maxLength={9}
                  type='text'
                  placeholder='Add author name'
                  value={author}
                  className='w-full py-2 px-5 rounded-md border-2 text-lg mt-5 mb-5'
                  onChange={e => setAuthor(e.target.value)}
               />{' '}
               <input
                  maxLength={9}
                  type='text'
                  placeholder='Add  your gender'
                  value={gender}
                  className='w-full py-2 px-5 rounded-md border-2 text-lg mt-5 mb-5'
                  onChange={e => setGender(e.target.value)}
               />
            </Modal>
         </div>
      </div>
   );
};

export default Lobby;
