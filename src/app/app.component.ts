import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-brochure-site';

  ngOnInit(): void {
  }

  options = {
    fpsLimit: 120,
    'z-index': -1,
    // interactivity: {
    //   // detectsOn: "canvas",
    //   events: {
    //     onClick: {
    //       enable: true,
    //       mode: "push"
    //     },
    //     onHover: {
    //       enable: true,
    //       mode: "repulse"
    //     },
    //     resize: true
    //   },
    //   modes: {
    //     bubble: {
    //       distance: 400,
    //       duration: 2,
    //       opacity: 0.8,
    //       size: 40
    //     },
    //     push: {
    //       quantity: 4
    //     },
    //     repulse: {
    //       distance: 200,
    //       duration: 0.4
    //     }
    //   }
    // },
    particles: {
      color: {
        value: "#5e2c85"
      },
      links: {
        enable: true,
        color: "#212b3b"
      },
      move: {
        enable: true
      }
    }
  };
  // id = "tsparticles";
  //
  // /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  // particlesUrl = "http://foo.bar/particles.json";
  //
  // /* or the classic JavaScript object */
  // particlesOptions = {
  //   background: {
  //     color: {
  //       value: "#0d47a1"
  //     }
  //   },
  //   fpsLimit: 60,
  //   interactivity: {
  //     detectsOn: "canvas",
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: "push"
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: "repulse"
  //       },
  //       resize: true
  //     },
  //     modes: {
  //       bubble: {
  //         distance: 400,
  //         duration: 2,
  //         opacity: 0.8,
  //         size: 40
  //       },
  //       push: {
  //         quantity: 4
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4
  //       }
  //     }
  //   },
  //   particles: {
  //     color: {
  //       value: "#333"
  //     },
  //     links: {
  //       color: "#333",
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.5,
  //       width: 1
  //     },
  //     collisions: {
  //       enable: true
  //     },
  //     move: {
  //       direction: "none",
  //       enable: true,
  //       outMode: "bounce",
  //       random: false,
  //       speed: 6,
  //       straight: false
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         value_area: 800
  //       },
  //       value: 80
  //     },
  //     opacity: {
  //       value: 0.5
  //     },
  //     shape: {
  //       type: "circle"
  //     },
  //     size: {
  //       random: true,
  //       value: 5
  //     }
  //   },
  //   detectRetina: true
  // };
  //
  // particlesLoaded(container: Container): void {
  //   console.log(container);
  // }
  //
  // particlesInit(main: Main): void {
  //   console.log(main);
  //
  //   // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  // }

}
