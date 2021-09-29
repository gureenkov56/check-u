import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isShowAnswer: false,
      category: "",
      finishOfTest: false,
      questionsList: {
        html: [
          {
            question: "Что такое HTML?",
            options: [
              "HTML — язык разметки документов для просмотра веб-страниц в браузере. Элементы HTML являются строительными блоками HTML страницы. Теги позволяют создавать блоки, заголовки, списки, формы и т.д.",
              "HTML - язык, позволяющий создать элементы на странице, задать их расположение, цвет, анимацию и взимодействие.",
              "HTML - это набор тегов и правил, которые необходимы для браузера и никак не влияют на отображение страницы.",
            ],
            rightOption: 0,
          },
          {
            question: "Как выглядить базовая структура HTML-документа?",
            options: [
              `
              <!DOCTYPE html>
              <html>
                <body>
                  <head>
                    <meta charset=UTF-8>
                    <title>Hello World!</title>
                  </head>
                </body>
              </html>
              `,
              `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset=UTF-8>
                  <title>Hello World!</title>
                </head>
                <body>
                </body>
              </html>
              `,
              `
              <html>
                <header>
                  <meta charset=UTF-8>
                  <title>Hello World!</title>
                </header>
                <body>
                </body>
              </html>
              `,
            ],
            rightOption: 1,
          },
          {
            question: "Чтобы добавлено в HTML5?",
            options: [
              `
              HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.
              Элементы HTML являются строительными блоками HTML страниц. С помощью HTML разные конструкции, изображения и другие объекты такие как интеракивная веб-формы могут быть встроены в отображаемую страницу. HTML предоставляет средства для создания заголовков, абзацев, списков, ссылок, цитат и других элементов.
              `,
              "sadafsfa",
              "sfaasf",
            ],
            rightOption: 0,
          },
          {
            question:
              "Как создать ссылку на странице? Как настроить открытие ссылки в новой вкладке?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question: "Какие теги влияют на семантику страницы?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question:
              "Чем отличаются элементы типа inline от block-level (блочные)?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question: "Зачем нужны meta-теги в HTML?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question: "Как создаются списки в HTML?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question: "Зачем нужет тег <iframe>?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question: "Что такое SVG элементы?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question: "Для чего нужен тег <canvas>?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
          {
            question: "Какие режимы совместимости есть у HTML?",
            options: ["1вариант", "2вариант", "3вариант"],
            rightOption: 0,
          },
        ],
        css: [
          {
            question: "Вопрос 1",
            answer: "Ответ 1",
            isShowAnswerInTheEnd: false,
          },
          {
            question: "Вопрос 2",
            answer: "Ответ 2",
            isShowAnswerInTheEnd: false,
          },
          {
            question: "Вопрос 3",
            answer: "Ответ 3",
            isShowAnswerInTheEnd: false,
          },
        ],
        javascript: [
          {
            question: "Вопрос 1",
            answer: "Ответ 1",
            isShowAnswerInTheEnd: false,
          },
          {
            question: "Вопрос 2",
            answer: "Ответ 2",
            isShowAnswerInTheEnd: false,
          },
          {
            question: "Вопрос 3",
            answer: "Ответ 3",
            isShowAnswerInTheEnd: false,
          },
        ],
        php: [
          {
            question: "Вопрос 1",
            answer: "Ответ 1",
            isShowAnswerInTheEnd: false,
          },
          {
            question: "Вопрос 2",
            answer: "Ответ 2",
            isShowAnswerInTheEnd: false,
          },
          {
            question: "Вопрос 3",
            answer: "Ответ 3",
            isShowAnswerInTheEnd: false,
          },
        ],
      },
      usersResults: {
        wrong: [],
        right: [],
      },
    };
  },
  getters: {
    getCategory: state => {
      return state.category;
    },
    getQuestion: state => (category, id) => {
      return state.questionsList[category][id];
    },
    getTotalCountOfQuestion: state => category => {
      return state.questionsList[category].length;
    },
    getUserResult: state => {
      return state.usersResults;
    },
    getRightAnswer: state => (category, id) => {
      return state.questionsList[category][id].options[state.questionsList[category][id].rightOption];
    }
  },
  mutations: {
    setCategory(state, level) {
      state.category = level;
    },
    addRightResult(state, obj) {
      state.usersResults.right.push(obj);
    },
    addWrongResult(state, obj) {
      state.usersResults.wrong.push(obj);
    },
    finishOfTestToggle(state){
      state.finishOfTest = !state.finishOfTest;
    },
    setDefaultData(state){
      state.category = "";
      state.usersResults.wrong = [];
      state.usersResults.right = [];
      state.finishOfTest = false;
    }
  },
});

export default store;
