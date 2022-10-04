import * as THREE from "https://unpkg.com/three@0.108.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.108.0/examples/jsm/controls/OrbitControls.js";
<<<<<<< HEAD
import { TrackballControls } from "https://unpkg.com/three@0.108.0/examples/jsm/controls/TrackballControls.js";
// import Stats from 'https://unpkg.com/three@0.108.0/examples/jsm/libs/stats.module'
// import { KeyController } from "./keyController.js";
<<<<<<< HEAD
import { PointerLockControls } from "https://unpkg.com/three@0.108.0/examples/jsm/controls/PointerLockControls.js";
import { FontLoader } from "../loaders/FontLoader.js";
import { TextGeometry } from "../geometries/TextGeometry.js";
=======
import {PointerLockControls} from "https://unpkg.com/three@0.108.0/examples/jsm/controls/PointerLockControls.js";
=======
>>>>>>> 9675acd... organize code
import { FontLoader } from "../loaders/FontLoader.js";
import { TextGeometry } from '../geometries/TextGeometry.js';
>>>>>>> ef1839f... first commit

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

// const totalNum = 10; //전체 액자 갯수
const distance = 130; //액자 사이 거리

<<<<<<< HEAD
let totalNum;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b46e643... change gallery works
let scene, camera, renderer, controls;
let galleryGroup = new THREE.Group();
let galleryGroup2 = new THREE.Group();

const sw_work = [
    // {
    //     "image": "../image/sw/swimage01.png",
    //     "link": "../html/sw_Image01.html",
    //     "info" : '저자1 신기'
    // },
    {
<<<<<<< HEAD
        image: "https://source.unsplash.com/collection/0",
        link: "http://google.com",
    },
    {
        image: "https://source.unsplash.com/collection/1",
        link: "http://google.com",
    },
    {
        image: "https://source.unsplash.com/collection/2",
        link: "http://google.com",
    },
    {
        image: "https://source.unsplash.com/collection/3",
        link: "http://google.com",
    },
    {
        image: "https://source.unsplash.com/collection/4",
        link: "http://google.com",
    },
    {
        image: "https://source.unsplash.com/collection/5",
        link: "http://google.com",
    },
    {
        image: "https://source.unsplash.com/collection/6",
        link: "http://google.com",
    },
    {
        image: "https://source.unsplash.com/collection/7",
        link: "http://google.com",
    },
];

const init = () => {
=======
let scene, camera, renderer, controls
=======
let scene, camera, renderer, controls;
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
let galleryGroup = new THREE.Group();
let galleryGroup2 = new THREE.Group();

const workArr = [
    {
        "image": "https://source.unsplash.com/collection/0",
=======
        "image": "../image/sw/swimage02.png",
>>>>>>> b46e643... change gallery works
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/sw/swimage03.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/sw/swimage04.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/sw/swimage05.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/sw/swimage06.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/sw/swimage07.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/sw/swimage08.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    }
];
const hw_work = [
    {
        "image": "../image/hw/hwimage01.png",
        "link": "../html/hw_Image01.html",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/hw/hwimage02.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/hw/hwimage03.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/hw/hwimage04.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/hw/hwimage05.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/hw/hwimage06.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    // {
    //     "image": "../image/hw/hwimage07.png",
    //     "link": "http://google.com",
    //     "info" : '저자1 신기'
    // },
    {
        "image": "../image/hw/hwimage08.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    // {
    //     "image": "../image/hw/hwimage09.png",
    //     "link": "http://google.com",
    //     "info" : '저자1 신기'
    // },
    {
        "image": "../image/hw/hwimage10.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    {
        "image": "../image/hw/hwimage11.png",
        "link": "http://google.com",
        "info" : '저자1 신기'
    },
    // {
    //     "image": "../image/hw/hwimage12.png",
    //     "link": "http://google.com",
    //     "info" : '저자1 신기'
    // }
];

const stotalNum = sw_work.length; //전체 박스 갯수
const htotalNum = hw_work.length;
const wallWidth = distance * stotalNum + distance;
const wallWidth2 = distance * htotalNum + distance;

const init = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    
<<<<<<< HEAD
    if(keys['w']){
        controls.moveForward(.1);
    }else if(keys['s']){
        controls.moveForward(-.1);
    }else if(keys['a']){
        controls.moveRight(-.1);
    }else if(keys['d']){
        controls.moveRight(-.1);
    }
>>>>>>> ef1839f... first commit
=======
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
=======
>>>>>>> 9675acd... organize code
    totalNum = workArr.length - 1; //전체 박스 갯수
=======
>>>>>>> b46e643... change gallery works

    scene = new THREE.Scene();

<<<<<<< HEAD
    scene.background = new THREE.Color("#969e9e"); //배경 컬러
    camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT, 0.1, 1000);
    camera.position.set(220, 50, 220);

    renderer = new THREE.WebGLRenderer({ antialias: true });
=======
    scene.background = new THREE.Color("#99B1F0"); //배경 컬러
    camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT, 10, 2000);
    camera.position.set(300, 50, 300);

    renderer = new THREE.WebGLRenderer({ antialias: true});
>>>>>>> ef1839f... first commit
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap; //PCFShadowMap
    //그림자 활성화

    document.querySelector("#canvasWrap").appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);

    const axes = new THREE.AxesHelper(150);
    scene.add(axes);

    // const gridHelper = new THREE.GridHelper(240, 20);
    // scene.add(gridHelper);

    //조명 넣기
