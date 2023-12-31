// The Grade Calculating System

const marks = [62, 59, 63];

console.log(grade(marks));

function grade(marks){
  const average = averageCalculator(marks);
  if(average < 60) return 'F';
  if(average < 70) return 'D';
  if(average < 80) return 'C';
  if(average < 90) return 'B';
  return 'A';
}

function averageCalculator(marks) {
  let total = 0;
  for(let mark of marks)
    total += mark;
  return average = total / marks.length;
}