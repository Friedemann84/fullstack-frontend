import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const einloggen = async (event) => {
    event.preventDefault();
    try {
      const body = {
        email: event.target.elements.email.value,
        passwort: event.target.elements.passwort.value,
      }
      // nicht localhost, sondern render-adresse wo server deployed wurde
      const URL = import.meta.env.VITE_SERVER || 'http://localhost:8000';
      const response = await fetch(URL + '/users/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={einloggen}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="passwort">Passwort: </label>
        <input type="password" name="passwort" id="passwort" />
      </div>
      <button>Einloggen</button>
    </form>
  );
};

export default LoginForm;