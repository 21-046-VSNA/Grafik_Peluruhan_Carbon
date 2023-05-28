let t = [];
let N = [];
let tPARO;
let ln2;
// let r;
let N0Input;
let N0; // kondisi awal

let tMax = 30000;
let dt = 100;

let grafik

function setup() {
  createCanvas(400, 400);
  
  N0 = 762800;
  tPARO = 5730;
  ln2 = 0.69;
  N0Input = createInput("762800");
  N0Input.position(20,410)
  let p = createP('NILAI AWAL CARBON');
  p.style('font-size', '14px');
  p.position(20, 380);

  solve();
  grafik = new Chart(this, config);
  
  N0Input.changed(solve)
}

function draw() {
  // background(220);
  
  grafik.update()
}

function solve(){
  
  N[0] = N0;
  t[0] = 0;
  N0 = float(N0Input.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    t[i+1] = round((i+1)*dt,3);
    N[i+1] = N[i] - ((N[i]*ln2)/tPARO)*dt
  }
}
