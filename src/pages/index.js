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

    // OPENING SCULPTURE -----------------------------------------------------------
    loader.load('./assets/Charisma_Body.gltf', (gltf) => {
      const spotLight = new THREE.SpotLight(0x54A4DB, 0.1);
      spotLight.castShadow = true;
      spotLight.position.y = 70;
      spotLight.position.x = 10;
      scene.add(spotLight);

      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.position.setZ(-35)
      gltf.scene.position.setY(-22)
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

    // ABOUT ME SCULPTURE -----------------------------------------------------------
    loader.load('./assets/Intelligence_Head.gltf', (gltf) => {
      const spotLight = new THREE.SpotLight(0x54A4DB, 0.5);
      spotLight.castShadow = true;
      spotLight.position.y = 208;
      spotLight.position.x = 10;
      scene.add(spotLight);

      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.position.setZ(-35)
      gltf.scene.position.setY(50)
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

    // SKILLS SCULPTURE -----------------------------------------------------------
    loader.load('./assets/Repair_Body.gltf', (gltf) => {
      const spotLight = new THREE.SpotLight(0x54A4DB, 1);
      spotLight.castShadow = true;
      spotLight.position.y = 346;
      spotLight.position.x = 10;
      scene.add(spotLight);

      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.position.setZ(-35)
      gltf.scene.position.setY(244)
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

    // PROJECTS SCULPTURE -----------------------------------------------------------
    loader.load('./assets/Science_Body.gltf', (gltf) => {
      const spotLight = new THREE.SpotLight(0x54A4DB, 1.5);
      spotLight.castShadow = true;
      spotLight.position.y = 484;
      spotLight.position.x = 10;
      scene.add(spotLight);

      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.position.setZ(-35)
      gltf.scene.position.setY(402)
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

    // CONTACT SCULPTURE -----------------------------------------------------------
    loader.load('./assets/Speech_Body.gltf', (gltf) => {
      const spotLight = new THREE.SpotLight(0x54A4DB, 2);
      spotLight.castShadow = true;
      spotLight.position.y = 622;
      spotLight.position.x = 10;
      scene.add(spotLight);

      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.position.setZ(-35)
      gltf.scene.position.setY(550)
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

    // CREDITS SCULPTURE -----------------------------------------------------------
    loader.load('./assets/Weapons.gltf', (gltf) => {

      gltf.scene.scale.set(1.5, 1.5, 1.5);
      gltf.scene.position.setZ(-35)
      gltf.scene.position.setY(715)
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

      camera.position.y = t * -0.16;
    }
    document.body.onscroll = moveCamera;
    moveCamera();

    // SCROLL TO TARGET DIV
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

    // Get the "copy-link" element
    var copyLink = document.getElementById("copy-link");

    // Add a click event listener to the element
    copyLink.addEventListener("click", function () {
      // Get the text to be copied
      var text = copyLink.innerHTML;

      // Create a new ClipboardItem object
      var clipboardItem = new ClipboardItem({ "text/plain": new Blob([text], { type: "text/plain" }) });

      // Use the clipboard.write() method to copy the text to the clipboard
      navigator.clipboard.write([clipboardItem]).then(
        function () {
          // The text was successfully copied to the clipboard
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500);
        },
        function (err) {
          // There was an error copying the text to the clipboard
          console.error("Error copying text to clipboard: " + err);
        }
      );
    });

  }, []);

  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <div id='canvasContainer'>
        <canvas id='canvas' />
        <main>

          <header id='top'>
            <h1>Jack Youkstetter</h1>
            {/* <h3>Web Developer</h3> */}
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
              Hey there!
              Bienviendos!
              Kafa halek?
              <br />
              <br />
              To ever-so-humbly introduce myself,
              I am a creative and a "Jack of all Trades" software engineer,
              with both jaw-dropping and mesmerizing web development
              abilities.
              <br />
              <br />
              Need a stunning 3D landing page?
              I Gotchu.
              <br />
              Backend architecture needs some fixin' up?
              I Gotchu.
              <br />
              Consulting?
              I Gotchu.
              <br />
              Want me on your team?
              I maybe gotchu it depends.
            </p>
            <a href='#skills' style={{ fontSize: 'large' }}>Next</a>
          </section>

          <section id='skills'>
            <h2>Skills</h2>
            <p>
              <span style={{ fontWeight: 'bolder', }}>Frontend Skills [lvl: expert]</span>
              <br />
              React, Nextjs, Threejs, CSS
              <br />
              <br />

              <span style={{ fontWeight: 'bolder', }}>Backend Skills [lvl: advanced]</span>
              <br />
              Node, GraphQL, Express, Firebase, Mongodb, SQL, Docker
              <br />

              <span style={{ fontWeight: 'bolder', }}>DataOps/ML Skills [lvl: noob]</span>
              <br />
              NumPy, Pandas, Tensorflow
              <br />
              <br />

              <span style={{ fontWeight: 'bolder', }}>Languages</span>
              <br />
              JavaScript, Python, Git
              <br />
              English (fluent), Spanish (working proficiency), Arabic (barely but learning nonetheless)
              <br />
              <br />

              <span style={{ fontWeight: 'bolder', }}>Soft Skills</span>
              <br />
              Team leadership, project management, and sales
              <br />
              <br />
            </p>
            <a href='#projects' style={{ fontSize: 'large' }}>Next</a>
          </section>

          <section id='projects'>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href='#contact' style={{ fontSize: 'large' }}>Next</a>
          </section>

          <section id='contact'>
            <h2>Contact</h2>
            <h1><a id='copy-link'>jackyoukstetter1@gmail.com</a></h1>
            {isCopied ? (<p>Copied!</p>) : <></>}
            <h2><a target='_blank' href='tel:15105080618'>(510) 508 - 0618</a></h2>
            <h4><a target='_blank' href='https://www.linkedin.com/in/jack-youkstetter-6b00a81a8/'>LinkedIn: @Jack Youkstetter</a></h4>
            <a href='#credits' style={{ fontSize: 'large' }}>Next</a>
          </section>

          <section id='credits'>
            <h2>Credits</h2>
            <p>
              Shout out to @Fragmaster on Thingiverse and Fallout 4 bobblehead design team for the 3d models used in this project.
            </p>
            <a href='#top' style={{ fontSize: 'large' }}>Top</a>
          </section>


          {/* <blockquote>
            <p>Thanks for watching!</p>
          </blockquote> */}


        </main>
      </div>
    </>
  );
}
