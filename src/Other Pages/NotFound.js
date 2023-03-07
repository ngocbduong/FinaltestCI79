import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>Not FUCKING Found here</h3>
            <button
                className="btn btn-success"
                onClick={() => {
                    navigate('/Home');
                }}
            >
                Back to Homepage
            </button>
        </div>
    );
};

export default NotFound;
