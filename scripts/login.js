document.addEventListener('DOMContentLoaded', function() {

    let formContentHTML = `
    <div class="row">
        <div class="form col">
          <form class="form-signin" method="post">
            <h2 class="form-signin-heading">User login</h2>
            <div class="form-group">
              <div class="col-12">
                <input id="username" type="text" placeholder="User Name" class="form-control">
                <input id="password" type="text" placeholder="Password" class="form-control">
              </div>
            </div>
            <div class="col-12">
              <div class="container">
                <div class="row">
                  <div class="caja col-4">
                    <label class="checkbox">
                      <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me </label>
                  </div>
                  <div class="caja col-8">
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                  </div>
                </div>
              </div>
            </div>
    
            <h5 class="form-signin-footer">You don't have an user? Create one!</h5>
              <div class="caja col-12">
                <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
              </div>
          </form>
        </div>
    </div>
    `
    let form = document.createElement('div');
    form.className = 'form mb-3';
    form.innerHTML = formContentHTML;
    
    document.getElementById('login').appendChild(form);
})