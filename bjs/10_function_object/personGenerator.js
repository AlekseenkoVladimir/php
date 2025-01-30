const personGenerator = {
  surnameJson: `{  
    "count": 15,
    "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
  firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
  firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анна",
            "id_2": "Екатерина",
            "id_3": "Мария",
            "id_4": "Дарья",
            "id_5": "Ольга",
            "id_6": "Наталья",
            "id_7": "Анастасия",
            "id_8": "Елена",
            "id_9": "Виктория",
            "id_10": "Татьяна"
            }
            }`,

  patronymicJson: `{
          "count": 10,
          "list": {
            "id_1": "Александров",
            "id_2": "Дмитриев",
            "id_3": "Иванов",
            "id_4": "Сергеев",
            "id_5": "Николаев",
            "id_6": "Васильев",
            "id_7": "Викторов",
            "id_8": "Андреев",
            "id_9": "Михайлов",
            "id_10": "Петров"
            }
            }`,

  womenProfessions: `{
          "count": 10,
          "list": {
            "id_1": "Учительница",
            "id_2": "Медсестра",
            "id_3": "Секретарь",
            "id_4": "Парикмахер",
            "id_5": "Воспитательница",
            "id_6": "Косметолог",
            "id_7": "Швея",
            "id_8": "Стюардесса",
            "id_9": "Бухгалтер",
            "id_10": "Дизайнер"
            }
            }`,

  menProfessions: `{
          "count": 10,
          "list": {
            "id_1": "Инженер",
            "id_2": "Программист",
            "id_3": "Водитель",
            "id_4": "Строитель",
            "id_5": "Электрик",
            "id_6": "Механик",
            "id_7": "Пилот",
            "id_8": "Архитектор",
            "id_9": "Слесарь",
            "id_10": "Хирург"
            }
            }`,

  months: `{
          "count": 12,
          "list": [
            "января",
            "февраля",
            "марта",
            "апреля",
            "мая",
            "июня",
            "июля",
            "августа",
            "сентября",
            "октября",
            "ноября",
            "декабря"
            ]
            }`,


  GENDER_MALE: "Мужчина",
  GENDER_FEMALE: "Женщина",
  gender: "",

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },

  randomFirstName: function () {
    if (this.gender === this.GENDER_MALE) {
      return this.randomValue(this.firstNameMaleJson);
    } else if (this.gender === this.GENDER_FEMALE) {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  randomPatronymic: function () {
    if (this.gender === this.GENDER_MALE) {
      return this.randomValue(this.patronymicJson) + 'ич';
    } else if (this.gender === this.GENDER_FEMALE) {
      return this.randomValue(this.patronymicJson) + 'на';
    }
  },

  randomSurname: function () {
    if (this.gender === this.GENDER_MALE) {
      return this.randomValue(this.surnameJson);
    } else if (this.gender === this.GENDER_FEMALE) {
      return this.randomValue(this.surnameJson) + 'а';
    }
  },

  randomProfession: function () {
    if (this.gender === this.GENDER_MALE) {
      return this.randomValue(this.menProfessions);
    } else if (this.gender === this.GENDER_FEMALE) {
      return this.randomValue(this.womenProfessions);
    }
  },

  randomBirthDate: function () {
    const thirtyOne = [0, 2, 4, 6, 7, 9, 11]
    const obj = JSON.parse(this.months)
    const month = obj.list[this.randomIntNumber(obj.count - 1, 0)];
    const year = this.randomIntNumber(2024, 1930);
    const monthIndex = obj.list.indexOf(month);
    let daysCount;
    if (monthIndex === 1) {
      daysCount = 28;
    }else if (thirtyOne.indexOf(monthIndex) != -1) {
      daysCount = 31;
    } else {
      daysCount = 30;
    };
    const day = this.randomIntNumber(daysCount, 1);

    return day + ' ' + month + ' ' + year + ' года рождения'; 
  },

  setPhoto: function () {
    return this.gender === this.GENDER_FEMALE ? 'img/women.jpg' : 'img/men.jpg';
  },

  randomGender: function () {
    this.gender = this.randomIntNumber(2, 1) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    return this.gender;
  },

  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.photo = this.setPhoto();
    this.person.firstName = this.randomFirstName();
    this.person.patronymic = this.randomPatronymic();
    this.person.surname = this.randomSurname();
    this.person.birthYear = this.randomBirthDate();
    this.person.profession = this.randomProfession();

    return this.person;
  },
};
