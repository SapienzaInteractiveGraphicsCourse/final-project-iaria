
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js'


const loader = new THREE.TextureLoader();

export var Pig = function(){
this.mesh = new THREE.Object3D();
// geometry for the pig's body
//const bodyGeometry = new THREE.BoxBufferGeometry(5, 2, 2.2);

const pigTexture = loader.load('./textures/pig.png');
  const bodyGeometry = new THREE.Mesh(
    new THREE.BoxGeometry(5, 2, 2.2),
    new THREE.MeshPhongMaterial( { map: pigTexture } )
  );


const noseGeometry = new THREE.BoxBufferGeometry(0.8, 1, 1.3);
const noseHoleGeometry = new THREE.BoxBufferGeometry(0.2, 0.5, 0.3);
const eyeGeometry = new THREE.BoxBufferGeometry(0.3, 0.3, 0.3);
const tailGeometry = new THREE.CylinderBufferGeometry(0.1, .2, 1.4);




// material for the pink pig's body
const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xFFC0CB });
const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFC0F0 });
const eyesMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
const noseHoleMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
// Mesh for the pig's body
//const = new THREE.Mesh(bodyGeometry, bodyMaterial);
const noseMesh = new THREE.Mesh(noseGeometry, headMaterial);
const noseHolesMesh1 = new THREE.Mesh(noseHoleGeometry,noseHoleMaterial);
const noseHolesMesh2 = new THREE.Mesh(noseHoleGeometry,noseHoleMaterial);
const eyeMesh1 = new THREE.Mesh(eyeGeometry,eyesMaterial);
const eyeMesh2 = new THREE.Mesh(eyeGeometry,eyesMaterial);
const tailMesh = new THREE.Mesh(tailGeometry, bodyMaterial);





noseHolesMesh1.position.set(4.4,1.2,0.3);
noseHolesMesh2.position.set(4.4,1.2,-0.3);
eyeMesh1.position.set(4,2.2,0.4);
eyeMesh2.position.set(4,2.2,-0.4);
// Create a geometry for the pig's head
const headGeometry = new THREE.BoxBufferGeometry(1.7, 2, 2);

// material for the pink pig's head


// mesh for the pig's head
const headMesh = new THREE.Mesh(headGeometry, bodyMaterial);

// Position the pig's head on top of the pig's body
headMesh.position.set(3.2, 1.5, 0);
noseMesh.position.set(4,1.2,0);
//pig's head to the scene
this.mesh.add(headMesh);

// geometry for the pig's legs
const legGeometry = new THREE.BoxBufferGeometry(.8, 2, .8);

// material for the pink pig's legs
const legMaterial = new THREE.MeshPhongMaterial({ color: 0xFFC0D3 });

//meshes for the pig's legs
const leftFrontLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const rightFrontLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const leftBackLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const rightBackLegMesh = new THREE.Mesh(legGeometry, legMaterial);

// pig's legs on the bottom of the pig's body
leftFrontLegMesh.position.set(-1.8, -1.8, -0.7);
rightFrontLegMesh.position.set(-1.8, -1.8, 0.7);
leftBackLegMesh.position.set(1.8, -1.8, 0.7);
rightBackLegMesh.position.set(1.8, -1.8, -0.7);
tailMesh.position.set(-3,.8,0);
tailMesh.rotation.z = 20;




//Grouping pig's limbs
const groupedHeadPig = new THREE.Group();
groupedHeadPig.add(headMesh);
groupedHeadPig.add(eyeMesh1);
groupedHeadPig.add(eyeMesh2);
groupedHeadPig.add(noseMesh);
groupedHeadPig.add(noseHolesMesh1);
groupedHeadPig.add(noseHolesMesh2);




// Add the pig's body to the scene
this.mesh.add(bodyGeometry);
this.mesh.add(groupedHeadPig);
this.mesh.add(tailMesh);
this.mesh.add(rightFrontLegMesh);
this.mesh.add(leftBackLegMesh);
this.mesh.add(leftFrontLegMesh);
this.mesh.add(rightBackLegMesh);


// mesh for the pig's tail


// pig's tail on the back of the pig's body

