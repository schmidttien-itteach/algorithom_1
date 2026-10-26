export function recordAnswer(answers, id, choice, correctIndex) {
  const prior = answers[id];
  if (!prior) {
    answers[id] = {
      choice,
      points: choice === correctIndex ? 100 : 70,
      done: false,
      revealed: true,
    };
  } else {
    answers[id] = { ...prior, choice, revealed: true };
  }
  return answers[id];
}

export function awardOnce(list, badge) {
  if (!list.includes(badge)) list.push(badge);
  return list;
}
