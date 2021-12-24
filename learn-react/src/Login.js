import React from "react";

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  render(){
      return(
          <div>
            Spooky Login
          </div>
      );
  }
}
export default Login;

// export default function Login(){
//   return(
//       <div>
//         Spooky View
//       </div>
//   );
// }