<<<<<<< HEAD
    var light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.45);
    light.position.set(0, 70, -50);
    scene.add(light);

    var light2 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.45);
    light2.position.set(-50, 70, 0);
    scene.add(light2);

    const helper = new THREE.HemisphereLightHelper(light, 5);
    scene.add(helper);
    const helper2 = new THREE.HemisphereLightHelper(light2, 5);
    scene.add(helper2);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.keyPanSpeed = 15;

    {
        //가벽 만들기
        const imageMap = new THREE.TextureLoader().load(
            "../image/hardwood.jpg"
        );
=======
    var light = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFF, 0.45);
    light.position.set(0, 80, -50);
    scene.add(light);

    var light2 = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFF, 0.45);
    light2.position.set(-50, 80, 0);
    scene.add(light2);

    const helper = new THREE.HemisphereLightHelper( light, 5 );
    scene.add( helper );
    const helper2 = new THREE.HemisphereLightHelper( light2, 5 );
    scene.add( helper2 );

    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance=1000;
    // controls.maxPolarAngle = Math.PI / 3; // 수직 궤도
    controls.keyPanSpeed=20;


    {
        //가벽 만들기
        const imageMap = new THREE.TextureLoader().load("../image/hardwood.jpg");
>>>>>>> ef1839f... first commit

        imageMap.wrapS = THREE.RepeatWrapping;
        imageMap.wrapT = THREE.RepeatWrapping;
        imageMap.repeat.set(10, 4);

<<<<<<< HEAD
        wallWidth = distance * totalNum + distance;
<<<<<<< HEAD
        const geometry = new THREE.BoxGeometry(wallWidth, 100, 2); //x,y,z(두께)
        const material = new THREE.MeshPhongMaterial({
            // map: imageMap,
<<<<<<< HEAD
            color: "#f5f2f3",
        });
        const wallMesh = new THREE.Mesh(geometry, material);
        wallMesh.position.set(0, 0, -wallWidth / 2);
=======
            color: 0xF4FAB1,
        });
=======
=======
        
>>>>>>> b46e643... change gallery works
        const geometry = new THREE.BoxGeometry(wallWidth, 150, 2); //x,y,z(두께)
        const material = new THREE.MeshPhongMaterial({color: 0xF4FAB1});
>>>>>>> 9675acd... organize code
        const wallMesh = new THREE.Mesh(geometry, material);
<<<<<<< HEAD
        wallMesh.position.set(0, 0, -wallWidth/2);
>>>>>>> ef1839f... first commit
=======
        wallMesh.position.set(0, 0, -wallWidth2/2);
