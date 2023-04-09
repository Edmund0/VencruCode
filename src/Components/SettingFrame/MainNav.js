function MainNav() {

    return (
  
      <nav>
        <div>
          <div>
              <img className="Vencru" src={require("../../Resources/img/VencruLogo.png")}/> 
              <div className="navGroup">
                  <div className="navItem">Home</div>
                  <div className="navItem">Dashboard</div>
                  <div className="navItem">Projects</div>
                  <div className="navItem">Tasks</div>
                  <div className="navItem">Reporting</div>
                  <div className="navItem">Users</div>
              </div>
          </div>

          <div>
              <div className="upgrade">
                  <div></div>
                  <div>Upgrade now</div>
              </div>

              <div>
                  <div></div>
                  <div></div>
              </div>

              <div>
                
              </div>
          </div>
        </div>
      </nav>

    );
  }
  
  export default MainNav;