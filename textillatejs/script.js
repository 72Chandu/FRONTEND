gsap.from("h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    onStart: function () {
      // Always reset textillate to avoid cached effect issues
      $('h1').textillate('stop').textillate('destroy');
      
      // console.log("animation started")
        
     $('h1').textillate({ in: { effect: 'rollIn' } });
               
    //   $('h1').textillate({in: { effect: 'fadeIn' },autoStart: true,loop: false});

      // $('h1').textillate({
        //     in: { effect: 'bounceIn' },
        //     out: { effect: 'hing' },
        //     autoStart: true,
        //     loop: true // optional if you want it to repeat
        // });
    }
  });
  