var tic = 0;
var toc = 0;
var ticMax = 50;
var tocMax = 50;
this.animationUp = function(){
  
if(tic<ticMax){
  toc = 0;
  console.log("tic");
groupedHeadPig.rotation.z += 0.55 * 0.005;
rightFrontLegMesh.rotation.z += 1.3 * 0.005;
leftBackLegMesh.rotation.z -= 1.3 * 0.005;
leftFrontLegMesh.rotation.z -=1.3 * 0.005;
rightBackLegMesh.rotation.z +=1.3 * 0.005;
tailMesh.position.x+=1 * 0.006;;
tailMesh.rotation.z += 2 * 0.006;
tic++;
}
else if(toc<tocMax){
  console.log("toc");
  this.animationDown();
  

  
  toc++;

}
else{tic=0;}
}

this.animationDown = function(){
  groupedHeadPig.rotation.z -= 0.55 * 0.005;
  rightFrontLegMesh.rotation.z -= 1.3 * 0.005;
  leftBackLegMesh.rotation.z += 1.3 * 0.005;
  leftFrontLegMesh.rotation.z +=1.3 * 0.005;
  rightBackLegMesh.rotation.z -=1.3 * 0.005;
  tailMesh.rotation.z -= 2 * 0.006;
  tailMesh.position.x-=1 * 0.006;
}

this.setTicToc = function(t1){
  ticMax = t1;
  tocMax = t1;
}



  
}


export var Chicken = function() {
  this.mesh = new THREE.Object3D();
//GEOMETRIES
const featherTexture = loader.load('./textures/feather.png');
const bodyGeometry = new THREE.Mesh(
  new THREE.BoxGeometry(3, 2, 2.2),
  new THREE.MeshPhongMaterial( { map: featherTexture } )
);
  const headGeometry = new THREE.BoxGeometry(1, 2, 1.5);
  const wingGeometry = new THREE.BoxGeometry(2,1,0.5);
  const legGeometry = new THREE.BoxGeometry(0.2,2,0.2);
  const footGeometry = new THREE.BoxGeometry(1,0.1,0.4);
  const beakGeometry = new THREE.BoxGeometry(1.2,0.5,1.3);
  const tongueGeometry = new THREE.BoxGeometry(1.2,.6,0.7); //indeed it's not literally its tongue tho...
  const eyesGeometry = new THREE.BoxGeometry(.25, .25, .25);
  //MATERIALS
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const legMaterial = new THREE.MeshPhongMaterial({color: 0x9b870c })
  const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFF000D});
  const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000});
//MESHES
  // Create a mesh for the chicken's body
  //const bodyMesh = new THREE.Mesh(bodyGeometry, material);

  // Create a mesh for the chicken's head
  const headMesh = new THREE.Mesh(headGeometry, material);

  //legs meshes
  const rightLegMesh = new THREE.Mesh(legGeometry, legMaterial);
  const leftLegMesh = new THREE.Mesh(legGeometry, legMaterial);
  
  //wings meshes
  const leftWingMesh = new THREE.Mesh(wingGeometry, material);
  const rightWingMesh = new THREE.Mesh(wingGeometry, material);

  //feet meshes
  const leftFootMesh = new THREE.Mesh(footGeometry, legMaterial);
  const rightFootMesh = new THREE.Mesh(footGeometry, legMaterial);

  //beak mesh
  const beakMesh = new THREE.Mesh(beakGeometry, legMaterial);

  //tongue mesh
  const tongueMesh = new THREE.Mesh(tongueGeometry, headMaterial);
  //eyes meshes
  const leftEyeMesh = new THREE.Mesh(eyesGeometry, eyeMaterial);
  const rightEyeMesh = new THREE.Mesh(eyesGeometry, eyeMaterial);
//POSITIONS & ROTATIONS
  headMesh.position.set(1.5, 1.5, 0);
  leftLegMesh.position.set(-0.3,-2,-0.5);
  
  rightLegMesh.position.set(-0.3,-2,0.5);


  
  leftWingMesh.position.set(0.8,0,1.35);
  leftWingMesh.rotation.z = 35;
  rightWingMesh.rotation.z = 35;
  rightWingMesh.position.set(0.8,0,-1.35);

  leftFootMesh.position.set(0,-3,-0.5);
  rightFootMesh.position.set(0,-3,0.5);

  beakMesh.position.set(2.2,1.7,0);

  tongueMesh.position.set(2,1.2,0);
  
  leftEyeMesh.position.set(2,2.2,0.5);
  rightEyeMesh.position.set(2,2.2,-0.5);


