
class Signup extends Component {
    render() {
        return (
<Signup>

    <main class="form-signin">
        <div class="navbar-container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

                    <span class="fs-4"><font color="white">Library Management System</font></span><br/><br/>
                </a>
                <ul class="nav nav-pills">
                </ul>
            </header>
        </div>
        <form id="reg-form" method="POST" action="/users/create">
            <div class=" form-container ">
                <div class="logo " style="position:fixed; top:0; left:0;">
                   
                </div>
                <h1 class="h3 mb-3 fw-normal " style="color:#111d86e5  ; ">Register Now</h1>

                <div class="form-floating ">
                    <input type="text" class='form-control' id="floatingName1" placeholder="First Name "/>
                    <label for="floatingName1">First Name</label>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingName2" placeholder="Last Name "/>
                        <label for="floatingName2">Last Name</label></div>
                    <div class="form-floating">
                        <input type="email" class="form-control " id="floatingInput" placeholder=" Email "/>
                        <label for="floatingInput">Email address</label></div>
                    <div class="form-floating">
                        <input type="password" class="form-control " id="floatingPassword1" placeholder="Password (minimum 8 characters) "/>
                        <label for="floatingPassword1">Password</label></div>
                    <div class="form-floating">
                        <input type="password" class="form-control " id="floatingPassword2" placeholder="Confirm Password "/>
                        <label for="floatingPassword2">Confirm Password</label></div>
                    <div class='form-floating'>
                        <input type="date" class="form-control " id="floatingDate" placeholder="Date of Birth "/>
                        <label for="floatingDate">Date of Birth &#13; </label></div>
                    <div class='form-floating'>
                        <input type="number" class="form-control " id="floatingNumber" placeholder="Age " min="13" max="100"/>
                        <label for="floatingNumber">Enter your Age</label></div>
                    <br/>
                    <h6 align-text="left">Gender:</h6>
                    <div class="form-check form-check-inline " id='radio'>

                        <input type="radio" id="inlineRadio1 " class="form-check-input " value="M " name="inlineRadioOptions "/>
                        <label class="form-check-label " for="inlineRadio1 ">Male</label></div>
                    <div class=" form-check form-check-inline " id='radio'>
                        <input type="radio" id="inlineRadio2 " class="form-check-input " value="F " name="inlineRadioOptions "/>
                        <label class="form-check-label " for="inlineRadio2 ">Female</label></div>
                    <div class="form-check form-check-inline " id='radio'>
                        <input type="radio" id="inlineRadio3 " class="form-check-input " value="O " name="inlineRadioOptions "/>
                        <label class="form-check-label " for="inlineRadio2 ">Other</label>
                    </div>
                    <div class="form-check">
                        <br/>
                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" required="Yes"/>
                        <label class="form-check-label" for="flexCheckDefault">I agree to the terms and Conditions</label>
                    </div>
                </div>
                <br/>
                <button type="submit" class="w-100 btn btn-lg btn-primary ">Sign Up</button><br/><br/>
                <h4>Already have an account?</h4>
                <br/>
                <a href="../Login/index.html" class='w-75 btn btn-lg btn-danger'>Log In</a> <br/><br/>
            </div>
        </form>

        
     
    </main>
</Signup>
)
}
}