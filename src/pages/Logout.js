import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post('http://localhost:8000/api/logout/', {}, {
          withCredentials: true,  // Ensure cookies are sent with the request
        });

        // Remove token & session data
        localStorage.removeItem('token');
        document.cookie = 'sessionid=; Max-Age=0; path=/; domain=localhost';

        // Redirect to login page
        navigate('/login');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    logoutUser();
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;
