import { useState, useEffect } from "react";
import "./TypewriterText.css";

const textArray = ["Frontend", "Backend", "Fullstack"];

// Custom Hook

const Phase = {
  Typing: "Typing",
  Pausing: "Pausing",
  Deleting: "Deleting",
};

const TYPING_INTERVAL = 300;
const PAUSE_MS = 3000;
const DELETING_INTERVAL = 50;

const useTypedText = (textArray) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedSkill, setTypedSkill] = useState("");

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedSkill = textArray[selectedIndex].slice(
          0,
          typedSkill.length + 1
        );

        if (nextTypedSkill === typedSkill) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedSkill(nextTypedSkill);
        }, TYPING_INTERVAL);
        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!typedSkill) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(textArray[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextRemaining = textArray[selectedIndex].slice(
          0,
          typedSkill.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedSkill(nextRemaining);
        }, DELETING_INTERVAL);
        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);
        return () => clearTimeout(timeout);
      }
    }
  }, [textArray, typedSkill, selectedIndex, phase]);

  return typedSkill;
};

// Component

const TypewriterText = () => {
  const currText = useTypedText(textArray);

  return <span className="typewriter">{currText}</span>;
};

export default TypewriterText;
