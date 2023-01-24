import { useState } from "react";

import { questions } from "../../data/questions.data";
import QuestionDropdown from "../UI/dropdown/QuestionDropdown";

export default function HomeQuestions() {
  const [opened, setOpened] = useState(questions.map(_ => false));

  const changeOpenHandler = (index: number) => {
    const newOpened = opened.concat();
    newOpened[index] = !newOpened[index];
    setOpened(newOpened);
  };

  return (
    <div className="home-questions">
      <h2>Frequently Asked Questions</h2>
      <div className="home-questions__content">
        <div className="content__left">
          <p>Do you have any kind of questions?<br />We are here to help.</p>
          <h1>?</h1>
        </div>
        <div className="content__right">
          <ul className="questions">
            {
              questions.map((question, i) => (
                <QuestionDropdown
                  title={question.title}
                  text={question.text}
                  isOpen={opened[i]}
                  onClick={() => changeOpenHandler(i)}
                />))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}