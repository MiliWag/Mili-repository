(function() {

    let navbarToggler = document.querySelector('#navbarToggler')
    let navbar = document.querySelector('#navbar')

    console.log("navbarToggler");
    navbarToggler.addEventListener('click', function(e) {
        navbar.classList.toggle('nav-show')
        e.stopPropagation()

    })

    document.addEventListener('click', function() {
        navbar.classList.remove('nav-show')
    })

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
            navbar.classList.remove('nav-show')
        }
    })
})()