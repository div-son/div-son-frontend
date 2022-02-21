import "../../styles/Register.css"


export const RegisterForm = () => {
  return (    
    <div className="container">
      <form>
        <h1>Register Form</h1>

        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>First name</label>
            <input
              type="text"
              name="first name"
              placeholder="Please share your first name"
            />
          </div>

          <div className="field">
            <label>Last name</label>
            <input
              type="text"
              name="last name"
              placeholder="Please share your last name"
            />
          </div>

          <div className="field">
            <label>Phone number</label>
            <input
              type="tel"
              name="phone number"
              placeholder="Hey, let's get your number."
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="make it strong"
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="email"
              name="email"
              placeholder="Please share your email"
            />
          </div>

        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
