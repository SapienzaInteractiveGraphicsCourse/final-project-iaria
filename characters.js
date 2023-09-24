import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js'
import * as MODELS from './mscript.js'
import {resizeRendererToDisplaySize} from './functions.js'



function main() {
    
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  function makeCamera(fov = 29) {
    const aspect = 2;  // the canvas default
    const zNear = 0.1;
    const zFar = 1000;
    return new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
  }
  const camera = makeCamera();
  camera.position.set(8, 4, 10).multiplyScalar(3);
  camera.lookAt(0, 0, 0);



  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xCA2F2);


  var chicken = new MODELS.Chicken();
  var chef = new MODELS.Chef();
  var pig = new MODELS.Pig();
  var penguin = new MODELS.Penguin();
  chicken.mesh.position.set(0,0,0);
  //scene.add(chicken.mesh);
    chicken.setTicToc(60);
    chef.setTicToc(50);
    penguin.setTicToc(90);
  chef.mesh.position.set(50,0,0);
  pig.mesh.position.set(100,0,0);
  penguin.mesh.position.set(150,0,0);
 

  const group=new THREE.Group();
  group.add(chicken.mesh);
  group.add(chef.mesh);
  group.add(pig.mesh);
  group.add(penguin.mesh)
  scene.add(group);

  //starting showed character
  group.position.x=-0;
  
  
  
    const color = 0xFFFFFF;
    const intensity = 1.2;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(4, 5, 2);
    scene.add(light);

 
var rightPressed=false;
var leftPressed=false;
var selectedCharacter = 0;


    document.getElementById("button2").onclick=function(){
      rightPressed=true;

    };
    document.getElementById("button1").onclick= function(){
      leftPressed=true;
    };

  
    var temp = true;
  function render(time) {


    document.getElementById("playbutton").disabled=true;
    time *= 0.001;  // convert time to seconds

    if (resizeRendererToDisplaySize(renderer)) { //
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
   
    var s=selectedCharacter;
    
  localStorage.setItem("character", s);
  
    if (rightPressed){
        rightPressed = false;

    if (group.position.x==0){
        
        chicken.mesh.rotation.y=0;
        group.position.x =-50;
        
    }
    else if (group.position.x == -50){
        
        chef.mesh.rotation.y = 0;
        group.position.x = -100;
    }
    else if ( group.position.x = -100){

        pig.mesh.rotation.y = 0
        group.position.x = -150;
        console.log(group.position.x);
    }
    
}

    if (leftPressed){
        leftPressed = false;
        temp = true;
        if (group.position.x==-50){
           
            chef.mesh.rotation.y=0;
            group.position.x =-0;
        }
         if (group.position.x == -100){
            
            pig.mesh.rotation.y = 0;
            group.position.x = -50;
        }
        else if (group.position.x == -150){

            penguin.mesh.rotation.y = 0;
            group.position.x = -100;
            console.log(group.position.x);
        }
    }


    if (group.position.x == 0){
        
        document.getElementById("playbutton").disabled=false;
        chicken.mesh.rotation.y +=0.02;
        selectedCharacter = 0;
        
        chicken.animationUp();
        if (temp && chicken.mesh.position.y <5.5){
            chicken.mesh.position.y += 0.1;
            
        }
        else{
            
            temp = false;
            chicken.mesh.position.y -= 0.1;
            if (chicken.mesh.position.y < -1){temp = true}
        }
    }

    if (group.position.x == -50){
        document.getElementById("playbutton").disabled=false;
        chef.mesh.rotation.y +=0.02;
        selectedCharacter = 1;
        chef.animationUp();
        if (temp && chef.mesh.position.y <5.5){
            chef.mesh.position.y += 0.1;
            
        }
        else{
            
            
            temp = false;
            chef.mesh.position.y -= 0.1;
            if (chef.mesh.position.y < -1){temp = true}
        }
    }



    if (group.position.x == -100){
        document.getElementById("playbutton").disabled=false;
        selectedCharacter = 2;
        pig.mesh.rotation.y +=0.02;
        pig.animationUp();
        if (temp && pig.mesh.position.y <5.5){
            pig.mesh.position.y += 0.1;
            
        }
        else{
            //pig.animationDown();
            temp = false;
            pig.mesh.position.y -= 0.1;
            if (pig.mesh.position.y < -1){temp = true}
        }
    }

    if (group.position.x == -150){
      document.getElementById("playbutton").disabled=false;
      selectedCharacter = 3;
      penguin.mesh.rotation.y +=0.02;
      penguin.animationUp();
      if (temp && penguin.mesh.position.y <5.5){
        penguin.mesh.position.y += 0.1;
          
      }
      else{
          
          temp = false;
          penguin.mesh.position.y -= 0.1;
          if (penguin.mesh.position.y < -1){temp = true}
      }
  }
    


    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  
  requestAnimationFrame(render);
  

 

}
main();

