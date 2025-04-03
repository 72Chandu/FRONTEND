function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,  // comes from down
        stagger: 0.25, // comes one by one
        duration: 0.6,
        delay: 0.5,
    });
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function () {
                if (grow < 100) {
                    // grow++;
                    // console.log(grow)
                    h5timer.innerHTML = grow++
                } else {
                    h5timer.innerHTML = grow
                    // grow=100;
                    // console.log(grow)
                }
            }, 35)
        },
    })
    tl.to('.line h2', {
        animationName: "Now-anime",
        opacity: 1,
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 4,
    })
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.5,
        ease: Power4
    })
    tl.to("#loader", {
        display: "none",
    })
}
loadingAnimation();

function cursoreAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4",{});/* Element to target.*/
}
cursoreAnimation();