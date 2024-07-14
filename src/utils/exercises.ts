const lbsToKgs = (lbs: number) => lbs / 2.20462;
const kgsToLbs = (kgs: number) => kgs * 2.20462;

export const bodyParts = [
  "Chest",
  "Back",
  "Biceps",
  "Triceps",
  "Shoulders",
  "Legs",
];

export const mapBodyPartToExercises = {
  Chest: {
    exercises: [
      {
        name: "Chest Press",
      },

      {
        name: "Incline Chest Press",
      },

      {
        name: "Decline Chest Press",
      },
    ],
  },

  Back: {
    exercises: [
      {
        name: "Rows",
      },
      {
        name: "Pullups",
      },
    ],
  },

  Biceps: {
    exercises: [
      {
        name: "Curls",
      },
      {
        name: "Preacher Curls",
      },
      {
        name: "Cable Curls",
      },
    ],
  },
  Triceps: {
    exercises: [
      {
        name: "French",
      },
      {
        name: "Skull Crushers",
      },
      {
        name: "Tricep extension",
      },
    ],
  },

  Shoulders: {
    exercises: [
      {
        name: "Shoulder Press",
      },
    ],
  },

  Legs: {
    exercises: [
      {
        name: "Squats",
      },

      {
        name: "Leg extensions",
      },
    ],
  },
};
