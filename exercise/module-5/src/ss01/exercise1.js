// yeu cau1
let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

let result = courses.filter(item =>
    (item.rating >= 4)
);
console.log(result);

// yeucau2
let target = courses.filter(item =>
    (item.rating < 4)
);
let main = target.map(item => item.id + "-" + item.title +"-" + item.rating);
console.log(main)


//yeu cau 3
let three = [...courses,...addedCourses];
console.log(three);