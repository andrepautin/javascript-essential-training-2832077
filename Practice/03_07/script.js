/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const myBed = {
  sheetColor: "white",
  numPillows: 3,
  comforter: true,
  pillows: { first: "soft", second: "medium", third: "firm" },
  bedMade: false,
  makeBed: function (bedStatus) {
    this.bedMade = bedStatus;
  },
};

console.log(myBed);
