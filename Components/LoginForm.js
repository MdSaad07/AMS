// components/LoginForm.js
import { useClient } from 'next/data-client';

const LoginForm = () => {
  const [email, setEmail] = useClient('');
  const [password, setPassword] = useClient('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
