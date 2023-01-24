import Step from "../UI/Step";
import { steps } from "../../data/steps.data";

interface HomeStepsProps {
  screenWidth: number
}

export default function HomeSteps({ screenWidth }: HomeStepsProps) {
  let leftSteps: (JSX.Element | null)[] = [];
  let rightSteps: (JSX.Element | null)[] = [];

  if (screenWidth > 1200) {
    leftSteps = steps.map((step, i) =>
      (i + 1) % 2 === 1
        ? <Step
          key={i}
          step={step.step}
          title={step.title}
          text={step.text}
          direction='right'
        />
        : null
    );
    rightSteps = steps.map((step, i) =>
      (i + 1) % 2 === 0
        ? <Step
          key={i}
          step={step.step}
          title={step.title}
          text={step.text}
          direction='left'
        />
        : null
    );
  } else {
    rightSteps = steps.map((step, i) =>
      <Step
        key={i}
        step={step.step}
        title={step.title}
        text={step.text}
        direction='left'
      />
    );
  }

  return (
    <div className="home-steps">
      <h2>Steps</h2>
      <div className="graph">
        <div className="steps-left">
          {leftSteps}
        </div>
        <div className="vline"></div>
        <div className="steps-right">
          {rightSteps}
        </div>
      </div>
    </div>
  );
}