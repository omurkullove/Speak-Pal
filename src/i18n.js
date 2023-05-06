/** @format */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
   en: {
      translation: {
         // Preview page translations
         preview_title: 'Overcome your fear of speaking in English',
         preview_paragraph:
            'Practice English conversation with your friends or randompartners who match your language level',
         preview_button_start: 'Let’s get started',
         preview_sign_in: 'Sign in',

         // Navbar items translations
         navbar_item_lobby: 'Lobby',
         navbar_item_ranking: 'Ranking',
         navbar_item_contacts: 'Contacts',
         navbar_item_profile: 'Profile',
         navbar_item_settings: 'Settings',
      },
   },
   ru: {
      translation: {
         // Preview page translations
         preview_title: 'Преодолейте свой страх говорить по-английски',
         preview_paragraph:
            'Практикуйтесь в разговоре по-английски со своими друзьями или случайными партнерами, которые соответствуют вашему уровню владения языком',
         preview_button_start: 'Давайте начнем',
         preview_sign_in: 'Войти',

         // Navbar items translations
         navbar_item_lobby: 'Лобби',
         navbar_item_ranking: 'Рейтинг',
         navbar_item_contacts: 'Контакты',
         navbar_item_profile: 'Профиль',
         navbar_item_settings: 'Настройки',
      },
   },
};

i18n.use(initReactI18next).init({
   resources,
   lng: 'en',
   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
