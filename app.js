// 3D Animation init
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');

    // Items grabbing
    const title = document.querySelector('.title');
    const sneaker = document.querySelector('.sneaker img');
    const purchase = document.querySelector('.purchase button ');
    const description = document.querySelector('.info h3');
    const sizes = document.querySelector('.sizes');

    // Animating animation
    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        console.log("x :" + e.pageX + " y : " + e.pageY);
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    });

    // Animate In
    container.addEventListener('mouseenter', e => {
        card.style.transition = 'none';
        // POP OUT
        title.style.transform = "translateZ(180px)"
        sneaker.style.transform = "translateZ(250px) rotate(-15deg)"
        sizes.style.transform = "translateZ(100px)"
        purchase.style.transform = "translateZ(180px)"
        description.style.transform = "translateZ(180px)"
    })

    // Animate Out
    container.addEventListener('mouseleave', e => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = 'rotateY(0deg) rotateX(0deg)'
        //POP BACK
        title.style.transform = 'translateZ(0)';
        sneaker.style.transform = 'translateZ(0)';
        sizes.style.transform = 'translateZ(0)';
        description.style.transform = 'translateZ(0)';
        purchase.style.transform = 'translateZ(0)';
    })
})