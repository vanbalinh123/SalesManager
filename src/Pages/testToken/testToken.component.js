import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TestToken = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken);
        if (accessToken === "" || accessToken === null) {
          navigate('/login');
        } else {
            navigate('/template/products')
        }
      }, []);
    
    return (
        <h1>Testing Token</h1>
    )
}

export default TestToken;