>>>>>>> b46e643... change gallery works
        //액자 시작 x축 원점(제어유용), 두께가 2니까 뒤로 좀 빼줌
        wallMesh.receiveShadow = true; //그림자 표시
        // wallMesh.castShadow = true; //그림자 발생
        galleryGroup.add(wallMesh);
        scene.add(galleryGroup);

        
        const geometry2 = new THREE.BoxGeometry(2, 150, wallWidth2);
        const wallMesh2 = new THREE.Mesh(geometry2, material);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        wallMesh2.position.set(-wallWidth / 2, 0, 0);
=======
        // wallMesh2.rotateX(90)
        // wallMesh2.rotateY(90)
        // wallMesh2.rotateZ(10)
=======
    
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
=======
>>>>>>> 9675acd... organize code
        wallMesh2.position.set(-wallWidth/2, 0, 0);
>>>>>>> ef1839f... first commit
        //액자 시작 x축 원점(제어유용), 두께가 2니까 뒤로 좀 빼줌
        wallMesh2.receiveShadow = true; //그림자 표시
        // wallMesh.castShadow = true; //그림자 발생
        galleryGroup2.add(wallMesh2);
        scene.add(galleryGroup2);
    }

    for (let i = 0; i < stotalNum; i++) {
        addBox(i); //액자 갯수만큼 생성
    }
    for (let i = 0; i < htotalNum; i++) {
        addBox2(i); //액자 갯수만큼 생성
    }
    //바닥 그리기
    const floor = new THREE.Mesh(
<<<<<<< HEAD
<<<<<<< HEAD
        new THREE.BoxGeometry(wallWidth, 0.1, wallWidth),
        new THREE.MeshPhongMaterial({ color: 0xffffff })
=======
        new THREE.BoxGeometry(wallWidth, 0.1, wallWidth), 
=======
        new THREE.BoxGeometry(wallWidth, 0.1, wallWidth2), 
>>>>>>> b46e643... change gallery works
        new THREE.MeshPhongMaterial({color: 0xFFFFFF})
>>>>>>> ef1839f... first commit
    );
    floor.frustumCulled=false;
    floor.position.set(0, -75, 0);
    scene.add(floor);
    // floor.receiveShadow=true;

<<<<<<< HEAD
<<<<<<< HEAD
    //텍스트 로딩
    const fontLoader = new FontLoader();
    fontLoader.load("../font/Do Hyeon_Regular.json", (font) => {
        const geometry = new TextGeometry("졸업,작품전시회", {
            font: font,
            size: 45,
            height: 8,
        });
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const font3d = new THREE.Mesh(geometry, material);
        // font3d.position.set(-wallWidth/4+84,-50, -wallWidth/4)
        font3d.position.set(-200, -50, 50);
        // font3d.rotateZ(180)
        font3d.rotateY(44.7);
        scene.add(font3d);
    });
=======
    //문 그리기
    // const door = new THREE.Mesh(
    //     new THREE.BoxGeometry(60, 100, 2), 
    //     new THREE.MeshPhongMaterial({color: 0x000000})
    // );
    // scene.add(door);
    // door.rotateY(45)
    // door.position.set(100,0,100)

=======
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
    //텍스트 로딩
    const fontLoader = new FontLoader();
    fontLoader.load('../font/Do Hyeon_Regular.json', (font) => {
        const geometry = new TextGeometry(
            "졸업,작품전시회",
            {
                font:font,
                size:45,
                height:8,
            }
        );
        const material = new THREE.MeshBasicMaterial({color: 0xffffff});
        const font3d = new THREE.Mesh(geometry, material);
        // font3d.position.set(-wallWidth/4+84,-50, -wallWidth/4)
        font3d.position.set(-225,-70, 20)
        // font3d.rotateZ(180)
        font3d.rotateY(44.8)
        font3d.castShadow=true;
        font3d.receiveShadow=true;
        scene.add(font3d);
    })
