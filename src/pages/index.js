import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default function ComputerInception3D() {
  useEffect(() => {
    // SCENE -----------------------------------------------------------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // CAMERA -----------------------------------------------------------
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 80;
    camera.position.y = 5;


    const canvas = document.getElementById('canvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('#canvasContainer').appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);

    // LIGHTS -----------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);



    // Helpers
    // const lightHelper = new THREE.PointLightHelper(spotLight)
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper, gridHelper)

    // CONTROLS -----------------------------------------------------------
    // const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new GLTFLoader();

    // FIRST SCULPTURE -----------------------------------------------------------
    loader.load('./assets/Charisma_Body.gltf', (gltf) => {
      const spotLight = new THREE.SpotLight(0xffffff, 2);
      spotLight.castShadow = true;
      spotLight.position.y = 70;
      spotLight.position.x = 10;
      scene.add(spotLight);

      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.position.setZ(-35)
      gltf.scene.position.setY(-30)
      gltf.scene.position.setX(40)
      gltf.scene.rotateX(30)
      // gltf.scene.rotateY(110)

      scene.add(gltf.scene);

      const animate = () => {
        // updates
        // controls.update();
        gltf.scene.rotation.z += 0.01;

        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      }
      animate();
    });

    // if window resizes -----------------------------------------------------------
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', () => onWindowResize(), false);

    // ON SCROLL -----------------------------------------------------------
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;

      camera.position.y = t * -0.01;
    }
    document.body.onscroll = moveCamera;
    moveCamera();


  }, []);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));
        var targetPosition = target.getBoundingClientRect().top;
        var targetHeight = target.offsetHeight;
        var windowHeight = window.innerHeight;
        var offset = (targetPosition - (windowHeight / 2)) + (targetHeight / 2);

        window.scrollBy({
            top: offset,
            left: 0,
            behavior: 'smooth'
        });
    });
});


  return (
    <>
      <div id='canvasContainer'>
        <canvas id='canvas' />
        <main>

          <header>
            <h1>Jack Youkstetter</h1>
            <p>Web Developer</p>
            <div className='tableOfContents'>
              <a href='#about'>About Me</a>
              <a href='#skills'>Skills</a>
              <a href='#projects'>Projects</a>
              <a href='#contact'>Contact</a>
            </div>
          </header>


          <section id='about'>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          <section id='skills'>
            <h2>Skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          <section id='projects'>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          <section id='contact'>
            <h2>Contact</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>


          {/* <blockquote>
            <p>Thanks for watching!</p>
          </blockquote> */}


        </main>
      </div>
    </>
  );
}
