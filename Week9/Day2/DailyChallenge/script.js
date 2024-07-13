// Instructions:
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
// 1. Create a class named `Video`. The class should be constructed with the following parameters:
//    * title (a string)
//    * uploader (a string, the person who uploaded it)
//    * time (a number, the duration of the video - in seconds)
// 2. Create a method called `watch()` which displays a string as follows: "uploader parameter watched all time parameter of title parameter!"
// 3. Instantiate a new `Video` instance and call the `watch()` method.
// 4. Instantiate a second `Video` instance with different values.
// 5. Bonus: Use an array to store data for five `Video` instances (ie. title, uploader, time) Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.

// 1. Create the Video class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  // 2. Create the watch() method
  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of "${this.title}"!`
    );
  }
}

// 3. Instantiate a new Video instance and call the watch() method
const video1 = new Video("Learning JavaScript", "CodeMaster", 300);
video1.watch();

// 4. Instantiate a second Video instance with different values
const video2 = new Video("Cute Cats Compilation", "CatLover", 180);
video2.watch();

// 5. Bonus: Use an array to store data for five Video instances
const videoData = [
  { title: "JavaScript Basics", uploader: "JSGuru", time: 600 },
  { title: "Python for Beginners", uploader: "PythonMaster", time: 450 },
  { title: "React Tutorial", uploader: "ReactPro", time: 720 },
  { title: "Cooking Italian Pasta", uploader: "ChefMario", time: 360 },
  { title: "Guitar Lessons for Beginners", uploader: "RockStar", time: 540 },
];

// 6. Bonus: Loop through the array to instantiate those instances
console.log("\nBonus: Instantiating and watching videos from the array");
videoData.forEach((data) => {
  const video = new Video(data.title, data.uploader, data.time);
  video.watch();
});