<<<<<<< HEAD
>>>>>>> ef1839f... first commit
=======
    fontLoader.load('../font/Do Hyeon_Regular.json', (font) => {
        const geometry = new TextGeometry(
            "SW→",
            {
                font:font,
                size:15,
                height:0,
            }
        );
        const material = new THREE.MeshBasicMaterial({color: 0x000000});
        const swfont = new THREE.Mesh(geometry, material);
        // font3d.position.set(-wallWidth/4+84,-50, -wallWidth/4)
        swfont.position.set(-wallWidth/2+40, 40, -wallWidth2/2+15)
        // font3d.rotateZ(180)
        swfont.castShadow=true;
        swfont.receiveShadow=true;
        scene.add(swfont);
    })
    fontLoader.load('../font/Do Hyeon_Regular.json', (font) => {
        const geometry = new TextGeometry(
            "WH→",
            {
                font:font,
                size:15,
                height:0,
            }
        );
        const material = new THREE.MeshBasicMaterial({color: 0x000000});
        const hwfont = new THREE.Mesh(geometry, material);
        // font3d.position.set(-wallWidth/4+84,-50, -wallWidth/4)
        hwfont.position.set(-wallWidth/2+15, 40, -wallWidth2/2+40)
        // hwfont.rotateX(90)
        hwfont.rotateY(29.85)
        // hwfont.rotateZ(55)
        hwfont.castShadow=true;
        hwfont.receiveShadow=true;
        scene.add(hwfont);
    })
>>>>>>> b46e643... change gallery works
};

