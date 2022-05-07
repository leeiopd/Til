function 오늘하루(condition, weather, isJob) {
  if (condition === "GOOD") {
    공부();
    게임();
    유투브보기();

    if (weather === "GOOD") {
      운동();
      빨래;
    }

    if (isJob === "GOOD") {
      야간업무();
      조기취침();
    }
  }
}

function 오늘하루2(condition, weather, isJob) {
  if (condition !== "GOOD") {
    return;
  }
  공부();
  게임();
  유투브보기();

  if (weather !== "GOOD") {
    운동();
    빨래();
  }

  if (isJob === "GOOD") {
    야간업무();
    조기취침();
  }
}
