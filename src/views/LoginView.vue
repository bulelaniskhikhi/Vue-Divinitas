<template>

<div class="container" style="display: flex;
  flex-wrap: wrap; justify-content: space-evenly; margin-top: 5rem;">

    <div id="Login">
       <div id="LoginForm">
          <div id="LoginFormTitle">
              <h3>LOGIN</h3>
          </div>
          <div>
              <label for="" class="fw-light">EMAIL</label>
              <br>
              <input type="text">
          </div>

          <br>

          <div>
              <label for="" class="fw-light">PASSWORD</label>
              <br>
              <input type="text">
          </div>
          <div>
              <button>LOGIN</button>
          </div>
       </div>
    </div>

    <div id="Register" >
        <div id="RegisterForm">
            <div id="RegisterFormTitle">
                <h3>REGISTER</h3>
            </div>
            <div>
              <label for="" class="fw-light">EMAIL</label>
              <br>
              <input type="text">
          </div>

          <br>

          <div>
              <label for="" class="fw-light">PASSWORD</label>
              <br>
              <input type="text">
          </div>
          <div>
              <button>CREATE</button>
          </div>
        </div>
    </div>

</div>
    
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Roboto:wght@100&display=swap'); */

#LoginForm{
    /* background-color: gray; */
}

#Login{
   width: 30%;
}

#Register{
    width: 30%;
    
}

#RegisterForm{
    /* background-color: darkgray;  */
}

#LoginFormTitle, #RegisterFormTitle{
    margin-bottom: 3rem;
    font-family: 'Montserrat', sans-serif;
}

input{
    border: solid 1px #000;
    width: 100%;
}

button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
}
</style>