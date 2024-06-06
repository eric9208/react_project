import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset, playerName },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const getScoreText = (score) => {
    if (!userLost) {
      if (score >= 90) {
        return "ALIEN ALERT! You don't belong here. Go to the next challenge";
      } else if (score >= 80) {
        return "Impressive, but you can do better";
      } else if (score >= 60) {
        return `Not bad, but certainly not good enough`;
      } else if (score >= 40) {
        return "YUCK, try again";
      } else {
        return "HOW ARE YOU STILL ALIVE?";
      }
    }
  };

  const scoreText = getScoreText(score);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && (
        <h2>{playerName ? playerName : "Unknown Entity"}, you Lost </h2>
      )}
      {!userLost && (
        <h2>
          {playerName ? playerName : "Unknown Entity"}'s Score: {score}
        </h2>
      )}
      <h3>{scoreText}</h3>
      <p>
        The target time was <strong>{targetTime} seconds. </strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
