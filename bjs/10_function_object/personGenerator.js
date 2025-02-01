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
        "count": 53,
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
        "id_10": "Андрей",
        "id_11": "Жорж",
        "id_12": "Януш",
        "id_13": "Милич",
        "id_14": "Франц",
        "id_15": "Аникита",
        "id_16": "Мина",
        "id_17": "Савва",
        "id_18": "Сила",
        "id_19": "Фока",
        "id_20": "Василько",
        "id_21": "Михайло",
        "id_22": "Отто",
        "id_23": "Важа",
        "id_24": "Гоча",
        "id_25": "Игорь",
        "id_26": "Цезарь",
        "id_27": "Виль",
        "id_28": "Камиль",
        "id_29": "Аарне",
        "id_30": "Григоре",
        "id_31": "Вилье",
        "id_32": "Вилли",
        "id_33": "Илмари",
        "id_34": "Василий",
        "id_35": "Марий",
        "id_36": "Юлий",
        "id_37": "Никий",
        "id_38": "Люций",
        "id_39": "Стахий",
        "id_40": "Менея",
        "id_41": "Захария",
        "id_42": "Айбу",
        "id_43": "Бадма",
        "id_44": "Бату",
        "id_45": "Вали",
        "id_46": "Дакко",
        "id_47": "Исе",
        "id_48": "Акбай",
        "id_49": "Кий",
        "id_50": "Матвей",
        "id_51": "Бимбии",
        "id_52": "Бобоо",
        "id_53": "Бурбээ"
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
    let firstName = this.randomValue(this.firstNameMaleJson);
    if (
      ["ий"].includes(firstName.substring(firstName.length - 2)) &&
      firstName.substring(0, firstName.length - 2).length > 1
    ) {
      const lastTwoLetter = firstName.substring(
        firstName.length - 4,
        firstName.length - 2
      );
      const lastOneLetter = firstName.substring(
        firstName.length - 3,
        firstName.length - 2
      );
      const beforLastLetter = firstName.substring(
        firstName.length - 4,
        firstName.length - 3
      );

      if (
        (lastTwoLetter != "нт" &&
          [
            "б",
            "в",
            "г",
            "д",
            "ж",
            "з",
            "й",
            "к",
            "л",
            "м",
            "н",
            "п",
            "р",
            "с",
            "т",
            "ф",
            "х",
            "ц",
            "ч",
            "ш",
            "щ",
          ].includes(beforLastLetter)) ||
        ["к", "х", "ц"].includes(lastOneLetter)
      ) {
        patronymic =
          this.gender === this.GENDER_FEMALE
            ? firstName.substring(0, firstName.length - 2) + "иевна"
            : firstName.substring(0, firstName.length - 2) + "иевич";
      } else if (
        lastTwoLetter === "нт" ||
        (![
          "б",
          "в",
          "г",
          "д",
          "ж",
          "з",
          "й",
          "к",
          "л",
          "м",
          "н",
          "п",
          "р",
          "с",
          "т",
          "ф",
          "х",
          "ц",
          "ч",
          "ш",
          "щ",
        ].includes(beforLastLetter) &&
          firstName.substring(0, firstName.length - 2).length > 1)
      ) {
        patronymic =
          this.gender === this.GENDER_FEMALE
            ? firstName.substring(0, firstName.length - 2) + "ьевна"
            : firstName.substring(0, firstName.length - 2) + "ьевич";
      }
    } else if (
      ["ай", "яй", "ей", "эй", "ий", "ый", "ой", "уй", "юй"].includes(
        firstName.substring(firstName.length - 2)
      )
    ) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length - 1) + "евна"
          : firstName.substring(0, firstName.length - 1) + "евич";
    } else if (
      ["аа", "ау", "еу", "ээ", "ии", "уу"].includes(
        firstName.substring(firstName.length - 2)
      )
    ) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length) + "евна"
          : firstName.substring(0, firstName.length) + "евич";
    } else if (
      ["ея", "ия"].includes(firstName.substring(firstName.length - 2))
    ) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length - 1) + "евна"
          : firstName.substring(0, firstName.length - 1) + "евич";
    } else if (
      ["Аникита", "Никита", "Мина", "Савва", "Сила", "Фока"].includes(firstName)
    ) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length - 1) + "ична"
          : firstName.substring(0, firstName.length - 1) + "ич";
    } else if (["е", "ь"].includes(firstName.substring(firstName.length - 1))) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length - 1) + "евна"
          : firstName.substring(0, firstName.length - 1) + "евич";
    } else if (["о"].includes(firstName.substring(firstName.length - 1))) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length - 1) + "овна"
          : firstName.substring(0, firstName.length - 1) + "ович";
    } else if (
      ["а", "я", "е", "э", "и", "ы", "ё", "о", "у", "ю"].includes(
        firstName.substring(firstName.length - 1)
      )
    ) {
      if (
        ["ж", "ш", "ч", "щ", "ц"].includes(
          firstName.substring(firstName.length - 2, firstName.length - 1)
        )
      ) {
        patronymic =
          this.gender === this.GENDER_FEMALE
            ? firstName.substring(0, firstName.length - 1) + "евна"
            : firstName.substring(0, firstName.length - 1) + "евич";
      } else {
        patronymic =
          this.gender === this.GENDER_FEMALE
            ? firstName.substring(0, firstName.length) + "евна"
            : firstName.substring(0, firstName.length) + "евич";
      }
    } else if (
      [
        "б",
        "в",
        "г",
        "д",
        "з",
        "й",
        "к",
        "л",
        "м",
        "н",
        "п",
        "р",
        "с",
        "т",
        "ф",
        "х",
      ].includes(firstName.substring(firstName.length - 1))
    ) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length) + "овна"
          : firstName.substring(0, firstName.length) + "ович";
    } else if (
      ["ж", "ш", "ч", "щ", "ц"].includes(
        firstName.substring(firstName.length - 1)
      )
    ) {
      patronymic =
        this.gender === this.GENDER_FEMALE
          ? firstName.substring(0, firstName.length) + "евна"
          : firstName.substring(0, firstName.length) + "евич";
    }
    return patronymic;
  },

  randomSurname: function () {
    if (this.gender === this.GENDER_MALE) {
      return this.randomValue(this.surnameJson);
    } else if (this.gender === this.GENDER_FEMALE) {
      return this.randomValue(this.surnameJson) + "а";
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
    const thirtyOne = [0, 2, 4, 6, 7, 9, 11];
    const obj = JSON.parse(this.months);
    const month = obj.list[this.randomIntNumber(obj.count - 1, 0)];
    const year = this.randomIntNumber(2024, 1930);
    const monthIndex = obj.list.indexOf(month);
    let daysCount;
    if (monthIndex === 1) {
      daysCount = 28;
    } else if (thirtyOne.indexOf(monthIndex) != -1) {
      daysCount = 31;
    } else {
      daysCount = 30;
    }
    const day = this.randomIntNumber(daysCount, 1);

    return day + " " + month + " " + year + " года рождения";
  },

  setPhoto: function () {
    return this.gender === this.GENDER_FEMALE ? "img/women.jpg" : "img/men.jpg";
  },

  randomGender: function () {
    this.gender =
      this.randomIntNumber(2, 1) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
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
