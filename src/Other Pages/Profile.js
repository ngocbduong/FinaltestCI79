import { Link, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <div className="btn-group mt-4" role="group" aria-label="Basic example">
                <Link to="Aboutme" type="button" className="btn btn-primary">
                    AboutMe
                </Link>
                <Link to="Course" type="button" className="btn btn-primary">
                    Courses
                </Link>
                <Link to="Editsetting" type="button" className="btn btn-primary">
                    EditSetting
                </Link>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Profile;
