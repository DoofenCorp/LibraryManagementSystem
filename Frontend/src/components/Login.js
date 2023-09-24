// import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (
<Login>
<title>Login</title>

<body>
    <main class="form-signin">
        
        <form>
            <div class="form-container">
                <br/>
            

                <h1 class="h3 mb-3 fw-normal" style=" color:#111d86e5 ">Login</h1><br/>

                <div class="form-floating ">
                    <input type="email" class="form-control " id="floatingInput " placeholder="Username or Email "/>
                    <label for="floatingInput ">Username or Email</label>
                <div class = "form form-floating ">
                    <input type="password" class="form-control " id="floatingPassword " placeholder="Password "/>
                    <label for="floatingPassword ">Password</label>
                </div>

                <div class="checkbox mb-3 ">
                    <label>
                      <input type="checkbox" value="remember-me "/> Remember me
                    </label>
            </div>

            </div>
            <button type="submit " class="w-100 btn btn-lg btn-primary " formaction="index.html">
                    <font color="white">Log In</font>
                    
                    </button><br/><br/>
                    <h4>Don' t have an account?</h4><br/>
                    <a href="../Signup/signup.html " class="w-75 btn btn-lg btn-danger " id="signup ">Sign up</a> <br/><br/>

            </div>
        </form>

       
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js " integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin=" anonymous "></script>
    <script src="../js/bootstrap.min.js "></script>

</body>
</Login>
)
}
}

export default Login;