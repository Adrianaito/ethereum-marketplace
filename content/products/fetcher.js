import courses from "./index.json";

const getAllProducts = () => ({
  data: courses,
  courseMap: courses.reduce((accumulator, course, index) => {
    accumulator[course.id] = course;
    accumulator[course.id].index = index;
    return accumulator;
  }, {}),
});
export default getAllProducts;
