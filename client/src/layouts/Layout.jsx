const Layout = ({ children }) => {
  return (
    <div>
      <>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
        <div className="" style={{ height: "90vh" }}>
          {children}
        </div>
      </>
    </div>
  );
};

export default Layout;
