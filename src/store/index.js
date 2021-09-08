import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isShowAnswer: false,
      category: "",
      questionsList: {
        html: [
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
          {
            question: "Вопрос 4",
            answer: "Ответ 4",
            isShowAnswerInTheEnd: false,
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
  },
});

export default store;