//limbs nesting for the animations
const groupedLeftLeg = new THREE.Group();
groupedLeftLeg.add(leftFootMesh);
groupedLeftLeg.add(leftLegMesh);
const groupedRightLeg = new THREE.Group();
groupedRightLeg.add(rightLegMesh);
groupedRightLeg.add(rightFootMesh);
const groupedHead = new THREE.Group();
groupedHead.add(headMesh);
groupedHead.add(beakMesh);
groupedHead.add(tongueMesh);
groupedHead.add(leftEyeMesh);
groupedHead.add(rightEyeMesh);



  // Add the body and head meshes to the `Chicken` object
  this.mesh.add(bodyGeometry);
  this.mesh.add(groupedHead);
 
  this.mesh.add(leftWingMesh);
  this.mesh.add(rightWingMesh);
  this.mesh.add(groupedLeftLeg);
  this.mesh.add(groupedRightLeg);



  var tic = 0;
  var toc = 0;
  var ticMax = 20;
  var tocMax = 20;

  this.setTicToc = function(t1){
    ticMax = t1;
    tocMax = t1;
    console.log(this.tocMax);
  }

  this.animationUp = function(){

    
  if(tic<ticMax){
    
    toc = 0;
    this.moveWingsUp();
    this.moveHeadUp();
    this.moveLegsUp();
  tic++;
  }
  else if(toc<tocMax){
    
    this.animationDown();
    
    toc++;
  
  }
  else{tic=0;}
  }

  


  this.animationDown = function(){
    this.moveWingsDown();
    this.moveHeadDown();
    this.moveLegsDown();
  }


  this.moveWingsUp = function(){
    
      leftWingMesh.rotation.x -= 25.5*0.0005;
      rightWingMesh.rotation.x += 25.5*0.0005;
      
  }
  this.moveWingsDown = function(){
    
    leftWingMesh.rotation.x += 25.5*0.0005;
    rightWingMesh.rotation.x -= 25.5*0.0005;
    
}

  this.moveLegsUp= function(){
    
    groupedLeftLeg.rotation.z -= 5 * 0.002;
    groupedRightLeg.rotation.z += 5 * 0.002;
  
}

  this.moveLegsDown= function(){
    groupedLeftLeg.rotation.z += 5 * 0.002;
    groupedRightLeg.rotation.z -= 5 * 0.002;
  }

  this.moveHeadUp = function(){
    groupedHead.rotation.z += 5 * 0.0015;
  }

  this.moveHeadDown = function(){
    groupedHead.rotation.z -= 5 * 0.0015;
  }



};





export var Penguin = function() {
  this.mesh = new THREE.Object3D();
//GEOMETRIES
const featherTexture = loader.load('./textures/penguin.jpg');
const bodyGeometry = new THREE.BoxGeometry(3, 6, 3);
const bellyGeometry = new THREE.BoxGeometry(1, 4, 2.8);
  
  const wingGeometry = new THREE.ConeBufferGeometry(1.5,.2,3);
  const footGeometry = new THREE.BoxGeometry(1.2,0.15,0.7);
  const beakGeometry = new THREE.ConeBufferGeometry(.3,1,3);
  const eyesGeometry = new THREE.BoxGeometry(.2, .5, .2);
  const tailGeometry = new THREE.BoxGeometry(2,0.15,1.5);
  //MATERIALS
  const material = new THREE.MeshPhongMaterial({ color: 0x505050  });
  const bellyMaterial = new THREE.MeshPhongMaterial({ color: 0xE0E0E0   });
  const beakMaterial = new THREE.MeshPhongMaterial({color: 0xFF8C00  })
  const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000});
//MESHES
  // Create a mesh for the chicken's body
  const bodyMesh = new THREE.Mesh(bodyGeometry, material);
  const tailMesh = new THREE.Mesh(tailGeometry, material);
  const bellyMesh = new THREE.Mesh(bellyGeometry, bellyMaterial);

  //legs meshes

  
  //wings meshes
  const leftWingMesh = new THREE.Mesh(wingGeometry, new THREE.MeshPhongMaterial( { map: featherTexture }));;
  const rightWingMesh = new THREE.Mesh(wingGeometry, new THREE.MeshPhongMaterial( { map: featherTexture }));

  //feet meshes
  const leftFootMesh = new THREE.Mesh(footGeometry, beakMaterial);
  const rightFootMesh = new THREE.Mesh(footGeometry, beakMaterial);

  //beak mesh
  const beakMeshUp = new THREE.Mesh(beakGeometry, beakMaterial);

  //tongue mesh
  //eyes meshes
  const leftEyeMesh = new THREE.Mesh(eyesGeometry, eyeMaterial);
  const rightEyeMesh = new THREE.Mesh(eyesGeometry, eyeMaterial);
  
