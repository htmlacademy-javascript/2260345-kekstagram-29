const OBJECTSNUMBER = 25;

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => ({
  id: getRandomInteger(0, 150),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names),
});

const createPhotoDescription = () => ({
  id: getRandomInteger(1, OBJECTSNUMBER),
  url: `photos/${getRandomInteger(1, OBJECTSNUMBER)}.jpg`,
  description: getRandomArrayElement(descriptions),
  comment: createComments(),
});


const similarDescriptions = Array.from({ length: OBJECTSNUMBER }, createPhotoDescription);

// console.log(similarDescriptions);
