import { useState } from "react";
import Courses from "./schools/Courses";
import School from "./schools/School";
import Uni from "./schools/Uni";

const Education = () => {
    const [checker,SetChecker] = useState('courses');

    const clickHandler = (e, value) => {
        console.log(value);

        switch (value) {
            case 'courses':
                SetChecker('courses')
                break;
            case 'uni':
                SetChecker('uni')
                break;
            case 'school':
                SetChecker('school')
                break;
            default:
                break;
        }
    }

    return (
        <section className="education">
            <div className="education">
                <div className="container">
                    <div className="row">
                        <div className="image-container col-md">
                            <img src="assets/images/education.jpg" id="education-img" alt="" />
                        </div>
                        <div className="col-md">
                            <h2>Education</h2>
                            <h3>Below you can check the institutions I've attended</h3>
                            <button onClick={e => clickHandler(e, 'courses')} className="btn">Professional courses</button>
                            <button onClick={e => clickHandler(e, 'uni')} className="btn">University</button>
                            <button onClick={e => clickHandler(e, 'school')} className="btn">High School</button>
                            <ul>
                                {checker == 'courses' &&
                                    <Courses />
                                }
                                {checker == 'uni' &&
                                    <Uni />
                                }
                                {checker == 'school' &&
                                    <School />
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;