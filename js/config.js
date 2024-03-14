const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')
const links = document.getElementById('links')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativar')
}

document.getElementById('btn-menu').addEventListener('click', function() {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
});

links.addEventListener('click', saindo)
function saindo(){
    links.classList.toggle('fechando')
    if(menuDiv == 'abrir' && links == 'fechando' || btnAnimar == 'ativar' && links === 'fechando' ) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'auto';
    }
}

function scrollToAnchor(anchorId) {
    var element = document.getElementById(anchorId);
    if (element) {
        var distance = element.getBoundingClientRect().top;
        var startingY = window.pageYOffset;
        var targetY = startingY + distance;
        var duration = 1000; // Tempo da animação em milissegundos
        var startTime;

        // Função de animação
        function animate(currentTime) {
            if (startTime === undefined) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var scrollY = easeInOutQuad(timeElapsed, startingY, targetY - startingY, duration);
            window.scrollTo(0, scrollY);
            if (timeElapsed < duration) requestAnimationFrame(animate);
        }

        // Easing function
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animate);
        document.body.style.overflow= 'auto';
    }
}

