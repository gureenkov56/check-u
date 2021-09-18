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
            question: "Для чего нужен HTML?",
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
            question: "Как выглядить базовая структура HTML-документа?",
            options: [
              "body > head > document > footer",
              "Document > head > body",
              "Document > html > head> body",
            ],
            rightOption: 2,
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
