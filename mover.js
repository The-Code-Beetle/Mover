function Mover(m, x, y){
  this.position = new p5.Vector(x, y);
  this.velocity = new p5.Vector(0, 0);
  this.acceleration = new p5.Vector(0, 0);

  this.angle = 0;
  this.mass = m;

  this.col = color(100, 100, 100, 100);
  this.stroW = 1;
  this.stro = null;

  this.setColot = function(c){
    this.col = c;
  }

  this.setStro = function(s, w){
    this.stroW = w;
    this.stro = s;
  }

  this.setVelocity = function(v){
    this.velocity.set(v);
  }

  this.applyForce = function(force){
    force.div(this.mass);
    this.acceleration.add(force);
  }

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.angle = velocity.heading();
  }


  this.display = function(mode){
    fill(this.col);
    if(this.stro != null){
      stroke(this.stro);
      strokeWeight(this.stroW);
    }else{
      noStroke();
    }
    switch (mode) {
      case "cell":
        ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
      break;
      case "pointer":
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        triangle(-this.mass * 8, this.mass * 4, -this.mass * 8, -this.mass * 4, this.mass * 8, 0);
        pop();
      break;  
    }
  }
}
