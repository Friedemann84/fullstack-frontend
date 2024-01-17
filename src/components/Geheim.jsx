import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Geheim = () => {
  const navigate = useNavigate();
  const [geheimeDaten, setGeheimeDaten] = useState('');
  useEffect(() => {
    const fetchGeheimnis = async () => {
      const URL = import.meta.env.VITE_SERVER || 'http://localhost:8000';
      const response = await fetch(URL + '/users/geheim', {
        credentials: 'include'
      });
      if (!response.ok) {
        navigate('/')
      } else {
        const data = await response.json();
        setGeheimeDaten(data.message);
      }
    }
    fetchGeheimnis();
  }, [navigate]);
  return (
    <>
      <p>{geheimeDaten}</p>
    </>
  );
};

export default Geheim;