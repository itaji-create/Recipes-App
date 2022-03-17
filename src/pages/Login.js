import React from 'react';

function Login(props) {
    function handleClick() {
      window.location.href = '/foods';
    }
    return (
      <div className="login">
        <h2>Login</h2>
        <input
          placeholder="email"
          id="email"
        />
        <br />
        <input
          placeholder="senha"
        />
        <br />
        <button
          type="button"
          onClick={ handleClick }
        >
          Enter
        </button>
      </div>
    );
  }
  
//   Login.propTypes = {
//     history: PropTypes.shape({
//       push: PropTypes.func,
//     }).isRequired,
//   };
  
  export default Login;
