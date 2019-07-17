import React from "react"


// export default props => <h1 style={{color: "green"}}>{props.headerText}</h1>
export default props => <header id="header">
<nav className="header" id="nav-bar">
  <div className="box logo">{props.boxText} 
  <a className="nav-link" href={props.navLink} />
  </div>     
</nav>
</header>