let Header = () => {
  return <header>This is my Blog</header>;
};
let Article = () => {
  return <article>This is an article on how I learned to write React. React has many exciting concepts and feature that 
      I plan to implement in my future applications. 
  </article>;
};
let Footer = () => {
  return <footer>This is my footer</footer>
};

let Blog = () => {
  return (
    <Header/>
        <Article/>
    <Footer/>
  );
};

ReactDOM.render(<Blog />, document.getElementById("root"));
