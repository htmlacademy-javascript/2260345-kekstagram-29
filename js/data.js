import { getRandomInteger, getRandomArrayElement } from './utils.js';

const PICTURESCOUNT = 25;
const COMMENTSCOUNT = 30;

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Доброе утро',
  'После работы',
  'Двадцать тысяч хомяков',
  'Ппросто так',
  'Здравствуй, школа',
  'Где моя тачка, чувак?',
  'Приобрел вчера',
];

const names = [
  'Артём Дзюба',
  'Марго Робби',
  'Николай Валуев',
  'Синь Дзы Пинь',
  'Ким Чен Ын',
  'Барбара Стрейзанд',
  'Чак Норрис',
];

const createComment = () => ({
  id: getRandomInteger(0, 150),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names),
});

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  comments: Array.from({length: getRandomInteger(0, COMMENTSCOUNT)}, createComment()),
});


const createPicture = () => Array.from({ length: PICTURESCOUNT }, (_, pictureIndex) => createPhotoDescription(pictureIndex + 1));

export {createPicture};
