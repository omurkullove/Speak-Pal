/** @format */

import React from 'react';
import Logo from '../../../Assets/img/Logo.svg';
import Footer from '../../../components/Footer/Footer';

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useApiLoginMutation } from '../../../Api/Auth.api';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Login = () => {
   const validationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
   });

   const [loginUser, { isSuccess, isError }] = useApiLoginMutation();

   const navigate = useNavigate();

   const handleSubmit = async values => {
      await loginUser(values).then(token => {
         localStorage.setItem('tokens', JSON.stringify(token.data) || '[]');
         if (token.data) {
            message.success('You have successfully logined to account!');
            navigate('/routes/profile');
         } else {
            return message.error('Error! Try again!');
         }
      });
   };

   return (
      <div>
         <header className='h-[60px] bg-[#415BD4] px-[100px]'>
            <img src={Logo} alt='logo' />
         </header>
         <section className='px-[100px] flex flex-col items-center mt-[20px]'>
            <h1 className='font-bold text-[35px] leading-[38.73px]'>Sign in</h1>
            <Formik
               initialValues={{ email: '', password: '' }}
               validationSchema={validationSchema}
               onSubmit={values => handleSubmit(values)}
            >
               {({ errors, touched, handleChange, handleBlur }) => (
                  <Form className='w-full flex flex-col items-center'>
                     <div className='w-1/2 flex flex-col items-center gap-y-6 mt-[50px]'>
                        <div className='w-1/2 flex flex-col '>
                           <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name='email'
                              type='email'
                              placeholder='Email'
                              className='w-full rounded-[20px] border-2 border-[#415BD4]  px-[30px] py-[10px]'
                           />
                           {errors.email && touched.email ? (
                              <p className='text-red-500 font-black text-[10px] tracking-[2px] uppercase pl-[10px] pt-[5px]'>
                                 {errors.email}
                              </p>
                           ) : null}
                        </div>
                        <div className='w-1/2 flex flex-col '>
                           <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name='password'
                              placeholder='Password'
                              type='password'
                              className='w-full rounded-[20px] border-2 border-[#415BD4]  px-[30px] py-[10px] '
                           />
                           {errors.password && touched.password ? (
                              <p className='text-red-500 font-black text-[10px] tracking-[2px] uppercase pl-[10px] pt-[5px]'>
                                 {errors.password}
                              </p>
                           ) : null}
                        </div>
                        <button
                           disabled={!errors}
                           type='submit'
                           className='bg-[#415BD4] py-[10px] rounded-[20px] text-white font-bold w-1/2'
                        >
                           Sign in
                        </button>
                     </div>
                  </Form>
               )}
            </Formik>
         </section>
         <footer className='absolute bottom-0 w-full'>
            <Footer />
         </footer>
      </div>
   );
};

export default Login;
