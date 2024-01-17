import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const body = {
        benutzername: event.target.elements.benutzername.value,
        passwort: event.target.elements.passwort.value,
        email: event.target.elements.email.value,
      };
      const URL = import.meta.env.VITE_SERVER || 'http://localhost:8000';
      const response = await fetch(URL + "/users/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      navigate("/"); // zur Startseite
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="benutzername">Benutzername: </label>
        <input type="text" name="benutzername" id="benutzername" />
      </div>
      <div>
        <label htmlFor="passwort">Passwort: </label>
        <input type="password" name="passwort" id="passwort" />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
      </div>
      <button>Absenden</button>
    </form>
  );
};

export default RegisterForm;
