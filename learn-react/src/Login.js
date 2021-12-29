import React from "react";

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  render(){
      return(
          <div>
            {/* Top Bar */}
            <div className="bg-highlight shadow-md">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between">
                            <div className="flex space-x-5">
                                <a href="/" className="flex items-center py-4">
                                    <span className="font-bold font-mono text-primary text-3xl">Shoplux</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
