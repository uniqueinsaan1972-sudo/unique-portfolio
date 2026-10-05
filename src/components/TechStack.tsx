import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
  "/images/node2.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const IS_SMALL = typeof window !== "undefined" && window.innerWidth < 768;
const SPHERE_COUNT = IS_SMALL ? 15 : 30;
const sphereData = [...Array(SPHERE_COUNT)].map((_, i) => ({
  scale: [0.52, 0.68, 0.58, 0.74, 0.62][i % 5],
  basePos: [
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 11,
    (Math.random() - 0.5) * 6,
  ] as [number, number, number],
  speed: 0.7 + Math.random() * 0.7,
  phase: Math.random() * Math.PI * 2,
}));

function FloatingSphere({
  scale,
  basePos,
  speed,
  phase,
  material,
}: {
  scale: number;
  basePos: [number, number, number];
  speed: number;
  phase: number;
  material: THREE.MeshPhysicalMaterial;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const currentPos = useRef(new THREE.Vector3(basePos[0] * 2.2, basePos[1] * 2.2, basePos[2] * 2.2));
  const velocity = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    delta = Math.min(0.1, delta);

    // 1. Subtle gentle bobbing in place within the central cluster
    const gentleBobX = Math.sin(t * speed * 0.7 + phase) * 0.7;
    const gentleBobY = Math.cos(t * speed * 0.5 + phase) * 0.5;
    const gentleBobZ = Math.sin(t * 0.4 + phase) * 0.4;

    // Target is a tight central cluster around origin (0,0,0)
    const targetX = basePos[0] * 0.12 + gentleBobX;
    const targetY = basePos[1] * 0.12 + gentleBobY;
    const targetZ = basePos[2] * 0.12 + gentleBobZ;

    // 2. Mouse cursor hover reaction (Scatters ONLY when hovering)
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    const dx = currentPos.current.x - mouseX;
    const dy = currentPos.current.y - mouseY;
    const distSq = dx * dx + dy * dy;
    const mouseRadius = 4.5;

    if (distSq < mouseRadius * mouseRadius && distSq > 0.001) {
      const dist = Math.sqrt(distSq);
      const pushForce = (1 - dist / mouseRadius) * 16;
      velocity.current.x += (dx / dist) * pushForce * delta;
      velocity.current.y += (dy / dist) * pushForce * delta;
    }

    // 3. Strong spring pulling all balls into the single tight central cluster
    velocity.current.x += (targetX - currentPos.current.x) * 3.6 * delta;
    velocity.current.y += (targetY - currentPos.current.y) * 3.6 * delta;
    velocity.current.z += (targetZ - currentPos.current.z) * 3.6 * delta;

    // Smooth Damping
    velocity.current.multiplyScalar(0.89);

    // Apply position & gentle rotation
    currentPos.current.add(velocity.current);

    meshRef.current.position.copy(currentPos.current);
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      geometry={sphereGeometry}
      material={material}
      castShadow
      receiveShadow
    />
  );
}

const TechStack = () => {
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  // Pause rendering while the section is off screen (saves battery on phones)
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="techstack" ref={wrapRef}>
      <h2>My Techstack</h2>

      <Canvas
        shadows={!IS_SMALL}
        frameloop={visible ? "always" : "never"}
        dpr={[1, IS_SMALL ? 1 : 1.25]}
        gl={{ alpha: true, stencil: false, depth: false, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1.2} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        {sphereData.map((data, i) => (
          <FloatingSphere
            key={i}
            {...data}
            material={materials[i % materials.length]}
          />
        ))}
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
      </Canvas>
    </div>
  );
};

export default TechStack;
