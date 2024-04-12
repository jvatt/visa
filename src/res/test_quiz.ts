import { Quiz } from "../types";

const quiz: Quiz = {
  title: "Test quiz",
  questions: [
    {
      question: "Foo",
      answers: [
        {
          answer: "bar",
          isCorrect: true,
          points: 1,
        },
      ],
    },

    {
      question: "Multiple answers",
      answers: [
        {
          answer: "answer 1",
          isCorrect: true,
          points: 1,
        },
        {
          answer: "answer 2",
          isCorrect: true,
          points: 1,
        },
        {
          answer: "answer 3",
          isCorrect: true,
          points: 1,
        },
        {
          answer: "answer 4",
          isCorrect: true,
          points: 1,
        },
      ],
    },

    {
      question: "Multiple choice",
      multipleChoice: true,
      answers: [
        {
          answer: "choice 1",
          isCorrect: false,
          points: 0,
        },
        {
          answer: "choice 2",
          isCorrect: true,
          points: 1,
        },
        {
          answer: "choice 3",
          isCorrect: true,
          points: 1,
        },
        {
          answer: "choice 4",
          isCorrect: false,
          points: 0,
        },
      ],
    },

    {
      question: "Video test",
      media: {
        videos: [
          {
            url: "https://freetestdata.com/wp-content/uploads/2022/02/Free_Test_Data_1MB_MP4.mp4",
          },
        ],
      },
      answers: [
        {
          answer: "this is a video",
          isCorrect: true,
          points: 1,
        },
      ],
    },

    {
      question: "Image test",
      media: {
        images: [
          {
            url: "http://ltr.kapsi.fi/johnny2.jpg",
          },
        ],
      },
      answers: [
        {
          answer: "this is an image",
          isCorrect: true,
          points: 1,
          imageUrl: "http://ltr.kapsi.fi/johnny.jpg",
        },
      ],
    },
  ],
};

export default quiz;