//액자 추가
const addBox = (i) => {
<<<<<<< HEAD
    // const imageMap = new THREE.TextureLoader().load(
<<<<<<< HEAD
    // "https://source.unsplash.com/collection/" + i, //이미지 랜덤으로 뿌려줌
=======
        // "https://source.unsplash.com/collection/" + i, //이미지 랜덤으로 뿌려줌 
>>>>>>> ef1839f... first commit
    // );
    const imageMap = new THREE.TextureLoader().load(workArr[i].image);
    console.log(imageMap);
<<<<<<< HEAD
    const geometry = new THREE.BoxGeometry(40, 28, 1);
<<<<<<< HEAD
    const material = new THREE.MeshPhongMaterial({ map: imageMap });
    const boxMesh = new THREE.Mesh(geometry, material);
    boxMesh.castShadow = true;
    let x = -(wallWidth / 2) + (i + 1) * distance;
=======
=======
    const geometry = new THREE.BoxGeometry(52, 35, 2);
>>>>>>> 9675acd... organize code
=======
    const imageMap = new THREE.TextureLoader().load(sw_work[i].image);
    console.log(imageMap);
    const geometry = new THREE.BoxGeometry(40, 50, 2);
>>>>>>> b46e643... change gallery works
    const material = new THREE.MeshPhongMaterial({map: imageMap});
    const boxMesh = new THREE.Mesh(geometry, material);
    boxMesh.castShadow = true;
    let x = -(wallWidth/2)+ (i+1) * distance;
>>>>>>> ef1839f... first commit
    // let x = (wallWidth/workArr.length)*i
    console.log(x);
    let y = 8; //Math.random() * 40 - 5;
    let z = 0;
<<<<<<< HEAD
<<<<<<< HEAD
    boxMesh.position.set(x, y, -wallWidth / 2 + 2);
    boxMesh.name = "workofArt_${i}";
=======
    boxMesh.position.set(x, y, -wallWidth/2+2);
    boxMesh.name = 'workofArt_${i}';
>>>>>>> ef1839f... first commit
    boxMesh.link = workArr[i].link;
    boxMesh.info = workArr[i].info;
    galleryGroup.add(boxMesh);

    const geometry2 = new THREE.BoxGeometry(2, 35, 52);
    const boxMesh2 = new THREE.Mesh(geometry2, material);
    boxMesh2.castShadow = true;
<<<<<<< HEAD
    boxMesh2.position.set(-wallWidth / 2 + 2, y, x);
    boxMesh2.name = "workofArt_${i}";
=======
    boxMesh2.position.set(-wallWidth/2+2, y, x);
    boxMesh2.name = 'workofArt_${i}';
>>>>>>> ef1839f... first commit
    boxMesh2.link = workArr[i].link;
    boxMesh2.info = workArr[i].info;
    galleryGroup2.add(boxMesh2);

=======
    boxMesh.position.set(x, y, -wallWidth2/2+2);
    boxMesh.name = 'workofArt_${i}';
    boxMesh.link = sw_work[i].link;
    boxMesh.info = sw_work[i].info;
    galleryGroup.add(boxMesh);

>>>>>>> b46e643... change gallery works
    //조명 넣기
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(x, 34, 12 - wallWidth / 2 + 20);
=======
    // const light = new THREE.PointLight( 0xffffff, 1, 50 );
    // light.position.set( -50, 34, 0 );
    // scene.add( light );
=======
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
 
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(x, 34, 12-wallWidth/2+20);
>>>>>>> ef1839f... first commit
    spotLight.angle = Math.PI / 5; //조명 범위
=======
    const spotLight = new THREE.SpotLight(0xffffff, 1);
<<<<<<< HEAD
    spotLight.position.set(x, 45, 12-wallWidth/2+20);
    spotLight.angle = Math.PI / 4; //조명 범위
>>>>>>> 9675acd... organize code
=======
    spotLight.position.set(x, 55, 12-wallWidth2/2+20);
    spotLight.angle = Math.PI / 4.5; //조명 범위
>>>>>>> b46e643... change gallery works
    spotLight.penumbra = 0.1; //조명 경계 정도
    spotLight.decay = 1.2; //조명 투명도
    spotLight.distance = 70;
    spotLight.target = boxMesh;
    spotLight.castShadow = true;

    galleryGroup.add(spotLight);

    // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);
    
};
const addBox2 = (i)=>{

    const imageMap2 = new THREE.TextureLoader().load(hw_work[i].image);
    const geometry2 = new THREE.BoxGeometry(2, 35, 52);
    const material2 = new THREE.MeshPhongMaterial({map: imageMap2});
    const boxMesh2 = new THREE.Mesh(geometry2, material2);
    boxMesh2.castShadow = true;
    let x = -(wallWidth2/2)+ (i+1) * distance;
    let y = 8; //Math.random() * 40 - 5;
    let z = 0;
    boxMesh2.position.set(-wallWidth/2+2, y, x);
    boxMesh2.name = 'workofArt_${i}';
    boxMesh2.link = hw_work[i].link;
    boxMesh2.info = hw_work[i].info;
    galleryGroup2.add(boxMesh2);

    const spotLight2 = new THREE.SpotLight(0xffffff, 1);
<<<<<<< HEAD
<<<<<<< HEAD
    spotLight2.position.set(12 - wallWidth / 2 + 20, 34, x);
=======
    spotLight2.position.set(12-wallWidth/2+20, 34, x);
>>>>>>> ef1839f... first commit
    spotLight2.angle = Math.PI / 5; //조명 범위
=======
    spotLight2.position.set(12-wallWidth/2+20, 45, x);
    spotLight2.angle = Math.PI / 4; //조명 범위
>>>>>>> 9675acd... organize code
    spotLight2.penumbra = 0.1; //조명 경계 정도
    spotLight2.decay = 1.2; //조명 투명도
    spotLight2.distance = 70;
    spotLight2.target = boxMesh2;
    spotLight2.castShadow = true;

    galleryGroup2.add(spotLight2);

    // const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
    // scene.add(spotLightHelper2);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
    // https://threejs.org/examples/#webgl_lights_spotlight

};
// function initTrackballControls(camera, renderer) {
//     var trackballControls = new TrackballControls(camera, renderer.domElement);
//     trackballControls.rotateSpeed = 1.0;
//     trackballControls.zoomSpeed = 1.2;
//     trackballControls.panSpeed = 0.8;
//     trackballControls.noZoom = false;
//     trackballControls.noPan = false;
//     trackballControls.staticMoving = true;
//     trackballControls.dynamicDampingFactor = 0.3;
//     trackballControls.keys = [65, 83, 68];

