let weekData = [
  {day: "Sunday", sleepHours: 10, screenTime: 4, mood: "relaxed", caffeineIntake: 0, focusLevel: 3},
  {day: "Monday", sleepHours: 7, screenTime: 2, mood: "good", caffeineIntake: 1, focusLevel: 6},
  {day: "Tuesday", sleepHours: 6, screenTime: 1, mood: "normal", caffeineIntake: 2, focusLevel: 7},
  {day: "Wednesday", sleepHours: 5, screenTime: 3, mood: "tired", caffeineIntake: 2, focusLevel: 8},
  {day: "Thursday", sleepHours: 4, screenTime: 2, mood: "bad", caffeineIntake: 3, focusLevel: 2},
  {day: "Friday", sleepHours: 6, screenTime: 2, mood: "good", caffeineIntake: 2, focusLevel: 4},
  {day: "Saturday", sleepHours: 8, screenTime: 3, mood: "good", caffeineIntake: 1, focusLevel: 6}
]

// -- Predictions --
// Which day had the most screen time?: Sunday
// Best focus day?: Wednesday
// Is more caffeine helping? No

function findHighestScreenTime(data) {
  let highestScreenTime = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].screenTime > highestScreenTime) {
      highestScreenTime = data[i].screenTime;
    }
  }
  console.log("The highest screen time is ", highestScreenTime + "hr(s).")
}

function averageSleep(data) {
  let totalSleepHours = 0;
  
  for (let i = 0; i < data.length; i++) {
    totalSleepHours += data[i].sleepHours;
  }
  
  console.log(`Average sleep hours are ${ (totalSleepHours / data.length).toFixed(1) }.`)
}

function mostFrequentMood(data) {
  let moodCount = {};
  let maxCount = 0;
  let mostMood = "";

  for (let i = 0; i < data.length; i++) {
    let mood = data[i].mood;

    if (!moodCount[mood]) {
      moodCount[mood] = 1;
    } else {
      moodCount[mood]++;
    }

    if (moodCount[mood] > maxCount) {
      maxCount = moodCount[mood];
      mostMood = mood;
    }
  }

  console.log(`The most frequent mood is ${mostMood}.`)
}

function lowCaffeineBestFocus() {
  let bestFocus = 0;
  let bestDay = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].caffeineIntake <= 1 && data[i].focusLevel > bestFocus) {
      bestFocus = data[i].focusLevel;
      bestDay = data[i].day;
    }
  }

  console.log(`The most focused day with low caffeine is ${bestDay}.`);
}