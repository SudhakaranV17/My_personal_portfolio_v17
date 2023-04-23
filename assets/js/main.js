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
      Email.send({
            Host : "smtp.elasticemail.com",
            port:"2525",
            Username : "sudhakaranv17@gmail.com",
            Password : "001485F5E5115CCD0A8204037DDB8758AAAE",
            To : "sudhakaranv17@gmail.com",
            From : document.getElementById("email_form").value,
            Subject : "Feedback From Personal Portfolio",
            Body : document.getElementById("form_textarea").value,
        }).then(
          message => alert("Thanks For Your Feedback.")
        );
}
//001485F5E5115CCD0A8204037DDB8758AAAE