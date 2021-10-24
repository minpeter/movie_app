function App() {
  return (
    <div>
      <h1>hello!!</h1>
      <Food fav="Apple 🍎" />
      <Food fav="test someting ♟️" />
    </div>
  );
}

function Food({fav}) {
  return (
    <h2>I like {fav}</h2>
  );
}

export default App;