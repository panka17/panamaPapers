import React, { Component } from 'react';
import p5 from 'p5';
import './ParticleFlow.scss';

class ParticleFlow extends Component {
  componentDidMount() {
    // Initialize p5 sketch once the component has mounted.
    this.createCanvas();
  }

  createCanvas() {
    this.sketch = new p5(this.p5sketch, this.canvasContainer);
  }

  p5sketch = (p) => {
    let inc = 0.1;
    let incStart = 0.005;
    let magInc = 0.0005;
    let start = 0;
    let scl = 10;
    let cols, rows;
    let zoff = 0;
    let fps;
    let particles = [];
    let numParticles = 100;
    let flowfield;
    let flowcolorfield;
    let magOff = 0;
    let showField = false;

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight).parent('container');
      p.pixelDensity(1);
      cols = p.floor(p.width / scl);
      rows = p.floor(p.height / scl);

      for (let i = 0; i < numParticles; i++) {
        particles[i] = new Particle(p);
      }

      flowfield = new Array(rows * cols);
      flowcolorfield = new Array(rows * cols);
    };

    class Particle {
      constructor(p) {
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        this.vel = p.createVector(0, 0);
        this.acc = p.createVector(0, 0);
        this.maxSpeed = 1;

        this.prevPos = this.pos.copy();
      }

      update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
      }

      applyForce(force) {
        this.acc.add(force);
      }

      show(colorfield) {
        p.strokeWeight(1);
        p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
      }

      inverseConstrain(pos, key, f, t) {
        if (pos[key] < f) {
          pos[key] = t;
          this.updatePrev();
        }
        if (pos[key] > t) {
          pos[key] = f;
          this.updatePrev();
        }
      }

      updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
      }

      edges() {
        this.inverseConstrain(this.pos, 'x', 0, p.width);
        this.inverseConstrain(this.pos, 'y', 0, p.height);
      }

      follow(vectors, colorfield) {
        let x = p.floor(this.pos.x / scl);
        let y = p.floor(this.pos.y / scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
        let c = colorfield[index];
        if (c) {
          p.stroke(p.color(c[0], c[1], c[2]));
        }
      }
    }

    p.draw = () => {
      if (showField) {
        p.background(0);
      } else {
        p.background(p.color(0, 0, 0, 5));
      }
      let yoff = start;
      for (let y = 0; y < rows; y++) {
        let xoff = start;
        for (let x = 0; x < cols; x++) {
          let index = x + y * cols;
          let r = 6;
          let g = 214;
          let b = 160;
          let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;
          let v = p.createVector(p.cos(angle), p.sin(angle)); // vector from angle
          let m = p.map(p.noise(xoff, yoff, magOff), 0, 1, -5, 5);
          v.setMag(m);
          if (showField) {
            p.push();
            p.stroke(6, 214, 160);
            p.translate(x * scl, y * scl);
            p.rotate(v.heading());
            let endpoint = p.abs(m) * scl;
            p.line(0, 0, endpoint, 0);
            if (m < 0) {
              p.stroke(65, 184, 227);
            } else {
              p.stroke(65, 184, 227);
            }
            p.line(endpoint - 2, 0, endpoint, 0);
            p.pop();
          }
          flowfield[index] = v;
          flowcolorfield[index] = [r, g, b];
          xoff += inc;
        }
        yoff += inc;
      }
      magOff += magInc;
      zoff += incStart;
      start -= magInc;

      if (!showField) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield, flowcolorfield);
          particles[i].update();
          particles[i].edges();
          particles[i].show();
        }

        if (p.random(10) > 5 && particles.length < 2500) {
          let rnd = p.floor(p.noise(zoff) * 20);
          for (let i = 0; i < rnd; i++) {
            particles.push(new Particle(p));
          }
        } else if (particles.length > 2000) {
          let rnd = p.floor(p.random(10));
          for (let i = 0; i < rnd; i++) {
            particles.shift();
          }
        }
      }
    };
  };

  render() {
    return (
      <div id="container" ref={(el) => (this.canvasContainer = el)}>
        {/* Canvas will be created here */}
      </div>
    );
  }
}

export default ParticleFlow;