import LoginFrame from '../LoginFrame/LoginFrame';

function LoginPage() {

   return (
    <div>
      <img className="Vencru" src={require("../img/VencruLogo.png")}/> 

      <LoginFrame/> 

      <footer> © Vencru Inc. 2022 </footer>

      <section> 
          <div className="image_content"></div>

          <div className="link_bar">
          <img className="chevron" id="left-chevron" href="Left-Chevron.png"/>
          <div className="dot"><div id="dot-1">&bull;</div><div id="dot-2">&bull;</div><div id="dot-3">&bull;</div><div id="dot-4">&bull;</div></div>
          <img className="chevron" id="right-chevron" href="Right-Chevron.png"/>
          </div>
      </section>
    </div>
  );
}

export default LoginPage;
