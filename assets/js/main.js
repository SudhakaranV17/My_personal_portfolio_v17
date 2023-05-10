// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Sending feedback to mail
function SendEmail(){
      var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var body = "Name: "+ name + "<br/>" + "Email: "+ email + "<br/>" + "Message: "+ message ;
      
      Email.send({
        SecureToken : "d5d8b0ef-71fe-4715-80b3-b49b970c96c1",
        To : 'sudhakaranv17@gmail.com',
        From : "sudhakaranv17@gmail.com",
        Subject : "Message From Personal Portfolio",
        Body : body
    }).then(
      message => alert(message)
    );
}
//001485F5E5115CCD0A8204037DDB8758AAAE
