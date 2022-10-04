import * as THREE from "https://unpkg.com/three@0.108.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.108.0/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "../loaders/FontLoader.js";
import { TextGeometry } from '../geometries/TextGeometry.js';

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

// const totalNum = 10; //전체 액자 갯수
const distance = 130; //액자 사이 거리

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
        "image": "../image/sw/swimage02.png",
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

    scene = new THREE.Scene();

    scene.background = new THREE.Color("#99B1F0"); //배경 컬러
    camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT, 10, 2000);
    camera.position.set(300, 50, 300);

    renderer = new THREE.WebGLRenderer({ antialias: true});
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

        imageMap.wrapS = THREE.RepeatWrapping;
        imageMap.wrapT = THREE.RepeatWrapping;
        imageMap.repeat.set(10, 4);

        
        const geometry = new THREE.BoxGeometry(wallWidth, 150, 2); //x,y,z(두께)
        const material = new THREE.MeshPhongMaterial({color: 0xF4FAB1});
        const wallMesh = new THREE.Mesh(geometry, material);
        wallMesh.position.set(0, 0, -wallWidth2/2);
        //액자 시작 x축 원점(제어유용), 두께가 2니까 뒤로 좀 빼줌
        wallMesh.receiveShadow = true; //그림자 표시
        // wallMesh.castShadow = true; //그림자 발생
        galleryGroup.add(wallMesh);
        scene.add(galleryGroup);

        
        const geometry2 = new THREE.BoxGeometry(2, 150, wallWidth2);
        const wallMesh2 = new THREE.Mesh(geometry2, material);
        wallMesh2.position.set(-wallWidth/2, 0, 0);
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
        new THREE.BoxGeometry(wallWidth, 0.1, wallWidth2), 
        new THREE.MeshPhongMaterial({color: 0xFFFFFF})
    );
    floor.frustumCulled=false;
    floor.position.set(0, -75, 0);
    scene.add(floor);
    // floor.receiveShadow=true;

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
};

//액자 추가
const addBox = (i) => {
    const imageMap = new THREE.TextureLoader().load(sw_work[i].image);
    console.log(imageMap);
    const geometry = new THREE.BoxGeometry(40, 50, 2);
    const material = new THREE.MeshPhongMaterial({map: imageMap});
    const boxMesh = new THREE.Mesh(geometry, material);
    boxMesh.castShadow = true;
    let x = -(wallWidth/2)+ (i+1) * distance;
    // let x = (wallWidth/workArr.length)*i
    console.log(x);
    let y = 8; //Math.random() * 40 - 5;
    let z = 0;
    boxMesh.position.set(x, y, -wallWidth2/2+2);
    boxMesh.name = 'workofArt_${i}';
    boxMesh.link = sw_work[i].link;
    boxMesh.info = sw_work[i].info;
    galleryGroup.add(boxMesh);

    //조명 넣기
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(x, 55, 12-wallWidth2/2+20);
    spotLight.angle = Math.PI / 4.5; //조명 범위
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
    spotLight2.position.set(12-wallWidth/2+20, 45, x);
    spotLight2.angle = Math.PI / 4; //조명 범위
    spotLight2.penumbra = 0.1; //조명 경계 정도
    spotLight2.decay = 1.2; //조명 투명도
    spotLight2.distance = 70;
    spotLight2.target = boxMesh2;
    spotLight2.castShadow = true;

    galleryGroup2.add(spotLight2);

    // const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
    // scene.add(spotLightHelper2);
};

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
        if (intersects[1] != null){
            document.querySelector("body").style.cursor = "pointer";
            console.log(intersects[0].object.info)
        }
        else if(intersects2[1] != null){
            document.querySelector("body").style.cursor = "pointer";
        }
        else{
            document.querySelector("body").style.cursor = "auto";
        }
    } else {
        document.querySelector("body").style.cursor = "auto"; 
    }//마우스 닿으면 커서 포인터로 바뀜(바디 태그 변경)
};

const onDocumentMouseDown = (event) => {
    const vector = new THREE.Vector3(pointer.x, pointer.y, 0.05);

    vector.unproject(camera);
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(galleryGroup.children);
    const intersects2 = raycaster.intersectObjects(galleryGroup2.children);

    if (intersects.length > 0 || intersects2.length > 0) {
        if (intersects[1] != null){
            const item = intersects[0].object;
            const itemName = item.name;
            window.open(item.link, "_blank");
            // console.log(item.link);
            controls.reset(controls.saveState());
        }
        else if(intersects2[1] != null){
            const item2 = intersects2[0].object;
            window.open(item2.link, "_blank");
            controls.reset(controls.saveState());
        }
    }
};

const stageResize = () => {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
};
const animate = () => {
    controls.update();
    // camera.lookAt(scene.position);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

init();
animate();
window.addEventListener("resize", stageResize);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("mousedown", onDocumentMouseDown);