//     return trackballControls;
// }

// const clickFunc = (event) => {
//     // console.log(event.pageX);
//     if (event.pageX < WIDTH / 2) {
//         // console.log("좌");
//         if (pageNum > 0) { //첫번째 페이지에서 전으로 더 넘어가지 못함
//             pageNum -= 1; 
//         }
//     } else {
//         // console.log("우");
//         if (pageNum < totalNum - 1) { //마지막페이지에서 더 넘어가지 못함
//             pageNum += 1;
//         }
//     }
//     // console.log("pageNum :" + pageNum);
//     targetNum = - (pageNum * distance);
// };

// const scrollFunc = (event) => {
//     console.log(event.deltaY); //deltyY : 마우스휠 Y축(상하) 스크롤량 반환
//     if (event.deltaY == 100) { //액자 사이 거리만큼 움직여야함
//         if (pageNum > 0) {
//             pageNum -= 1;
//         }
//     } else {
//         if (pageNum < totalNum) {
//             pageNum += 1;
//         }
//     }
//     targetNum = -(pageNum * distance);
//     console.log(pageNum)
// };
>>>>>>> ef1839f... first commit
=======
=======
    
>>>>>>> 9675acd... organize code
=======
>>>>>>> b46e643... change gallery works
};
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const onPointerMove = (event) => {
    pointer.x = (event.clientX / WIDTH) * 2 - 1; //카메라와 마우스 위치 맞춤
    pointer.y = -(event.clientY / HEIGHT) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    // 레이저 닿는 녀석 찾기
    const intersects = raycaster.intersectObjects(galleryGroup.children);
    const intersects2 = raycaster.intersectObjects(galleryGroup2.children);

    // 마우스 오버가 된 녀석들은 빨간색으로
    // for (let i = 0; i < intersects.length; i++) {
    //     intersects[i].object.material.color.set(0xff0000);
    // }

    if (intersects.length > 0 || intersects2.length > 0) {
<<<<<<< HEAD
<<<<<<< HEAD
        if (intersects[1] != null || intersects2[1] != null) {
            document.querySelector("body").style.cursor = "pointer";
            console.log(intersects2);
        } else {
            document.querySelector("body").style.cursor = "auto";
        }
    } else {
        document.querySelector("body").style.cursor = "auto";
        // console.log(galleryGroup.children)
        //닿았을 때만 변경 아니면 다시 돌아옴, 빼면 바뀐상태 유지
    } //마우스 닿으면 커서 포인터로 바뀜(바디 태그 변경)
=======
        if (intersects[1] != null || intersects2[1] != null){
=======
        if (intersects[1] != null){
            document.querySelector("body").style.cursor = "pointer";
            console.log(intersects[0].object.info)
        }
        else if(intersects2[1] != null){
>>>>>>> 9675acd... organize code
            document.querySelector("body").style.cursor = "pointer";
        }
        else{
            document.querySelector("body").style.cursor = "auto";
        }
    } else {
        document.querySelector("body").style.cursor = "auto"; 
    }//마우스 닿으면 커서 포인터로 바뀜(바디 태그 변경)
>>>>>>> ef1839f... first commit
};