//POSITIONS & ROTATIONS
 


  
  
  leftWingMesh.rotation.x = Math.PI / 2;
  leftWingMesh.rotation.z = Math.PI;
  leftWingMesh.position.set(0,.5,-1.65);
  rightWingMesh.rotation.x = Math.PI / 2;
  rightWingMesh.position.set(0,.5,1.65);


  leftFootMesh.position.set(1.7,-2.9,-0.5);
  rightFootMesh.position.set(1.7,-2.9,0.5);

  beakMeshUp.position.set(2,1.7,0);
  beakMeshUp.rotation.z=4.5;
  beakMeshUp.rotation.x=-1.5;
  bellyMesh.position.set(1.1,-.7,0);
  
  
  leftEyeMesh.position.set(1.5,2.5,0.6);
  rightEyeMesh.position.set(1.5,2.5,-0.6);


  tailMesh.position.set(-2,-2.8,0)


const groupedHead = new THREE.Group();
groupedHead.add(beakMeshUp);
groupedHead.add(leftEyeMesh);
groupedHead.add(rightEyeMesh);



  // Add the body and head meshes to the `Chicken` object
  this.mesh.add(bodyMesh);
  this.mesh.add(groupedHead);
  this.mesh.add(bellyMesh);
  this.mesh.add(leftWingMesh);
  this.mesh.add(rightWingMesh);
  this.mesh.add(leftFootMesh);
  this.mesh.add(rightFootMesh);
  this.mesh.add(tailMesh);



  var tic = 0;
  var toc = 0;
  var ticMax = 20;
  var tocMax = 20;

  this.setTicToc = function(t1){
    ticMax = t1;
    tocMax = t1;
    console.log(this.tocMax);
  }

  this.animationUp = function(){

    
  if(tic<ticMax){
    
    toc = 0;
    this.moveWingsUp();
    this.moveFeetUp();
    //this.moveLegsUp();
  tic++;
  }
  else if(toc<tocMax){
    
    this.animationDown();
    
    toc++;
  
  }
  else{tic=0;}
  }

  


  this.animationDown = function(){
    this.moveWingsDown();
    this.moveFeetDown();
    //this.moveLegsDown();
  }


  this.moveWingsUp = function(){
    
      leftWingMesh.rotation.x += 20.5*0.0005;
      leftWingMesh.position.z -= 12.5*0.0005;

      rightWingMesh.rotation.x -= 20.5*0.0005;
      rightWingMesh.position.z += 12.5*0.0005;
      
  }
  this.moveWingsDown = function(){
    
    leftWingMesh.rotation.x -= 20.5*0.0005;
    leftWingMesh.position.z += 12.5*0.0005;

    rightWingMesh.rotation.x += 20.5*0.0005;
    rightWingMesh.position.z -= 12.5*0.0005;
    
}

  this.moveFeetUp= function(){
    leftFootMesh.rotation.z += 8 * 0.0005;
    rightFootMesh.rotation.z += 8 * 0.0005;
    
    tailMesh.rotation.z -= 10 * 0.0005;
  
}

  this.moveFeetDown= function(){
    leftFootMesh.rotation.z -= 8 * 0.0005;
    rightFootMesh.rotation.z -= 8 * 0.0005;
    tailMesh.rotation.z += 10 * 0.0005;
  }

 


};













