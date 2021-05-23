import UdemyImage from "../static/images/udemy.png";
import EdxImage from "../static/images/edx.png";
import UdacityImage from "../static/images/udacity.png";
import CourseraImage from "../static/images/coursera.png";
import Skillshare from "../static/images/skillshare.png"
import whjr from "../static/images/whjr.png"
import khanAcademy from "../static/images/khanAcademy.png"
import linkedinLearning from "../static/images/linkedinLearning.png"

function CoursePlatforms(){
    const coursePlatform = [
        {
          name: "Coursera",
          image: CourseraImage,
          featured: true,
        },
        {
          name: "Udemy",
          image: UdemyImage,
          featured: true,
        },
        {
          name: "Edx",
          image: EdxImage,
          featured: false,
        },
        {
          name: "Udacity",
          image: UdacityImage,
          featured: false,
        },
        {
          name: "Skillshare",
          image: Skillshare
        },
        {
          name: "WhiteHat Jr",
          image: whjr
        },
        {
          name: "Khan Academy",
          image: khanAcademy
        },
        {
          name: "Linkedin Learning",
          image: linkedinLearning
        }
      ];
      return coursePlatform
}

export default CoursePlatforms