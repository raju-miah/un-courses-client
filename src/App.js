import './App.css';

function App() {
  return (
    <div className="App">
      <div className='form-container'>
        <h2>Hi there</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
}

export default App;
