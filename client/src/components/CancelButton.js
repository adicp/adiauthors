
import {useNavigate} from 'react-router-dom';

const CancelButton = () => {

    const navigate = useNavigate();

    const onCancel = () => (
        navigate("/")
    );
    
    return (
        <button onClick={onCancel}>Cancel</button>
    );

}

export default CancelButton;