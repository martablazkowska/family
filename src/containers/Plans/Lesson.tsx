import React, { FC } from "react";
import { PlanItem } from "./Plans.interface";

interface LessonProps {
  lesson: PlanItem;
}

const Lesson: FC<LessonProps> = ({ lesson }: LessonProps) => {
  return (
    <div>
      {lesson.subject} ({lesson.pupil})
    </div>
  );
};

export default Lesson;