export var Chef = function() {
  this.mesh = new THREE.Object3D();




  const bodyGeometry = new THREE.BoxGeometry(3, 4, 2);
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const bodyMesh = new THREE.Mesh(bodyGeometry, material);
  const headGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
  const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFCDCD });
  const headMesh = new THREE.Mesh(headGeometry, headMaterial);

  // Position the head mesh on top of the body mesh
  headMesh.position.set(0, 3, 0);
  const armGeometry = new THREE.BoxGeometry(0.5, 3, 0.75);
  const armMaterial = new THREE.MeshPhongMaterial({ color: 0xFFCDCD });
  const leftArmMesh = new THREE.Mesh(armGeometry, armMaterial);

  // Position the left arm mesh on the side of the body mesh
  leftArmMesh.position.set(2, 1.25, 1);
  leftArmMesh.rotation.set(1.7,0,0);
  const rightArmMesh = new THREE.Mesh(armGeometry, armMaterial);

  // Position the right arm mesh on the other side of the body mesh
  rightArmMesh.position.set(-2, 2, 1);
  rightArmMesh.rotation.set(-2, 0, 0);

  const legGeometry = new THREE.BoxGeometry(0.75, 3.2, 0.5);
  const legMaterial = new THREE.MeshPhongMaterial({ color: 0xFFCDCD });
  const leftLegMesh = new THREE.Mesh(legGeometry, legMaterial);

  // Position the left leg mesh below the body mesh
  leftLegMesh.position.set(0.7, -3.25, 0);

  const rightLegMesh = new THREE.Mesh(legGeometry, legMaterial);

  // Position the right leg mesh below the body mesh
  rightLegMesh.position.set(-0.7, -3.25, 0);

  const hatGeometry = new THREE.CylinderBufferGeometry(.7,.7,1.5,6);
  const hatTopGeometry = new THREE.CylinderBufferGeometry(1,1,.8,5);

  const knifeGripGeometry = new THREE.BoxBufferGeometry(.2,.2,1.2);

  const bladeTexture = loader.load('./textures/blade.png');
  const bladeMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.08,1,2),
    new THREE.MeshPhongMaterial( { map: bladeTexture } )
  );




  const gripMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });

  const gripMesh = new THREE.Mesh(knifeGripGeometry,gripMaterial);
  
  const hatTopMesh = new THREE.Mesh(hatTopGeometry,material);
  const hatMesh = new THREE.Mesh(hatGeometry,material);
  hatMesh.position.set(0,4.5,0);
  hatTopMesh.position.set(0,5.5,0);

  gripMesh.rotation.x=2;
  bladeMesh.rotation.x=2;
  gripMesh.position.set(-2,3,2.5);
  bladeMesh.position.set(-2,3.8,3.3);

//grouping elements
  const groupedRightArm = new THREE.Group();
  groupedRightArm.add(rightArmMesh);
  groupedRightArm.add(gripMesh);
  groupedRightArm.add(bladeMesh);
  const groupedHeadChef = new THREE.Group();
  groupedHeadChef.add(headMesh);
  groupedHeadChef.add(hatMesh);
  groupedHeadChef.add(hatTopMesh);


  // Add the body, head, arms, and legs meshes to the `Dummy` object
  this.mesh.add(bodyMesh);
  this.mesh.add(leftArmMesh);
  this.mesh.add(groupedRightArm);
  this.mesh.add(leftLegMesh);
  this.mesh.add(rightLegMesh);
  this.mesh.add(groupedHeadChef);
 

  var tic = 0;
  var toc = 0;
  var ticMax = 20;
  var tocMax = 20;

  this.setTicToc = function(t1){
    ticMax = t1;
    tocMax = t1;
    console.log(this.tocMax);
  }

this.animationUp = function(){
  if(tic<ticMax){
    
    toc = 0;
    groupedHeadChef.rotation.x += .5 * 0.005;
    groupedRightArm.rotation.x -= 1.5 * 0.005;
    leftLegMesh.rotation.x +=1.7 * 0.005;
    leftLegMesh.position.z -=1.9 * 0.005;
    rightLegMesh.rotation.x -=1.7 * 0.005;
    rightLegMesh.position.z +=1.9 * 0.005;
    leftArmMesh.rotation.x -= 2.3 * 0.005;
  tic++;
  }
  else if(toc<tocMax){
    
    this.animationDown();
    
    toc++;
  
  }
  else{tic=0;}
  }
  
 


this.animationDown = function(){
  groupedHeadChef.rotation.x -= .5 * 0.005;
  groupedRightArm.rotation.x += 1.5 * 0.005;
  leftLegMesh.rotation.x -=1.7 * 0.005;
  rightLegMesh.rotation.x +=1.7 * 0.005;
  rightLegMesh.position.z -=1.9 * 0.005;
  leftLegMesh.position.z +=1.9 * 0.005;
  leftArmMesh.rotation.x += 2.3 * 0.005;
}

this.animationDied = function(){
  this.mesh.rotation.y += .5 *0.005;
}


};