const onDocumentMouseDown = (event) => {
    const vector = new THREE.Vector3(pointer.x, pointer.y, 0.05);

    vector.unproject(camera);
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(galleryGroup.children);
    const intersects2 = raycaster.intersectObjects(galleryGroup2.children);

    if (intersects.length > 0 || intersects2.length > 0) {
<<<<<<< HEAD
        if (intersects[1] != null) {
=======
        if (intersects[1] != null){
>>>>>>> ef1839f... first commit
            const item = intersects[0].object;
            const itemName = item.name;
            window.open(item.link, "_blank");
            // console.log(item.link);
            controls.reset(controls.saveState());
<<<<<<< HEAD
        } else if (intersects2[1] != null) {
=======
        }
        else if(intersects2[1] != null){
>>>>>>> ef1839f... first commit
            const item2 = intersects2[0].object;
            window.open(item2.link, "_blank");
            controls.reset(controls.saveState());
        }
    }
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
// const onKeyDown = (event) => {

//     switch ( event.code ) {

//         case 'ArrowUp':
//         case 'KeyW': controls.moveForward = true; break;

//         case 'ArrowDown':
//         case 'KeyS': controls.moveBackward = true; break;

//         case 'ArrowLeft':
//         case 'KeyA': controls.moveLeft = true; break;

//         case 'ArrowRight':
//         case 'KeyD': controls.moveRight = true; break;

//         // case 'KeyC': controls.crouch = true; break;
//         // case 'Space': controls.jump = true; break;
//         // case 'ControlLeft':
//         // case 'ControlRight': controls.attack = true; break;

//     }

// }
// const onKeyUp = (event) => {

//     switch ( event.code ) {

//         case 'ArrowUp':
//         case 'KeyW': controls.moveForward = false; break;

//         case 'ArrowDown':
//         case 'KeyS': controls.moveBackward = false; break;

//         case 'ArrowLeft':
//         case 'KeyA': controls.moveLeft = false; break;

//         case 'ArrowRight':
//         case 'KeyD': controls.moveRight = false; break;

//         // case 'KeyC': controls.crouch = false; break;
//         // case 'Space': controls.jump = false; break;
//         // case 'ControlLeft':
//         // case 'ControlRight': controls.attack = false; break;

//     }

// }

const keydown=(e)=>{
    keys[e.key]=true;
}
const keyup=(e)=>{
    keys[e.key]=false;
}
>>>>>>> ef1839f... first commit
=======
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)

const stageResize = () => {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    camera.updateProjectionMatrix();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    renderer.setPixelRatio(window.devicePixelRatio);
=======
>>>>>>> ef1839f... first commit
=======
    renderer.setPixelRatio(window.devicePixelRatio);
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
=======
>>>>>>> 9675acd... organize code
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
};
const animate = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    controls.update();
>>>>>>> 9675acd... organize code
    // camera.lookAt(scene.position);
=======
    // controls.update();
    moveX += (targetNum - moveX) * 0.05;
    // galleryGroup.position.x = moveX;
    
    camera.lookAt(scene.position);
>>>>>>> ef1839f... first commit
=======
    // camera.lookAt(scene.position);
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

<<<<<<< HEAD
<<<<<<< HEAD
init();
animate();
window.addEventListener("resize", stageResize);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("mousedown", onDocumentMouseDown);
=======
const update = (time)=>{
    const boxTime = time * .0001;
    const boxPosition = new THREE.Vector3();
    const boxNextPosition = new THREE.Vector2();
    
    this.path.getPointAt(boxTime % 1, boxPosition);
    this.path.getPointAt((boxTime + 0.01) % 1, boxNextPosition);
    
    this.boxMesh.position.set(boxPosition.x, 0, boxPosition.y);
    this.boxMesh.lookAt(boxNextPosition.x, 0, boxNextPosition.y);
}


=======
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
init();
animate();
window.addEventListener("resize", stageResize);
window.addEventListener("pointermove", onPointerMove);
<<<<<<< HEAD
window.addEventListener("mousedown", onDocumentMouseDown);
<<<<<<< HEAD
renderer.domElement.addEventListener('keydown', keydown);
renderer.domElement.addEventListener('keyup', keyup);
// document.addEventListener('keydown', onKeyDown);
// document.addEventListener( 'keyup', onKeyUp );
// controls.addEventListener('lock',function(){
//     console.log('lock');
// });
// controls.addEventListener('unlock',function(){
//     console.log('lock');
// });
>>>>>>> ef1839f... first commit
=======
>>>>>>> a35e401... 카메라 이동 수정(원점으로 향하는 문제 해결)
=======
window.addEventListener("mousedown", onDocumentMouseDown);
>>>>>>> 9675acd... organize code
