import { Component, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { loadFull } from "tsparticles"
import { Container, Engine } from "tsparticles-engine"

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  id = "tsparticles";

  particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: 0 // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
    },
    background: {
      color: {
        value: "#161C3C"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 3
        },
        repulse: {
          distance: 100,
          duration: 0.2
        }
      }
    },
    particles: {
      color: {
        value: "#fffffa"
      },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 1.6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
    await loadFull(engine);
  }
  
  ngOnInit(): void {
  }

}
