import useSpline from '@splinetool/r3f-spline'
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/4OObmHyHjYqaDpe9/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#b2e797']} />
      <group {...props} dispose={null}>
        <scene name="Scene">
            <OrbitControls/>
          <PerspectiveCamera
            name="Camera 2"
            makeDefault={false}
            far={10000}
            near={100}
            fov={45}
            position={[-1439.09, 1262.51, 1312.14]}
            rotation={[-0.74, -0.56, -0.45]}
          />
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={10000}
            near={10}
            fov={45}
            position={[-323.8, 682.67, 735.02]}
            rotation={[-0.77, -0.01, -0.01]}
            scale={1}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            position={[274.61, 586.79, 630.88]}
          />
          <group
            name="object_wcpaper"
            position={[-388.83, 121.68, -886.27]}
            rotation={[-Math.PI / 2, 0, -0.83]}
            scale={0.08}
          >
            <mesh
              name="insidepart"
              geometry={nodes.insidepart.geometry}
              material={materials['wood-red-light']}
              castShadow
              receiveShadow
              position={[-34.94, 72.83, 0.94]}
              rotation={[-Math.PI / 2, 0, -0.03]}
              scale={0.35}
            />
            <mesh
              name="paper"
              geometry={nodes.paper.geometry}
              material={materials.WC}
              castShadow
              receiveShadow
              position={[-34.9, 72.83, -0.35]}
              rotation={[-Math.PI / 2, 0, -0.03]}
              scale={0.75}
            />
            <mesh
              name="body"
              geometry={nodes.body.geometry}
              material={materials.WC}
              castShadow
              receiveShadow
              position={[-34.9, 72.83, -0.35]}
              rotation={[-Math.PI / 2, 0, -0.03]}
              scale={0.75}
            />
          </group>
          <group
            name="object_toilette"
            position={[-341.93, 49.59, -886.16]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.3, 0.3, 0.32]}
          >
            <mesh
              name="taptoptoilette"
              geometry={nodes.taptoptoilette.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-1.93, 131.44, -88.82]}
              scale={0.74}
            />
            <mesh
              name="water"
              geometry={nodes.water.geometry}
              material={materials.water}
              castShadow
              receiveShadow
              position={[-1.51, -26.49, 73.45]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={3.34}
            />
            <mesh
              name="hinge2"
              geometry={nodes.hinge2.geometry}
              material={materials.metal}
              castShadow
              receiveShadow
              position={[55.8, 20.09, -25.36]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.93}
            />
            <mesh
              name="hinge1"
              geometry={nodes.hinge1.geometry}
              material={materials.metal}
              castShadow
              receiveShadow
              position={[-61.6, 20.09, -25.36]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.93}
            />
            <mesh
              name="Merged Geometry"
              geometry={nodes['Merged Geometry'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, -19.26, 2.36]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={3.34}
            />
            <group name="metalchain" position={[103.94, 131.08, -104.84]} scale={0.87}>
              <mesh
                name="Cube 5"
                geometry={nodes['Cube 5'].geometry}
                material={materials.metal}
                castShadow
                receiveShadow
                position={[-1.59, -1.8, 15.94]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.61}
              />
              <mesh
                name="Cylinder 2"
                geometry={nodes['Cylinder 2'].geometry}
                material={materials.metal}
                castShadow
                receiveShadow
                position={[1.5, 0, -18.66]}
                rotation={[Math.PI / 2, -0.14, -Math.PI / 2]}
                scale={0.56}
              />
            </group>
          </group>
          <group name="pig 2" position={[-214.49, 58.16, 85.84]}>
            <group name="container" position={[0, -49.13, 0]}>
              <group name="rotator" position={[0, 49.13, 0]}>
                <mesh
                  name="Cube 9"
                  geometry={nodes['Cube 9'].geometry}
                  material={materials['Cube 9 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.27, 26.49, -29.52]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
                <group name="Group 6" position={[0.58, 23.43, -28.85]} rotation={[-2.91, -0.04, -3.13]} scale={0.27}>
                  <mesh
                    name="Shape 4"
                    geometry={nodes['Shape 4'].geometry}
                    material={materials['Shape 4 Material']}
                    castShadow
                    receiveShadow
                    position={[82.7, 10.8, -6.64]}
                    rotation={[-0.08, 0.17, 0.12]}
                    scale={1}
                  />
                  <mesh
                    name="Shape 3"
                    geometry={nodes['Shape 3'].geometry}
                    material={materials['Shape 3 Material']}
                    castShadow
                    receiveShadow
                    position={[-75.72, 12.09, -12.05]}
                    rotation={[-0.08, -0.35, -0.09]}
                    scale={1}
                  />
                </group>
                <mesh
                  name="Sphere 2"
                  geometry={nodes['Sphere 2'].geometry}
                  material={materials['Sphere 2 Material']}
                  castShadow
                  receiveShadow
                  position={[-12.18, 32.1, -25.04]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Sphere"
                  geometry={nodes.Sphere.geometry}
                  material={materials['Sphere Material']}
                  castShadow
                  receiveShadow
                  position={[8.47, 32.11, -25.9]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Cube 8"
                  geometry={nodes['Cube 8'].geometry}
                  material={materials['Cube 8 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.12, 20.54, -2.89]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
              </group>
            </group>
          </group>
          <group name="pig 3" position={[-310.92, 58.16, 221.65]}>
            <group name="container1" position={[0, -49.13, 0]}>
              <group name="rotator1" position={[0, 49.13, 0]}>
                <mesh
                  name="Cube 91"
                  geometry={nodes['Cube 91'].geometry}
                  material={materials['Cube 91 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.27, 26.49, -29.52]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
                <group name="Group 61" position={[0.58, 23.43, -28.85]} rotation={[-2.91, -0.04, -3.13]} scale={0.27}>
                  <mesh
                    name="Shape 41"
                    geometry={nodes['Shape 41'].geometry}
                    material={materials['Shape 41 Material']}
                    castShadow
                    receiveShadow
                    position={[82.7, 10.8, -6.64]}
                    rotation={[-0.08, 0.17, 0.12]}
                    scale={1}
                  />
                  <mesh
                    name="Shape 31"
                    geometry={nodes['Shape 31'].geometry}
                    material={materials['Shape 31 Material']}
                    castShadow
                    receiveShadow
                    position={[-75.72, 12.09, -12.05]}
                    rotation={[-0.08, -0.35, -0.09]}
                    scale={1}
                  />
                </group>
                <mesh
                  name="Sphere 21"
                  geometry={nodes['Sphere 21'].geometry}
                  material={materials['Sphere 21 Material']}
                  castShadow
                  receiveShadow
                  position={[-12.18, 32.1, -25.04]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Sphere1"
                  geometry={nodes.Sphere1.geometry}
                  material={materials['Sphere1 Material']}
                  castShadow
                  receiveShadow
                  position={[8.47, 32.11, -25.9]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Cube 81"
                  geometry={nodes['Cube 81'].geometry}
                  material={materials['Cube 81 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.12, 20.54, -2.89]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
              </group>
            </group>
          </group>
          <group name="pig 4" position={[-310.92, 58.16, -66.85]}>
            <group name="container2" position={[0, -49.13, 0]}>
              <group name="rotator2" position={[0, 49.13, 0]}>
                <mesh
                  name="Cube 92"
                  geometry={nodes['Cube 92'].geometry}
                  material={materials['Cube 92 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.27, 26.49, -29.52]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
                <group name="Group 62" position={[0.58, 23.43, -28.85]} rotation={[-2.91, -0.04, -3.13]} scale={0.27}>
                  <mesh
                    name="Shape 42"
                    geometry={nodes['Shape 42'].geometry}
                    material={materials['Shape 42 Material']}
                    castShadow
                    receiveShadow
                    position={[82.7, 10.8, -6.64]}
                    rotation={[-0.08, 0.17, 0.12]}
                    scale={1}
                  />
                  <mesh
                    name="Shape 32"
                    geometry={nodes['Shape 32'].geometry}
                    material={materials['Shape 32 Material']}
                    castShadow
                    receiveShadow
                    position={[-75.72, 12.09, -12.05]}
                    rotation={[-0.08, -0.35, -0.09]}
                    scale={1}
                  />
                </group>
                <mesh
                  name="Sphere 22"
                  geometry={nodes['Sphere 22'].geometry}
                  material={materials['Sphere 22 Material']}
                  castShadow
                  receiveShadow
                  position={[-12.18, 32.1, -25.04]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Sphere2"
                  geometry={nodes.Sphere2.geometry}
                  material={materials['Sphere2 Material']}
                  castShadow
                  receiveShadow
                  position={[8.47, 32.11, -25.9]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Cube 82"
                  geometry={nodes['Cube 82'].geometry}
                  material={materials['Cube 82 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.12, 20.54, -2.89]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
              </group>
            </group>
          </group>
          <group name="pig" position={[-310.92, 58.16, 85.84]}>
            <group name="container3" position={[0, -49.13, 0]}>
              <group name="rotator3" position={[0, 49.13, 0]}>
                <mesh
                  name="Cube 93"
                  geometry={nodes['Cube 93'].geometry}
                  material={materials['Cube 93 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.27, 26.49, -29.52]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
                <group name="Group 63" position={[0.58, 23.43, -28.85]} rotation={[-2.91, -0.04, -3.13]} scale={0.27}>
                  <mesh
                    name="Shape 43"
                    geometry={nodes['Shape 43'].geometry}
                    material={materials['Shape 43 Material']}
                    castShadow
                    receiveShadow
                    position={[82.7, 10.8, -6.64]}
                    rotation={[-0.08, 0.17, 0.12]}
                    scale={1}
                  />
                  <mesh
                    name="Shape 33"
                    geometry={nodes['Shape 33'].geometry}
                    material={materials['Shape 33 Material']}
                    castShadow
                    receiveShadow
                    position={[-75.72, 12.09, -12.05]}
                    rotation={[-0.08, -0.35, -0.09]}
                    scale={1}
                  />
                </group>
                <mesh
                  name="Sphere 23"
                  geometry={nodes['Sphere 23'].geometry}
                  material={materials['Sphere 23 Material']}
                  castShadow
                  receiveShadow
                  position={[-12.18, 32.1, -25.04]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Sphere3"
                  geometry={nodes.Sphere3.geometry}
                  material={materials['Sphere3 Material']}
                  castShadow
                  receiveShadow
                  position={[8.47, 32.11, -25.9]}
                  rotation={[-2.77, -0.04, -3.13]}
                  scale={0.27}
                />
                <mesh
                  name="Cube 83"
                  geometry={nodes['Cube 83'].geometry}
                  material={materials['Cube 83 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.12, 20.54, -2.89]}
                  rotation={[Math.PI, -0.04, -Math.PI]}
                  scale={0.27}
                />
              </group>
            </group>
          </group>
          <group name="studio" position={[736.55, 93.06, -103.78]}>
            <mesh
              name="chair"
              geometry={nodes.chair.geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[-137.03, -34.71, 93.74]}
              rotation={[-Math.PI, -0.46, -Math.PI]}
              scale={1}
            />
            <group name="artboard" position={[54.95, 3.78, 231.87]} rotation={[-2.75, -0.83, -2.8]} scale={0.19}>
              <mesh
                name="Rectangle 2"
                geometry={nodes['Rectangle 2'].geometry}
                material={materials['white-material']}
                castShadow
                receiveShadow
                position={[-2.45, 124.25, 31.44]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.95}
              />
              <mesh
                name="Merged Geometry1"
                geometry={nodes['Merged Geometry1'].geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[9.42, -22.12, 2.91]}
                rotation={[-2.94, 0.88, -3.07]}
                scale={5.3}
              />
            </group>
            <group name="table-1" position={[62.57, -14.97, -281.28]}>
              <group name="books" position={[-3.18, 33.59, -4.76]}>
                <mesh
                  name="book-1 2"
                  geometry={nodes['book-1 2'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[-9.38, 30.33, 32.4]}
                  rotation={[-Math.PI / 2, 0, -1.46]}
                  scale={0.25}
                />
                <mesh
                  name="book-3"
                  geometry={nodes['book-3'].geometry}
                  material={materials['blue-1-dark']}
                  castShadow
                  receiveShadow
                  position={[-10.76, 22.66, 31.84]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={0.25}
                />
                <mesh
                  name="book-4 2"
                  geometry={nodes['book-4 2'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[-10.86, 17.52, 31.68]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={0.25}
                />
                <mesh
                  name="book-4"
                  geometry={nodes['book-4'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[-7.15, 38.27, 28.72]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={0.25}
                />
                <mesh
                  name="Cube 7"
                  geometry={nodes['Cube 7'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[-8.7, -24.84, 13.33]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube 3"
                  geometry={nodes['Cube 3'].geometry}
                  material={materials['blue-1-dark']}
                  castShadow
                  receiveShadow
                  position={[-9.44, -33.57, 12.83]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube 6"
                  geometry={nodes['Cube 6'].geometry}
                  material={materials['blue-1-3']}
                  castShadow
                  receiveShadow
                  position={[-12.76, -39.11, 14.91]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube 84"
                  geometry={nodes['Cube 84'].geometry}
                  material={materials['tree-3']}
                  castShadow
                  receiveShadow
                  position={[-12.55, -24.52, -19.82]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube 51"
                  geometry={nodes['Cube 51'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[-15.94, -24.52, -11.14]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube 4"
                  geometry={nodes['Cube 4'].geometry}
                  material={materials['blue-1-dark']}
                  castShadow
                  receiveShadow
                  position={[-10.08, -22.92, -26.93]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube 2"
                  geometry={nodes['Cube 2'].geometry}
                  material={materials['blue-1-3']}
                  castShadow
                  receiveShadow
                  position={[-12.55, -27.15, -33.43]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Cube"
                  geometry={nodes.Cube.geometry}
                  material={materials['blue-1-3']}
                  castShadow
                  receiveShadow
                  position={[-14.29, -21.97, -41.63]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.23}
                />
                <mesh
                  name="Rectangle 5"
                  geometry={nodes['Rectangle 5'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[10.46, 15.92, -24.49]}
                  rotation={[-Math.PI / 2, 0, -1.95]}
                  scale={0.22}
                />
                <mesh
                  name="Rectangle 4"
                  geometry={nodes['Rectangle 4'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[1.51, 15.36, -21.86]}
                  rotation={[-Math.PI / 2, 0, -2.27]}
                  scale={0.22}
                />
                <mesh
                  name="book-1"
                  geometry={nodes['book-1'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[8.6, 27, -31.04]}
                  rotation={[-Math.PI / 2, 0, -1.66]}
                  scale={0.22}
                />
                <mesh
                  name="book-31"
                  geometry={nodes['book-31'].geometry}
                  material={materials['book-31 Material']}
                  castShadow
                  receiveShadow
                  position={[7.77, 19.82, -28.42]}
                  rotation={[-Math.PI / 2, 0, -1.83]}
                  scale={0.22}
                />
              </group>
              <group name="desk" position={[4.37, -2.47, 2.29]} scale={0.28}>
                <mesh
                  name="Cube 18"
                  geometry={nodes['Cube 18'].geometry}
                  material={materials['Cube 18 Material']}
                  castShadow
                  receiveShadow
                  position={[129.87, -9.93, -230.31]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1.09, 1.5, 1]}
                />
                <mesh
                  name="Cube 16"
                  geometry={nodes['Cube 16'].geometry}
                  material={materials['Cube 16 Material']}
                  castShadow
                  receiveShadow
                  position={[129.87, -9.93, 211.31]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1.09, 1.75, 1]}
                />
                <mesh
                  name="Cube 181"
                  geometry={nodes['Cube 181'].geometry}
                  material={materials['Cube 181 Material']}
                  castShadow
                  receiveShadow
                  position={[-2.46, 224.41, -230.31]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[1.07, 0.93, 0.95]}
                />
                <mesh
                  name="Cube 17"
                  geometry={nodes['Cube 17'].geometry}
                  material={materials['Cube 17 Material']}
                  castShadow
                  receiveShadow
                  position={[-2.46, 224.41, 211.31]}
                  rotation={[Math.PI / 2, 0, Math.PI]}
                  scale={[1.07, 0.93, 0.95]}
                />
                <mesh
                  name="Cube 182"
                  geometry={nodes['Cube 182'].geometry}
                  material={materials['Cube 182 Material']}
                  castShadow
                  receiveShadow
                  position={[-129.87, -9.93, -230.31]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1.09, 1.5, 1]}
                />
                <mesh
                  name="Cube 13"
                  geometry={nodes['Cube 13'].geometry}
                  material={materials['Cube 13 Material']}
                  castShadow
                  receiveShadow
                  position={[-129.87, -9.93, 211.31]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1.09, 1.75, 1]}
                />
                <mesh
                  name="Cube 15"
                  geometry={nodes['Cube 15'].geometry}
                  material={materials['Cube 15 Material']}
                  castShadow
                  receiveShadow
                  position={[1.56, -230.03, -13.49]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.97, 1, 1]}
                />
                <mesh
                  name="Cube 14"
                  geometry={nodes['Cube 14'].geometry}
                  material={materials['Cube 14 Material']}
                  castShadow
                  receiveShadow
                  position={[1.56, -28.42, -13.49]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.97, 1, 1]}
                />
                <mesh
                  name="Cube 12"
                  geometry={nodes['Cube 12'].geometry}
                  material={materials['Cube 12 Material']}
                  castShadow
                  receiveShadow
                  position={[1.56, 172.83, -13.49]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.97, 1, 1]}
                />
              </group>
              <group
                name="box 2"
                position={[-3.61, -47.66, 16.71]}
                rotation={[-Math.PI, -0.04, -Math.PI]}
                scale={[0.33, 0.3, 0.33]}
              >
                <mesh
                  name="Rectangle 9"
                  geometry={nodes['Rectangle 9'].geometry}
                  material={materials['Rectangle 9 Material']}
                  castShadow
                  receiveShadow
                  position={[57.6, -29.15, -12]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={1}
                />
                <mesh
                  name="Cube1"
                  geometry={nodes.Cube1.geometry}
                  material={materials['Cube1 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.69, -0.53, -1.41]}
                  scale={0.78}
                />
              </group>
            </group>
            <group name="garbage can" position={[-16.9, -68.92, -224.47]} scale={0.18}>
              <mesh
                name="Pyramid"
                geometry={nodes.Pyramid.geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[5.69, 22.85, -18.22]}
                rotation={[0, -1.13, 2.09]}
                scale={1}
              />
              <mesh
                name="Pentagon"
                geometry={nodes.Pentagon.geometry}
                material={materials['blue-ish']}
                castShadow
                receiveShadow
                position={[-3.24, 59.35, 20.98]}
                rotation={[-1.35, 0.26, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 21"
                geometry={nodes['Cube 21'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[0, -32.01, 17.17]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <group name="Group 80" position={[45.54, 4.18, -40.73]}>
              <group name="computer" position={[47.32, 53.15, 19.05]}>
                <mesh
                  name="Merged Geometry 10"
                  geometry={nodes['Merged Geometry 10'].geometry}
                  material={materials.black}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="Cube 59"
                  geometry={nodes['Cube 59'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[-7.18, 5.56, 0]}
                  scale={[1, 1.08, 1]}
                />
              </group>
              <group name="Group 16" position={[-37.38, -37.34, 69.89]} scale={0.87}>
                <group name="computer-2" position={[27.47, -28.29, 41.35]} scale={0.28}>
                  <mesh
                    name="Rectangle"
                    geometry={nodes.Rectangle.geometry}
                    material={materials['blue-1-3']}
                    castShadow
                    receiveShadow
                    position={[-121.92, -118.66, -4.31]}
                    rotation={[0, -Math.PI / 2, 0]}
                  />
                  <mesh
                    name="Ellipse 2"
                    geometry={nodes['Ellipse 2'].geometry}
                    material={materials['blue-1-3']}
                    castShadow
                    receiveShadow
                    position={[-121.91, 128.14, 48.08]}
                    rotation={[0, -Math.PI / 2, 0]}
                  />
                  <mesh
                    name="Cube 52"
                    geometry={nodes['Cube 52'].geometry}
                    material={materials['Cube 52 Material']}
                    castShadow
                    receiveShadow
                    position={[0.42, 0, 0]}
                    rotation={[0, -Math.PI / 2, 0]}
                  />
                </group>
              </group>
              <group
                name="computer-21"
                position={[-20.56, 15.24, -115.85]}
                rotation={[0, -Math.PI / 3, 0]}
                scale={0.24}
              >
                <group name="Group 13" position={[-1.33, 132.1, -74.92]} rotation={[-0.17, 0, 0]} scale={0.9}>
                  <mesh
                    name="Rectangle 8"
                    geometry={nodes['Rectangle 8'].geometry}
                    material={materials.black}
                    castShadow
                    receiveShadow
                    position={[64.32, 0.67, -4.24]}
                    scale={0.37}
                  />
                  <mesh
                    name="Merged Geometry 2"
                    geometry={nodes['Merged Geometry 2'].geometry}
                    material={materials['blue-1-3']}
                    castShadow
                    receiveShadow
                    position={[-0.03, 0.07, -5.99]}
                    rotation={[0.17, Math.PI / 3, 0]}
                    scale={4.74}
                  />
                  <mesh
                    name="Merged Geometry2"
                    geometry={nodes['Merged Geometry2'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[0.61, 2.75, -8.58]}
                    rotation={[0.17, Math.PI / 3, 0]}
                    scale={4.74}
                  />
                </group>
                <group name="Group" position={[-1.33, 89.68, -11.15]} rotation={[0, 0.67, 0]} scale={1}>
                  <mesh
                    name="Rectangle 6"
                    geometry={nodes['Rectangle 6'].geometry}
                    material={materials.black}
                    castShadow
                    receiveShadow
                    position={[50.14, 44.57, -63.04]}
                    rotation={[-0.22, -0.66, -1.71]}
                    scale={0.84}
                  />
                  <mesh
                    name="Rectangle 61"
                    geometry={nodes['Rectangle 61'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[51.33, 45.04, -64.53]}
                    rotation={[-0.22, -0.66, -1.71]}
                    scale={0.84}
                  />
                  <mesh
                    name="Rectangle 51"
                    geometry={nodes['Rectangle 51'].geometry}
                    material={materials['Rectangle 51 Material']}
                    castShadow
                    receiveShadow
                    position={[4.42, -66.89, -6.25]}
                    rotation={[-1.22, -0.27, -2.19]}
                    scale={0.84}
                  />
                  <mesh
                    name="Rectangle 41"
                    geometry={nodes['Rectangle 41'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[-9.76, -82.25, 11.61]}
                    rotation={[-1.22, -0.27, -2.19]}
                    scale={0.84}
                  />
                  <mesh
                    name="Cube 71"
                    geometry={nodes['Cube 71'].geometry}
                    material={materials['Cube 71 Material']}
                    castShadow
                    receiveShadow
                    position={[-58.97, -92.67, -139.61]}
                    rotation={[-Math.PI, 0.67, -Math.PI / 2]}
                    scale={1}
                  />
                </group>
                <mesh
                  name="Cube 72"
                  geometry={nodes['Cube 72'].geometry}
                  material={materials['Cube 72 Material']}
                  castShadow
                  receiveShadow
                  position={[-139.98, -2.99, -81.82]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 61"
                  geometry={nodes['Cube 61'].geometry}
                  material={materials['Cube 61 Material']}
                  castShadow
                  receiveShadow
                  position={[139.49, -2.99, -83.54]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 73"
                  geometry={nodes['Cube 73'].geometry}
                  material={materials['Cube 73 Material']}
                  castShadow
                  receiveShadow
                  position={[-139.92, -46.3, -3.35]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 53"
                  geometry={nodes['Cube 53'].geometry}
                  material={materials['Cube 53 Material']}
                  castShadow
                  receiveShadow
                  position={[139.55, -46.3, -5.06]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 41"
                  geometry={nodes['Cube 41'].geometry}
                  material={materials['Cube 41 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 2.04, 0]}
                  rotation={[-1.13, 0, -Math.PI / 2]}
                  scale={1}
                />
              </group>
              <group name="Audio-r" position={[34.6, 24.66, 137.29]} scale={0.19}>
                <mesh
                  name="Torus 2"
                  geometry={nodes['Torus 2'].geometry}
                  material={materials['blue-1']}
                  castShadow
                  receiveShadow
                  position={[-41.19, 55.71, -0.71]}
                  rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Torus"
                  geometry={nodes.Torus.geometry}
                  material={materials['blue-1']}
                  castShadow
                  receiveShadow
                  position={[-59, -53.05, -0.71]}
                  rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Sphere 24"
                  geometry={nodes['Sphere 24'].geometry}
                  material={materials['blue-1']}
                  castShadow
                  receiveShadow
                  position={[-27.54, 54.64, -0.92]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="Sphere4"
                  geometry={nodes.Sphere4.geometry}
                  material={materials['blue-1']}
                  castShadow
                  receiveShadow
                  position={[-43.86, -54.12, -0.92]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="Cube 22"
                  geometry={nodes['Cube 22'].geometry}
                  material={materials['blue-1']}
                  castShadow
                  receiveShadow
                  position={[0.52, 0, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
              </group>
              <group name="mouse" position={[-24.91, 9.07, 111.91]} rotation={[Math.PI, -0.38, Math.PI]} scale={0.18}>
                <mesh
                  name="Cylinder"
                  geometry={nodes.Cylinder.geometry}
                  material={materials['blue-2']}
                  castShadow
                  receiveShadow
                  position={[-36.2, -2.74, -1.37]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1}
                />
                <mesh
                  name="Cube2"
                  geometry={nodes.Cube2.geometry}
                  material={materials['blue-2']}
                  castShadow
                  receiveShadow
                  position={[6.9, 9.33, 0]}
                />
              </group>
              <mesh
                name="Rectangle 3"
                geometry={nodes['Rectangle 3'].geometry}
                material={materials['blue-1-dark']}
                castShadow
                receiveShadow
                position={[-18.86, 1.42, 7.34]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.21}
              />
              <group name="Group 40" position={[-14.56, 5.65, 9.61]}>
                <mesh
                  name="Merged Geometry3"
                  geometry={nodes['Merged Geometry3'].geometry}
                  material={materials['pink-light']}
                  castShadow
                  receiveShadow
                  position={[-6, 2.01, 0.16]}
                />
                <mesh
                  name="Cube 42"
                  geometry={nodes['Cube 42'].geometry}
                  material={materials['blue-1-3']}
                  castShadow
                  receiveShadow
                  position={[0.02, -0.67, 0]}
                  rotation={[-Math.PI / 2, -0.09, 0]}
                  scale={0.07}
                />
                <mesh
                  name="Torus1"
                  geometry={nodes.Torus1.geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[14.3, 4.98, 40.33]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.09}
                />
                <mesh
                  name="keybord_lign 8"
                  geometry={nodes['keybord_lign 8'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[-14.73, 0.44, 22.9]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="keybord_lign 9"
                  geometry={nodes['keybord_lign 9'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[-14.73, 0.44, -40.47]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="keybord_lign 6"
                  geometry={nodes['keybord_lign 6'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[-8.93, 0.95, -26.7]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="keybord_lign 5"
                  geometry={nodes['keybord_lign 5'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[-3.09, 1.46, -29.76]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="keybord_lign 4"
                  geometry={nodes['keybord_lign 4'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[2.9, 1.98, -31.5]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="Rectangle 7"
                  geometry={nodes['Rectangle 7'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[-14.7, 0.45, 16.11]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="Rectangle 52"
                  geometry={nodes['Rectangle 52'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[-14.7, 0.45, -21.49]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="Rectangle 10"
                  geometry={nodes['Rectangle 10'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[8.7, 2.49, 38.91]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="Rectangle1"
                  geometry={nodes.Rectangle1.geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[14.38, 2.99, -38.89]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="keybord_lign 2"
                  geometry={nodes['keybord_lign 2'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[14.38, 2.99, -31.5]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
                <mesh
                  name="keybord_lign 3"
                  geometry={nodes['keybord_lign 3'].geometry}
                  material={materials['blue-ish']}
                  castShadow
                  receiveShadow
                  position={[8.66, 2.49, -40.37]}
                  rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
                  scale={0.07}
                />
              </group>
              <group name="table" position={[-0.16, -48.04, -20.79]} scale={0.17}>
                <mesh
                  name="Merged Geometry4"
                  geometry={nodes['Merged Geometry4'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[0, -0.25, 140.64]}
                  scale={6.04}
                />
              </group>
            </group>
          </group>
          <group name="livingroom" position={[145.04, 103.28, 110.69]}>
            <group name="tv" position={[230.15, 18.07, 2.05]} scale={0.85}>
              <mesh
                name="Merged Geometry5"
                geometry={nodes['Merged Geometry5'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[3.38, 52.36, 9.76]}
                scale={1.18}
              />
              <group name="Group 37" position={[-23.86, -15.89, 48.61]}>
                <mesh
                  name="Merged Geometry6"
                  geometry={nodes['Merged Geometry6'].geometry}
                  material={materials.black}
                  castShadow
                  receiveShadow
                  position={[0.36, -16.36, -0.2]}
                />
                <mesh
                  name="Cylinder 21"
                  geometry={nodes['Cylinder 21'].geometry}
                  material={materials['grey-material']}
                  castShadow
                  receiveShadow
                  position={[0.52, 4.76, 5.08]}
                  rotation={[-2.62, 0, -Math.PI / 2]}
                  scale={0.86}
                />
                <mesh
                  name="Cylinder1"
                  geometry={nodes.Cylinder1.geometry}
                  material={materials['grey-material']}
                  castShadow
                  receiveShadow
                  position={[0.52, 19.77, 5.08]}
                  rotation={[-Math.PI, 0, -Math.PI / 2]}
                  scale={0.86}
                />
                <mesh
                  name="Cube 611"
                  geometry={nodes['Cube 611'].geometry}
                  material={materials['wood-red']}
                  castShadow
                  receiveShadow
                  position={[2, 0, -0.02]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
              </group>
              <mesh
                name="Cube 62"
                geometry={nodes['Cube 62'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[-19.33, -63.01, -1.68]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="Cube 60"
                geometry={nodes['Cube 60'].geometry}
                material={materials['orange-1']}
                castShadow
                receiveShadow
                position={[8.37, -28.09, -0.92]}
              />
              <mesh
                name="Cube 591"
                geometry={nodes['Cube 591'].geometry}
                material={materials['wood-red']}
                castShadow
                receiveShadow
                position={[8.37, -27.85, -0.89]}
              />
              <mesh
                name="Cube 58"
                geometry={nodes['Cube 58'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[8.37, -27.85, -0.89]}
              />
            </group>
            <group name="cd-4" position={[246.21, -8.64, -208.63]} rotation={[-Math.PI / 2, 0, 0]} scale={0.18}>
              <mesh
                name="Cube3"
                geometry={nodes.Cube3.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[46.2, -124.61, 7.27]}
                rotation={[0, 0, -1.75]}
                scale={1.28}
              />
              <mesh
                name="Cylinder 22"
                geometry={nodes['Cylinder 22'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[-89.13, -155.17, 5.27]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={1.28}
              />
              <mesh
                name="Cylinder2"
                geometry={nodes.Cylinder2.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[86.56, -127.47, 7.09]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={1.28}
              />
              <mesh
                name="Rectangle 21"
                geometry={nodes['Rectangle 21'].geometry}
                material={materials['wall-livingroom']}
                castShadow
                receiveShadow
                position={[4.53, -22.14, -42.46]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.28}
              />
              <mesh
                name="红色"
                geometry={nodes.红色.geometry}
                material={materials['pink-light']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-1.94, -1.51, 2.72]}
                scale={[0.72, 0.09, 0.72]}
              />
              <mesh
                name="Cylinder3"
                geometry={nodes.Cylinder3.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.72, 0.09, 0.72]}
              />
            </group>
            <group name="picture" position={[127.78, -0.36, -575.52]}>
              <group name="Group 66" position={[-617.97, 16.36, 0]}>
                <mesh
                  name="Cube 931"
                  geometry={nodes['Cube 931'].geometry}
                  material={materials['blue-2']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.49]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 921"
                  geometry={nodes['Cube 921'].geometry}
                  material={materials['Cube 921 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={1}
                />
              </group>
              <mesh
                name="Cube 932"
                geometry={nodes['Cube 932'].geometry}
                material={materials['wood-3']}
                castShadow
                receiveShadow
                position={[-15.16, -20.21, 0.49]}
                rotation={[0, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 933"
                geometry={nodes['Cube 933'].geometry}
                material={materials['blue-2-dark']}
                castShadow
                receiveShadow
                position={[-15.16, 30.32, 0.49]}
                rotation={[0, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 934"
                geometry={nodes['Cube 934'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[76.63, 18.23, 0.49]}
                rotation={[0, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 935"
                geometry={nodes['Cube 935'].geometry}
                material={materials['wood-3']}
                castShadow
                receiveShadow
                position={[-93.17, 16.36, 0.49]}
                rotation={[0, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Merged Geometry7"
                geometry={nodes['Merged Geometry7'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 4.96, 0]}
              />
            </group>
            <group name="fan" position={[-438.29, -31.84, -517.05]} rotation={[0, 0.56, 0]} scale={1}>
              <mesh
                name="Rectangle 13"
                geometry={nodes['Rectangle 13'].geometry}
                material={materials['white-material']}
                castShadow
                receiveShadow
                position={[-2.72, -67.69, 1.2]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle 12"
                geometry={nodes['Rectangle 12'].geometry}
                material={materials['white-material']}
                castShadow
                receiveShadow
                position={[3.65, -67.69, 1.2]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name="Cylinder 19"
                geometry={nodes['Cylinder 19'].geometry}
                material={materials['Cylinder 19 Material']}
                castShadow
                receiveShadow
                position={[0.55, -71.67, -7.72]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                name="Cylinder 18"
                geometry={nodes['Cylinder 18'].geometry}
                material={materials['Cylinder 18 Material']}
                castShadow
                receiveShadow
                position={[0.55, -24, -16.64]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <group name="Group 67" position={[0, 33.9, 2.39]}>
                <mesh
                  name="Cylinder 17"
                  geometry={nodes['Cylinder 17'].geometry}
                  material={materials['blue-1-dark']}
                  castShadow
                  receiveShadow
                  position={[0.55, 0.61, -14.78]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 16"
                  geometry={nodes['Cylinder 16'].geometry}
                  material={materials['blue-1']}
                  castShadow
                  receiveShadow
                  position={[0.14, 0.55, 2.15]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 14"
                  geometry={nodes['Cylinder 14'].geometry}
                  material={materials['blue-1-dark']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 6.37]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 15"
                  geometry={nodes['Cylinder 15'].geometry}
                  material={materials['blue-1-dark']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -12.17]}
                  rotation={[Math.PI / 2, 0.17, -Math.PI]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 13"
                  geometry={nodes['Cylinder 13'].geometry}
                  material={materials['blue-1-dark']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 22.98]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1}
                />
              </group>
            </group>
            <group name="cabinet-book" position={[258.52, 7.43, 312.82]}>
              <mesh
                name="Cube 936"
                geometry={nodes['Cube 936'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[-9.51, -51.57, -9.43]}
                rotation={[-Math.PI / 2, 0, 0.38]}
                scale={1}
              />
              <mesh
                name="Pyramid1"
                geometry={nodes.Pyramid1.geometry}
                material={materials['blue-2-dark']}
                castShadow
                receiveShadow
                position={[-8.45, -3.19, 25.54]}
                rotation={[0, Math.PI / 9, 0]}
                scale={1}
              />
              <group name="Group 77" position={[-6.75, 35.39, -3.58]}>
                <mesh
                  name="Cube 74"
                  geometry={nodes['Cube 74'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[1.38, -8.91, 34.48]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 31"
                  geometry={nodes['Cube 31'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[1.3, -5.33, 23.72]}
                  rotation={[Math.PI / 3, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 63"
                  geometry={nodes['Cube 63'].geometry}
                  material={materials['wall-livingroom']}
                  castShadow
                  receiveShadow
                  position={[0.17, -5.88, 14.26]}
                  rotation={[1.13, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 85"
                  geometry={nodes['Cube 85'].geometry}
                  material={materials['yellow-light']}
                  castShadow
                  receiveShadow
                  position={[0.3, -2.86, 6.2]}
                  rotation={[0.8, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 54"
                  geometry={nodes['Cube 54'].geometry}
                  material={materials['yellow-light']}
                  castShadow
                  receiveShadow
                  position={[0.3, -0.97, -24.22]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 86"
                  geometry={nodes['Cube 86'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[1.8, -1, -2.93]}
                  rotation={[0.32, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 43"
                  geometry={nodes['Cube 43'].geometry}
                  material={materials.black}
                  castShadow
                  receiveShadow
                  position={[1.8, 0, -28.49]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 87"
                  geometry={nodes['Cube 87'].geometry}
                  material={materials.grey}
                  castShadow
                  receiveShadow
                  position={[0.3, -2.83, -8.28]}
                  rotation={[0.4, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 23"
                  geometry={nodes['Cube 23'].geometry}
                  material={materials.grey}
                  castShadow
                  receiveShadow
                  position={[0.3, -2.57, -32.43]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 88"
                  geometry={nodes['Cube 88'].geometry}
                  material={materials.black}
                  castShadow
                  receiveShadow
                  position={[0, -1.1, -17.47]}
                  rotation={[-0.05, -Math.PI / 2, 0]}
                  scale={0.14}
                />
                <mesh
                  name="Cube4"
                  geometry={nodes.Cube4.geometry}
                  material={materials.purple}
                  castShadow
                  receiveShadow
                  position={[-0.76, 0.57, -39.97]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.14}
                />
              </group>
              <group name="cd-2 2" position={[-12.25, -4.79, -33.48]} scale={0.14}>
                <mesh
                  name="Merged Geometry8"
                  geometry={nodes['Merged Geometry8'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[8.71, -21.84, 49.72]}
                  scale={7.05}
                />
                <mesh
                  name="Cube5"
                  geometry={nodes.Cube5.geometry}
                  material={materials['wood-red']}
                  castShadow
                  receiveShadow
                  position={[-9.72, -3.84, -79.8]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <group name="Group 19" position={[6.89, 10.69, 22.42]}>
                  <mesh
                    name="Ellipse 21"
                    geometry={nodes['Ellipse 21'].geometry}
                    material={materials['yellow-light']}
                    castShadow
                    receiveShadow
                    position={[-1.4, 1.52, 4.21]}
                    rotation={[-0.59, -0.18, -1.73]}
                    scale={0.77}
                  />
                  <mesh
                    name="Cube 24"
                    geometry={nodes['Cube 24'].geometry}
                    material={materials.grey}
                    castShadow
                    receiveShadow
                    position={[0, 0, 0]}
                    rotation={[-0.59, -0.18, -0.16]}
                    scale={0.77}
                  />
                </group>
              </group>
              <mesh
                name="Merged Geometry9"
                geometry={nodes['Merged Geometry9'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
              />
            </group>
            <group name="Group 70" position={[234.14, -35.37, 158.23]}>
              <mesh
                name="Ellipse 22"
                geometry={nodes['Ellipse 22'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[-19.4, -8.51, -0.92]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              />
              <mesh
                name="Ellipse"
                geometry={nodes.Ellipse.geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[-19.4, 1.25, -0.92]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              />
              <mesh
                name="Cylinder 141"
                geometry={nodes['Cylinder 141'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-17.95, -3.86, 14.8]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 0.1, 1]}
              />
              <mesh
                name="Cylinder 131"
                geometry={nodes['Cylinder 131'].geometry}
                material={materials['gray-light']}
                castShadow
                receiveShadow
                position={[-17.95, -3.86, -15.96]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 0.1, 1]}
              />
              <mesh
                name="Merged Geometry 21"
                geometry={nodes['Merged Geometry 21'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-10.96, 9.68, -0.32]}
              />
              <mesh
                name="Cube 621"
                geometry={nodes['Cube 621'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[5.71, -4.02, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name="Cube 612"
                geometry={nodes['Cube 612'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[5.9, 2.01, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <group name="Group 44" position={[-89.51, -21.13, 333.19]} rotation={[-Math.PI, -0.87, -Math.PI]} scale={1}>
              <mesh
                name="Cylinder 4"
                geometry={nodes['Cylinder 4'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[2.48, -78.61, 1.11]}
                scale={1}
              />
              <mesh
                name="Merged Geometry10"
                geometry={nodes['Merged Geometry10'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[23.46, -6.63, 1.44]}
                rotation={[-Math.PI, 0.87, -Math.PI]}
                scale={1}
              />
              <mesh
                name="Cylinder 5"
                geometry={nodes['Cylinder 5'].geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-28.92, 74.08, 0]}
                rotation={[0, 0, -0.09]}
                scale={0.74}
              />
              <mesh
                name="Cylinder4"
                geometry={nodes.Cylinder4.geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-29.77, 64.45, 0]}
                rotation={[0, 0, -0.09]}
                scale={0.74}
              />
            </group>
            <group name="table-tv" position={[231.5, -78.12, 29.95]}>
              <mesh
                name="Merged Geometry11"
                geometry={nodes['Merged Geometry11'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
              />
              <mesh
                name="Cube 601"
                geometry={nodes['Cube 601'].geometry}
                material={materials['wall-livingroom']}
                castShadow
                receiveShadow
                position={[-49.23, -1.96, 86.51]}
              />
            </group>
            <group name="Group 29" position={[-81.92, -49.19, -255.4]} rotation={[0, -1.13, 0]} scale={0.75}>
              <mesh
                name="Merged Geometry12"
                geometry={nodes['Merged Geometry12'].geometry}
                material={materials['wood-red']}
                castShadow
                receiveShadow
                position={[-3.38, -10.75, 1.12]}
                rotation={[0, 1.13, 0]}
                scale={1.34}
              />
              <mesh
                name="Cube 631"
                geometry={nodes['Cube 631'].geometry}
                material={materials.purple}
                castShadow
                receiveShadow
                position={[-35.5, 33.58, -0.44]}
                rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
                scale={[1.31, 0.81, 0.94]}
              />
              <mesh
                name="Cube 602"
                geometry={nodes['Cube 602'].geometry}
                material={materials.purple}
                castShadow
                receiveShadow
                position={[30.78, -13.7, -0.42]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.31, 0.81, 1.37]}
              />
            </group>
            <group name="table-livingroom" position={[-38.69, -45, 54.78]}>
              <group name="plant -3" position={[-6.08, 27.99, -1.39]} rotation={[Math.PI, -1.31, Math.PI]} scale={0.34}>
                <mesh
                  name="Cube 55"
                  geometry={nodes['Cube 55'].geometry}
                  material={materials['pink-light']}
                  castShadow
                  receiveShadow
                  position={[0.25, 40.96, 27.4]}
                  rotation={[0.42, -1.54, 0.19]}
                  scale={1}
                />
                <mesh
                  name="Cube 44"
                  geometry={nodes['Cube 44'].geometry}
                  material={materials['yellow-light']}
                  castShadow
                  receiveShadow
                  position={[20.42, 33.43, -14.95]}
                  rotation={[-2.9, -0.94, -2.48]}
                  scale={1}
                />
                <mesh
                  name="Cube 32"
                  geometry={nodes['Cube 32'].geometry}
                  material={materials['pink-light']}
                  castShadow
                  receiveShadow
                  position={[-8.53, 63.99, -8.62]}
                  rotation={[0, 0, 0.22]}
                  scale={1}
                />
                <mesh
                  name="Merged Geometry13"
                  geometry={nodes['Merged Geometry13'].geometry}
                  material={materials['tree-3']}
                  castShadow
                  receiveShadow
                  position={[-8.07, -5.17, 5.21]}
                  rotation={[Math.PI, 1.31, Math.PI]}
                  scale={2.95}
                />
                <mesh
                  name="Cube 25"
                  geometry={nodes['Cube 25'].geometry}
                  material={materials['blue-2']}
                  castShadow
                  receiveShadow
                  position={[-1.09, -82.16, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={1}
                />
              </group>
              <mesh
                name="Merged Geometry14"
                geometry={nodes['Merged Geometry14'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[5.94, 1.5, -52.22]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <group
                name="Group 30"
                position={[19.41, -39.21, 2.33]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.57, 1]}
              >
                <mesh
                  name="Cylinder5"
                  geometry={nodes.Cylinder5.geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[2.33, 46.68, -19.41]}
                  scale={[1, 1.76, 1]}
                />
                <mesh
                  name="Merged Geometry15"
                  geometry={nodes['Merged Geometry15'].geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[1.99, -1.74, -19.03]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 1.76, 1]}
                />
              </group>
            </group>
            <group name="Group 75" position={[-65.15, -103.15, 33.91]}>
              <mesh
                name="Merged Geometry 14"
                geometry={nodes['Merged Geometry 14'].geometry}
                material={materials['purple-light']}
                castShadow
                receiveShadow
                position={[-48.62, 2.26, 85.28]}
              />
              <mesh
                name="Merged Geometry 15"
                geometry={nodes['Merged Geometry 15'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[-48.62, -0.02, 0.1]}
              />
              <mesh
                name="Merged Geometry 13"
                geometry={nodes['Merged Geometry 13'].geometry}
                material={materials['Merged Geometry 13 Material']}
                castShadow
                receiveShadow
                position={[-0.77, 2.27, 27.79]}
              />
              <mesh
                name="Merged Geometry 12"
                geometry={nodes['Merged Geometry 12'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[0.22, 2.27, 0.41]}
              />
              <mesh
                name="Merged Geometry 11"
                geometry={nodes['Merged Geometry 11'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[32.21, 2.27, -29.61]}
              />
              <mesh
                name="Merged Geometry 101"
                geometry={nodes['Merged Geometry 101'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[0.07, 2.27, 1.77]}
              />
              <mesh
                name="Rectangle 17"
                geometry={nodes['Rectangle 17'].geometry}
                material={materials['gray-light']}
                castShadow
                receiveShadow
                position={[112.81, -2.29, 0.1]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Rectangle 16"
                geometry={nodes['Rectangle 16'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[1.17, -2.29, 0.1]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
            </group>
            <group
              name="plant-1"
              position={[243.21, -45.73, -334.17]}
              rotation={[-Math.PI, 0.03, -Math.PI]}
              scale={0.17}
            >
              <mesh
                name="Merged Geometry16"
                geometry={nodes['Merged Geometry16'].geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-2.59, 123.1, 14.55]}
                rotation={[-Math.PI, -0.03, -Math.PI]}
                scale={5.92}
              />
              <mesh
                name="Cylinder 3"
                geometry={nodes['Cylinder 3'].geometry}
                material={materials['blue-2']}
                castShadow
                receiveShadow
                position={[3.61, -174.85, 10.39]}
                rotation={[0, 0, 0]}
                scale={[1.9, 1.42, 1.9]}
              />
              <mesh
                name="Merged Geometry 22"
                geometry={nodes['Merged Geometry 22'].geometry}
                material={materials.purple}
                castShadow
                receiveShadow
                position={[1.83, -258.66, 9.94]}
                rotation={[-Math.PI, -0.03, -Math.PI]}
                scale={5.92}
              />
            </group>
            <group
              name="cabinet 2"
              position={[226.29, -49.64, -218.5]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.16, 0.18, 0.2]}
            >
              <mesh
                name="Merged Geometry 23"
                geometry={nodes['Merged Geometry 23'].geometry}
                material={materials['wood-red']}
                castShadow
                receiveShadow
                position={[-2.64, 12.06, 142.41]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[5.06, 5.47, 6.11]}
              />
              <mesh
                name="Merged Geometry17"
                geometry={nodes['Merged Geometry17'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-3.3, -46.08, 131.27]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[5.06, 5.47, 6.11]}
              />
              <mesh
                name="Cube 26"
                geometry={nodes['Cube 26'].geometry}
                material={materials['wood-3']}
                castShadow
                receiveShadow
                position={[0, -49.69, -97.57]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 0.88, 1]}
              />
            </group>
            <group name="sofa" position={[-222.96, -39.29, 70.44]}>
              <group name="Group 25" position={[4.48, 1.34, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
                <mesh
                  name="Cube 622"
                  geometry={nodes['Cube 622'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[54.37, -22.33, -1.51]}
                  rotation={[Math.PI / 2, 1.4, -Math.PI / 2]}
                  scale={[1.15, 0.76, 1]}
                />
                <mesh
                  name="Cube 632"
                  geometry={nodes['Cube 632'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[48.4, 2.92, -111.55]}
                  rotation={[-Math.PI / 2, -1.13, Math.PI / 2]}
                  scale={[1.17, 0.81, 0.94]}
                />
                <mesh
                  name="Cube 633"
                  geometry={nodes['Cube 633'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[48.4, 2.92, -0.04]}
                  rotation={[-Math.PI / 2, -1.13, Math.PI / 2]}
                  scale={[1.17, 0.81, 0.94]}
                />
                <mesh
                  name="Cube 634"
                  geometry={nodes['Cube 634'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[48.4, 2.92, 111.47]}
                  rotation={[-Math.PI / 2, -1.13, Math.PI / 2]}
                  scale={[1.17, 0.81, 0.94]}
                />
                <mesh
                  name="Cube 603"
                  geometry={nodes['Cube 603'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[-19.54, -32.84, -111.55]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1.17, 0.81, 1.37]}
                />
                <mesh
                  name="Cube 592"
                  geometry={nodes['Cube 592'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[-19.54, -32.84, -0.04]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1.17, 0.81, 1.37]}
                />
                <mesh
                  name="Cube 581"
                  geometry={nodes['Cube 581'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[-19.54, -32.84, 111.47]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1.17, 0.81, 1.37]}
                />
                <mesh
                  name="Cube 57"
                  geometry={nodes['Cube 57'].geometry}
                  material={materials.pink}
                  castShadow
                  receiveShadow
                  position={[-7.05, -57.44, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
              </group>
              <mesh
                name="Cube 721"
                geometry={nodes['Cube 721'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-21.4, 8.13, 86.88]}
                rotation={[-1.79, -0.83, -0.17]}
                scale={1.08}
              />
              <mesh
                name="Cube 711"
                geometry={nodes['Cube 711'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-18.21, 13.98, -61.9]}
                rotation={[-1.4, -0.87, 0]}
                scale={1.08}
              />
            </group>
          </group>
          <group name="kitchen" position={[-687.92, 109.39, 183.39]}>
            <group name="table-kitchen" position={[113.69, -62.55, 115.05]}>
              <mesh
                name="knife"
                geometry={nodes.knife.geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[14.58, 42.77, 48.67]}
                rotation={[-1.46, 0.08, 1.23]}
                scale={0.16}
              />
              <group name="Group 74" position={[0, -46.33, 0]}>
                <mesh
                  name="Merged Geometry 111"
                  geometry={nodes['Merged Geometry 111'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[12.47, 2.5, 39.04]}
                />
                <mesh
                  name="Merged Geometry 102"
                  geometry={nodes['Merged Geometry 102'].geometry}
                  material={materials.purple}
                  castShadow
                  receiveShadow
                  position={[-10.29, 2.49, -0.37]}
                />
                <mesh
                  name="Rectangle 121"
                  geometry={nodes['Rectangle 121'].geometry}
                  material={materials['purple-light']}
                  castShadow
                  receiveShadow
                  position={[0, -2.5, 0.39]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
              </group>
              <group name="Group 81" position={[5.84, 6.11, 1.32]}>
                <group name="Group 73" position={[56.18, -0.27, -107.41]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    name="Shape 2"
                    geometry={nodes['Shape 2'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-30.65, -5.65, -32.68]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 95"
                    geometry={nodes['Cube 95'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0, 38.52, 24.29]}
                  />
                  <mesh
                    name="Merged Geometry18"
                    geometry={nodes['Merged Geometry18'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0.22, -7.03, -2.47]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                  />
                </group>
                <group name="Group 72" position={[-56.18, -0.27, 107.41]}>
                  <mesh
                    name="Shape 21"
                    geometry={nodes['Shape 21'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-30.65, -5.65, -32.68]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 951"
                    geometry={nodes['Cube 951'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0, 38.52, 24.29]}
                  />
                  <mesh
                    name="Merged Geometry19"
                    geometry={nodes['Merged Geometry19'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0.22, -7.03, -2.47]}
                  />
                </group>
                <group name="Group 731" position={[-56.18, -0.27, -107.41]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <mesh
                    name="Shape 22"
                    geometry={nodes['Shape 22'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-30.65, -5.65, -32.68]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 952"
                    geometry={nodes['Cube 952'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0, 38.52, 24.29]}
                  />
                  <mesh
                    name="Merged Geometry20"
                    geometry={nodes['Merged Geometry20'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0.22, -7.03, -2.47]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                  />
                </group>
                <group name="Group 71" position={[56.18, -0.27, 107.41]}>
                  <mesh
                    name="Shape 23"
                    geometry={nodes['Shape 23'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-30.65, -5.65, -32.68]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 953"
                    geometry={nodes['Cube 953'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0, 38.52, 24.29]}
                  />
                  <mesh
                    name="Merged Geometry21"
                    geometry={nodes['Merged Geometry21'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0.22, -7.03, -2.47]}
                  />
                </group>
              </group>
              <group name="Group 801" position={[0.56, 7.95, 2.76]}>
                <mesh
                  name="plate"
                  geometry={nodes.plate.geometry}
                  material={materials['white-material']}
                  castShadow
                  receiveShadow
                  position={[56.82, 27.67, 35.89]}
                  rotation={[0, 0, 0]}
                  scale={0.16}
                />
                <group name="bread" position={[-69.07, 43.58, -10.63]} rotation={[0, 0, 0]} scale={0.14}>
                  <mesh
                    name="Cylinder 35"
                    geometry={nodes['Cylinder 35'].geometry}
                    material={materials['white-dark-yellow']}
                    castShadow
                    receiveShadow
                    position={[-23.17, -32.3, 17.49]}
                    rotation={[0, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 56"
                    geometry={nodes['Cube 56'].geometry}
                    material={materials['Untitled Material']}
                    castShadow
                    receiveShadow
                    position={[7.08, -45.37, 35.95]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 45"
                    geometry={nodes['Cube 45'].geometry}
                    material={materials['Untitled Material']}
                    castShadow
                    receiveShadow
                    position={[5.05, -68.49, 1.48]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Sphere 3"
                    geometry={nodes['Sphere 3'].geometry}
                    material={materials['yellow-light']}
                    castShadow
                    receiveShadow
                    position={[-22.97, -28.44, 34.81]}
                    rotation={[-1.31, -0.18, -0.02]}
                    scale={1}
                  />
                  <mesh
                    name="Sphere 5"
                    geometry={nodes['Sphere 5'].geometry}
                    material={materials['Sphere 5 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.75, -62.56, -105.39]}
                    rotation={[0, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Sphere 4"
                    geometry={nodes['Sphere 4'].geometry}
                    material={materials['Sphere 4 Material']}
                    castShadow
                    receiveShadow
                    position={[-137.36, -63.04, 20.75]}
                    rotation={[0, 0.18, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Sphere 25"
                    geometry={nodes['Sphere 25'].geometry}
                    material={materials['Sphere 25 Material']}
                    castShadow
                    receiveShadow
                    position={[-115.27, -63.04, -28.74]}
                    rotation={[0, 0.18, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Cylinder 34"
                    geometry={nodes['Cylinder 34'].geometry}
                    material={materials['white-material']}
                    castShadow
                    receiveShadow
                    position={[0, -91.39, 0]}
                  />
                </group>
                <group name="bread-2" position={[-20.32, 39.85, -34.59]} scale={0.2}>
                  <mesh
                    name="Torus 3"
                    geometry={nodes['Torus 3'].geometry}
                    material={materials['white-dark-yellow']}
                    castShadow
                    receiveShadow
                    position={[40.25, -13.77, -4.02]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
                    scale={1}
                  />
                  <mesh
                    name="Torus 31"
                    geometry={nodes['Torus 31'].geometry}
                    material={materials['wood-red']}
                    castShadow
                    receiveShadow
                    position={[40.25, -22.47, -4.02]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
                    scale={1}
                  />
                  <mesh
                    name="Torus 21"
                    geometry={nodes['Torus 21'].geometry}
                    material={materials['Untitled Material']}
                    castShadow
                    receiveShadow
                    position={[-47.29, 9.06, 11.28]}
                    rotation={[-1.39, -0.53, -0.35]}
                    scale={1}
                  />
                  <mesh
                    name="Torus2"
                    geometry={nodes.Torus2.geometry}
                    material={materials['Torus2 Material']}
                    castShadow
                    receiveShadow
                    position={[-42.91, 1.67, 9.92]}
                    rotation={[-1.39, -0.53, -0.35]}
                    scale={1}
                  />
                  <mesh
                    name="Merged Geometry22"
                    geometry={nodes['Merged Geometry22'].geometry}
                    material={materials['white-material']}
                    castShadow
                    receiveShadow
                    position={[0, -42.66, 0]}
                    scale={5.12}
                  />
                </group>
                <group name="bread-3" position={[56.86, 39.1, -6.96]} rotation={[0, 1.48, 0]} scale={0.16}>
                  <mesh
                    name="Triangle 2"
                    geometry={nodes['Triangle 2'].geometry}
                    material={materials['white-dark-yellow']}
                    castShadow
                    receiveShadow
                    position={[-6.4, 20.88, -10.91]}
                    rotation={[-Math.PI / 2, 0, -1.66]}
                    scale={1}
                  />
                  <mesh
                    name="Triangle"
                    geometry={nodes.Triangle.geometry}
                    material={materials['Untitled Material']}
                    castShadow
                    receiveShadow
                    position={[-6.42, -20.88, -10.91]}
                    rotation={[-Math.PI / 2, 0, -1.66]}
                    scale={1}
                  />
                  <mesh
                    name="Cylinder 341"
                    geometry={nodes['Cylinder 341'].geometry}
                    material={materials['wood-2']}
                    castShadow
                    receiveShadow
                    position={[0, -24.59, 0]}
                    scale={0.57}
                  />
                </group>
                <group name="Group 24" position={[0, -12.22, 0]}>
                  <mesh
                    name="Merged Geometry23"
                    geometry={nodes['Merged Geometry23'].geometry}
                    material={materials['wood-red-light']}
                    castShadow
                    receiveShadow
                    position={[-1, -1.74, -1.45]}
                  />
                  <mesh
                    name="Rectangle 81"
                    geometry={nodes['Rectangle 81'].geometry}
                    material={materials['wood-red-light']}
                    castShadow
                    receiveShadow
                    position={[0, 33.63, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                </group>
                <group name="bread-5" position={[-9.07, 38.83, 20.75]} rotation={[0, -1.55, 0]} scale={0.19}>
                  <mesh
                    name="Merged Geometry24"
                    geometry={nodes['Merged Geometry24'].geometry}
                    material={materials['yellow-light']}
                    castShadow
                    receiveShadow
                    position={[2.3, 12.07, -10.78]}
                    rotation={[0, 1.55, 0]}
                    scale={5.21}
                  />
                  <mesh
                    name="Rectangle2"
                    geometry={nodes.Rectangle2.geometry}
                    material={materials['wood-2']}
                    castShadow
                    receiveShadow
                    position={[0, -55.78, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
                    scale={1}
                  />
                </group>
              </group>
            </group>
            <group name="cabinet-3" position={[-226.63, 7.33, 238.41]}>
              <mesh
                name="Cube 571"
                geometry={nodes['Cube 571'].geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[51.11, -73.72, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Cube 623"
                geometry={nodes['Cube 623'].geometry}
                material={materials['blue-2-dark']}
                castShadow
                receiveShadow
                position={[0, 111.04, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.32, 0.91, 1]}
              />
              <mesh
                name="Cube 613"
                geometry={nodes['Cube 613'].geometry}
                material={materials['Cube 613 Material']}
                castShadow
                receiveShadow
                position={[0, 101.26, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.32, 0.91, 1]}
              />
              <mesh
                name="Cube 604"
                geometry={nodes['Cube 604'].geometry}
                material={materials['Cube 604 Material']}
                castShadow
                receiveShadow
                position={[-0.95, 53.74, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.3, 0.91, 1]}
              />
              <mesh
                name="Cube 635"
                geometry={nodes['Cube 635'].geometry}
                material={materials['Cube 635 Material']}
                castShadow
                receiveShadow
                position={[52.05, -82.05, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.3, 0.91, 1]}
              />
              <mesh
                name="Cube 593"
                geometry={nodes['Cube 593'].geometry}
                material={materials['Cube 593 Material']}
                castShadow
                receiveShadow
                position={[-0.95, 6.32, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.3, 0.91, 1]}
              />
              <mesh
                name="Cube 572"
                geometry={nodes['Cube 572'].geometry}
                material={materials['Cube 572 Material']}
                castShadow
                receiveShadow
                position={[-1.06, -79.94, -8.38]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <group name="cabinet-2" position={[-56.07, -39.44, -97.71]}>
              <group name="Group 802" position={[-138.48, -24.44, 0]}>
                <mesh
                  name="Merged Geometry 112"
                  geometry={nodes['Merged Geometry 112'].geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[74.14, -0.99, 128.69]}
                />
                <mesh
                  name="Cube 551"
                  geometry={nodes['Cube 551'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[68.93, -24.28, 178.44]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.99, 1, 0.92]}
                />
                <mesh
                  name="Cube 47"
                  geometry={nodes['Cube 47'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[68.69, -24.28, 73.44]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1.14, 0.94, 0.92]}
                />
                <mesh
                  name="Cube 49"
                  geometry={nodes['Cube 49'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[68.93, -4.18, -67.67]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.99, 1, 0.92]}
                />
                <mesh
                  name="Cube 48"
                  geometry={nodes['Cube 48'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[68.93, -4.18, -10.26]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.99, 1, 0.92]}
                />
                <mesh
                  name="Cube 46"
                  geometry={nodes['Cube 46'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[68.69, 15.48, 73.44]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[1.14, 0.94, 0.92]}
                />
                <mesh
                  name="Cube 561"
                  geometry={nodes['Cube 561'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[-7.5, -4.27, -38.2]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Boolean"
                  geometry={nodes.Boolean.geometry}
                  material={nodes.Boolean.material}
                  castShadow
                  receiveShadow
                  position={[-7.5, 20.32, 180.45]}
                />
                <mesh
                  name="Cube 441"
                  geometry={nodes['Cube 441'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[-7.5, -24.64, 180.45]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Rectangle 42"
                  geometry={nodes['Rectangle 42'].geometry}
                  material={materials['white-dark-yellow']}
                  castShadow
                  receiveShadow
                  position={[-4.61, 36.39, -3.29]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 541"
                  geometry={nodes['Cube 541'].geometry}
                  material={materials['orange-1']}
                  castShadow
                  receiveShadow
                  position={[82.52, 0.29, -27.03]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[0.18, 0.18, 0.16]}
                />
                <mesh
                  name="Cube 451"
                  geometry={nodes['Cube 451'].geometry}
                  material={materials['orange-1']}
                  castShadow
                  receiveShadow
                  position={[82.52, 0.29, -50.19]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[0.18, 0.18, 0.16]}
                />
              </group>
              <group name="Group 21" position={[73.78, 0, -151.09]}>
                <group name="Group 191" position={[0, -23.51, 0]}>
                  <mesh
                    name="Rectangle 62"
                    geometry={nodes['Rectangle 62'].geometry}
                    material={materials.purple}
                    castShadow
                    receiveShadow
                    position={[-42.5, 43.32, -0.83]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Merged Geometry25"
                    geometry={nodes['Merged Geometry25'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[2.16, -1.92, 54.35]}
                  />
                  <mesh
                    name="Cube 50"
                    geometry={nodes['Cube 50'].geometry}
                    material={materials['green-3']}
                    castShadow
                    receiveShadow
                    position={[101.6, -25.21, 49.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.66, 1, 0.92]}
                  />
                  <mesh
                    name="Cube 471"
                    geometry={nodes['Cube 471'].geometry}
                    material={materials['green-3']}
                    castShadow
                    receiveShadow
                    position={[-94.14, -25.21, 49.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.99, 1, 0.92]}
                  />
                  <mesh
                    name="Cube 491"
                    geometry={nodes['Cube 491'].geometry}
                    material={materials['green-3']}
                    castShadow
                    receiveShadow
                    position={[40.34, -5.11, 49.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.99, 1, 0.92]}
                  />
                  <mesh
                    name="Cube 481"
                    geometry={nodes['Cube 481'].geometry}
                    material={materials['green-3']}
                    castShadow
                    receiveShadow
                    position={[-17.07, -5.11, 49.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.99, 1, 0.92]}
                  />
                  <mesh
                    name="Cube 501"
                    geometry={nodes['Cube 501'].geometry}
                    material={materials['green-3']}
                    castShadow
                    receiveShadow
                    position={[101.6, 14.56, 49.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.66, 1, 0.92]}
                  />
                  <mesh
                    name="Cube 461"
                    geometry={nodes['Cube 461'].geometry}
                    material={materials['green-3']}
                    castShadow
                    receiveShadow
                    position={[-94.14, 14.56, 49.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.99, 1, 0.92]}
                  />
                  <mesh
                    name="Cube 442"
                    geometry={nodes['Cube 442'].geometry}
                    material={materials['green-3']}
                    castShadow
                    receiveShadow
                    position={[-4.29, -5.19, -15.17]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Rectangle 43"
                    geometry={nodes['Rectangle 43'].geometry}
                    material={materials['white-dark-yellow']}
                    castShadow
                    receiveShadow
                    position={[0, 35.46, -12.5]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 542"
                    geometry={nodes['Cube 542'].geometry}
                    material={materials['orange-1']}
                    castShadow
                    receiveShadow
                    position={[-0.31, -0.64, 62.73]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.18, 0.18, 0.16]}
                  />
                  <mesh
                    name="Cube 452"
                    geometry={nodes['Cube 452'].geometry}
                    material={materials['orange-1']}
                    castShadow
                    receiveShadow
                    position={[22.86, -0.64, 62.73]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.18, 0.18, 0.16]}
                  />
                </group>
                <group name="Group 18" position={[-88.89, 45.19, -3.96]} scale={0.93}>
                  <mesh
                    name="Merged Geometry26"
                    geometry={nodes['Merged Geometry26'].geometry}
                    material={materials.black}
                    castShadow
                    receiveShadow
                    position={[0.11, -23, 0.51]}
                    scale={1.08}
                  />
                  <group name="pot-1" position={[0, 3.27, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.21}>
                    <mesh
                      name="Cylinder 33"
                      geometry={nodes['Cylinder 33'].geometry}
                      material={materials['yellow-light']}
                      castShadow
                      receiveShadow
                      position={[0, 91.29, 0]}
                    />
                    <mesh
                      name="Cylinder 32"
                      geometry={nodes['Cylinder 32'].geometry}
                      material={materials['blue-2-dark']}
                      castShadow
                      receiveShadow
                      position={[0, 69.81, 0]}
                    />
                    <mesh
                      name="Cylinder 31"
                      geometry={nodes['Cylinder 31'].geometry}
                      material={materials['blue-2-dark']}
                      castShadow
                      receiveShadow
                      position={[0, -25.29, 0]}
                    />
                  </group>
                </group>
                <group name="pot-2" position={[-10.34, 38.93, -3.65]} rotation={[0, Math.PI / 2, 0]} scale={0.2}>
                  <mesh
                    name="Cylinder 342"
                    geometry={nodes['Cylinder 342'].geometry}
                    material={materials.black}
                    castShadow
                    receiveShadow
                    position={[-94.29, -44.62, 155.64]}
                    rotation={[-Math.PI / 2, 0, -0.61]}
                    scale={1}
                  />
                  <mesh
                    name="Cube 75"
                    geometry={nodes['Cube 75'].geometry}
                    material={materials.grey}
                    castShadow
                    receiveShadow
                    position={[5.76, -40.19, 6.61]}
                    rotation={[-Math.PI / 2, 0, -0.61]}
                    scale={1}
                  />
                  <mesh
                    name="Merged Geometry27"
                    geometry={nodes['Merged Geometry27'].geometry}
                    material={materials.black}
                    castShadow
                    receiveShadow
                    position={[-0.84, -75.64, 0.11]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={5.01}
                  />
                </group>
              </group>
              <group name="Group 811" position={[-154.68, 41.89, -17.75]}>
                <mesh
                  name="Rectangle 63"
                  geometry={nodes['Rectangle 63'].geometry}
                  material={materials['wood-2']}
                  castShadow
                  receiveShadow
                  position={[12.03, -22.09, -9.11]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
                <group name="cake-7" position={[-8.77, 0.09, 100.34]} rotation={[0, Math.PI / 2, 0]} scale={0.21}>
                  <mesh
                    name="Merged Geometry28"
                    geometry={nodes['Merged Geometry28'].geometry}
                    material={materials['pink-light']}
                    castShadow
                    receiveShadow
                    position={[0.6, -26.47, 1.86]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={4.65}
                  />
                  <mesh
                    name="Cube 411"
                    geometry={nodes['Cube 411'].geometry}
                    material={materials['wall-livingroom']}
                    castShadow
                    receiveShadow
                    position={[0.6, -25.18, 1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1.12, 1.12, 0.84]}
                  />
                  <mesh
                    name="Cylinder 343"
                    geometry={nodes['Cylinder 343'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[0, -93.28, 0]}
                    rotation={[0, Math.PI / 9, 0]}
                    scale={1.07}
                  />
                </group>
                <mesh
                  name="knife1"
                  geometry={nodes.knife1.geometry}
                  material={materials['grey-material']}
                  castShadow
                  receiveShadow
                  position={[18.94, -18.46, -91.1]}
                  rotation={[-Math.PI / 2, 0, 1.31]}
                  scale={0.21}
                />
                <group
                  name="bottle-4"
                  position={[-21.44, 1.34, -128.43]}
                  rotation={[-Math.PI, -0.09, Math.PI]}
                  scale={0.24}
                >
                  <mesh
                    name="Cylinder 344"
                    geometry={nodes['Cylinder 344'].geometry}
                    material={materials['white-material']}
                    castShadow
                    receiveShadow
                    position={[-0.68, 74.98, -0.24]}
                  />
                  <mesh
                    name="Cube 410"
                    geometry={nodes['Cube 410'].geometry}
                    material={materials.pink}
                    castShadow
                    receiveShadow
                    position={[0, -13.48, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                  />
                </group>
              </group>
            </group>
            <group name="refrigerator- interaction" position={[218.28, -11.67, -248.99]}>
              <mesh
                name="Rectangle 53"
                geometry={nodes['Rectangle 53'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-10.43, 54.08, 33.44]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle 44"
                geometry={nodes['Rectangle 44'].geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-4.24, 52.09, 32.95]}
                rotation={[0, 0, 0.17]}
                scale={1}
              />
              <group name="interaction-open" position={[-48.49, 61.88, 18.41]}>
                <mesh
                  name="Cube 89"
                  geometry={nodes['Cube 89'].geometry}
                  material={materials['orange-1']}
                  castShadow
                  receiveShadow
                  position={[93.86, 1.83, 27.97]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.18, 0.18, 0.16]}
                />
                <mesh
                  name="Rectangle 71"
                  geometry={nodes['Rectangle 71'].geometry}
                  material={materials['orange-1']}
                  castShadow
                  receiveShadow
                  position={[54.59, 0, 0.01]}
                  rotation={[0, 0, 0]}
                  scale={[0.21, 0.21, 0.19]}
                />
              </group>
              <group name="Group 192" position={[6.18, -37.07, 29.8]}>
                <mesh
                  name="Cube 443"
                  geometry={nodes['Cube 443'].geometry}
                  material={materials['orange-1']}
                  castShadow
                  receiveShadow
                  position={[39.19, 33.1, 16.58]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.18, 0.18, 0.16]}
                />
                <mesh
                  name="Rectangle 82"
                  geometry={nodes['Rectangle 82'].geometry}
                  material={materials['orange-1']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -11.38]}
                  rotation={[0, 0, 0]}
                  scale={[0.21, 0.21, 0.19]}
                />
              </group>
              <mesh
                name="Boolean1"
                geometry={nodes.Boolean1.geometry}
                material={nodes.Boolean1.material}
                castShadow
                receiveShadow
                position={[6.1, 0, -25.47]}
              />
              <group name="cake-2" position={[6.42, 48.09, -19.83]} rotation={[Math.PI, 0, Math.PI]} scale={0.16}>
                <mesh
                  name="Cylinder 36"
                  geometry={nodes['Cylinder 36'].geometry}
                  material={materials['white-dark-yellow']}
                  castShadow
                  receiveShadow
                  position={[-1.37, 29.29, -0.96]}
                  rotation={[0, 0.96, 0]}
                  scale={[1, 0.79, 1]}
                />
                <mesh
                  name="Cylinder 351"
                  geometry={nodes['Cylinder 351'].geometry}
                  material={materials['wood-red']}
                  castShadow
                  receiveShadow
                  position={[0, -29.41, 0]}
                  rotation={[0, 0.96, 0]}
                  scale={[1, 0.79, 1]}
                />
                <mesh
                  name="Cylinder 345"
                  geometry={nodes['Cylinder 345'].geometry}
                  material={materials['wood-2']}
                  castShadow
                  receiveShadow
                  position={[0, -94.07, 0]}
                  rotation={[0, 0.96, 0]}
                  scale={1}
                />
              </group>
            </group>
          </group>
          <group name="bedroom-1" position={[211.37, 63.96, -900.26]}>
            <group name="Group 76" position={[182.91, -63.24, 62.81]}>
              <mesh
                name="Merged Geometry 121"
                geometry={nodes['Merged Geometry 121'].geometry}
                material={materials['wall-livingroom']}
                castShadow
                receiveShadow
                position={[-29.66, 2.71, -42.85]}
              />
              <mesh
                name="Merged Geometry 113"
                geometry={nodes['Merged Geometry 113'].geometry}
                material={materials['wood-red']}
                castShadow
                receiveShadow
                position={[-0.26, 2.69, -0.08]}
              />
              <mesh
                name="Merged Geometry 103"
                geometry={nodes['Merged Geometry 103'].geometry}
                material={materials['gray-light']}
                castShadow
                receiveShadow
                position={[-0.26, 2.7, 1.81]}
              />
              <mesh
                name="Rectangle 122"
                geometry={nodes['Rectangle 122'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[0.19, -2.71, 0.5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
            </group>
            <group name="Group 803" position={[-232.07, 3.53, -181.13]}>
              <group name="lamp" position={[-14.47, -27.02, -43.61]} scale={0.78}>
                <mesh
                  name="Cylinder 37"
                  geometry={nodes['Cylinder 37'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[-0.22, 56.27, 0.66]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 41"
                  geometry={nodes['Cylinder 41'].geometry}
                  material={materials['Cylinder 41 Material']}
                  castShadow
                  receiveShadow
                  position={[0.1, 107.98, -0.3]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 6"
                  geometry={nodes['Cylinder 6'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[-0.09, 125.26, -0.3]}
                  scale={0.42}
                />
                <mesh
                  name="Cylinder 23"
                  geometry={nodes['Cylinder 23'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[-0.1, 20.93, 0.3]}
                  scale={0.42}
                />
              </group>
              <group name="clock" position={[4.57, -4.13, 33.3]} rotation={[-Math.PI, 0.17, -Math.PI]} scale={0.19}>
                <mesh
                  name="Merged Geometry 3"
                  geometry={nodes['Merged Geometry 3'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-46.13, -1.49, -4.63]}
                  rotation={[-Math.PI, -0.17, -Math.PI]}
                  scale={5.14}
                />
                <mesh
                  name="Rectangle 31"
                  geometry={nodes['Rectangle 31'].geometry}
                  material={materials['green-3']}
                  castShadow
                  receiveShadow
                  position={[-13.66, 50.53, 64.18]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={0.32}
                />
                <mesh
                  name="Rectangle 22"
                  geometry={nodes['Rectangle 22'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[19.95, -0.51, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.32}
                />
                <mesh
                  name="Rectangle3"
                  geometry={nodes.Rectangle3.geometry}
                  material={materials.grey}
                  castShadow
                  receiveShadow
                  position={[-45.16, -0.67, -1.26]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.32}
                />
              </group>
              <group name="cabinet-bedroom" position={[0, -44.32, 0]} scale={[0.75, 1, 1]}>
                <mesh
                  name="Cube 65"
                  geometry={nodes['Cube 65'].geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[0.4, 4.1, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 64"
                  geometry={nodes['Cube 64'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[1.12, 4.1, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Cube 636"
                  geometry={nodes['Cube 636'].geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[0, 4.1, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={1}
                />
              </group>
            </group>
            <group name="bed" position={[-49.93, -5.87, 57.12]}>
              <mesh
                name="Cube 70"
                geometry={nodes['Cube 70'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-141.88, 23.18, 63.51]}
                rotation={[-2.08, -1.07, -0.56]}
                scale={1.08}
              />
              <mesh
                name="Cube 69"
                geometry={nodes['Cube 69'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-135.21, 26.93, -54.39]}
                rotation={[-Math.PI / 2, -1.13, 0]}
                scale={1.08}
              />
              <mesh
                name="Cube 68"
                geometry={nodes['Cube 68'].geometry}
                material={materials['wall-livingroom']}
                castShadow
                receiveShadow
                position={[-172.28, 21.84, 44.78]}
                rotation={[-Math.PI / 2, -0.61, 0]}
                scale={1.08}
              />
              <mesh
                name="Cube 67"
                geometry={nodes['Cube 67'].geometry}
                material={materials['wall-livingroom']}
                castShadow
                receiveShadow
                position={[-172.28, 21.84, -62.81]}
                rotation={[-Math.PI / 2, -0.61, 0]}
                scale={1.08}
              />
              <mesh
                name="Cube 651"
                geometry={nodes['Cube 651'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[-209.67, -0.68, -4.75]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name="Cube 641"
                geometry={nodes['Cube 641'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[62.36, -22.43, 1.2]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 637"
                geometry={nodes['Cube 637'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[14.35, -30.32, -0.27]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
            </group>
          </group>
          <group name="bedroom-2" position={[649.18, 82.94, -904.56]}>
            <group name="flower" position={[12.41, 5.14, -18.49]}>
              <mesh
                name="Cylinder 12"
                geometry={nodes['Cylinder 12'].geometry}
                material={materials['blue-2']}
                castShadow
                receiveShadow
                position={[2.54, -23.32, 0.22]}
                scale={0.42}
              />
              <mesh
                name="Cylinder 11"
                geometry={nodes['Cylinder 11'].geometry}
                material={materials['pink-light']}
                castShadow
                receiveShadow
                position={[-0.49, 21.97, -2.67]}
                rotation={[-2.76, 0.79, 2.43]}
                scale={0.19}
              />
              <mesh
                name="Cylinder 10"
                geometry={nodes['Cylinder 10'].geometry}
                material={materials['pink-light']}
                castShadow
                receiveShadow
                position={[3.08, 22.87, -0.84]}
                rotation={[2.95, 0.28, -2.92]}
                scale={0.19}
              />
              <mesh
                name="Cylinder 9"
                geometry={nodes['Cylinder 9'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[1.49, 2.91, -1.82]}
                rotation={[-Math.PI, 0.32, -Math.PI]}
                scale={0.12}
              />
            </group>
            <group name="books-10" position={[-83.2, -60.25, 86.08]} rotation={[0, 1.13, 0]} scale={[0.26, 0.41, 0.26]}>
              <mesh
                name="Rectangle 32"
                geometry={nodes['Rectangle 32'].geometry}
                material={materials['blue-ish']}
                castShadow
                receiveShadow
                position={[186.69, -11.12, -76.86]}
                rotation={[-1.54, -0.04, -1.3]}
                scale={1}
              />
              <mesh
                name="Rectangle 23"
                geometry={nodes['Rectangle 23'].geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[238.77, -9.15, -91.01]}
                rotation={[-1.54, -0.04, -1.3]}
                scale={1}
              />
              <mesh
                name="Rectangle4"
                geometry={nodes.Rectangle4.geometry}
                material={materials['orange-1']}
                castShadow
                receiveShadow
                position={[224.79, -9.96, -87.22]}
                rotation={[-1.54, -0.04, -1.3]}
                scale={1}
              />
              <mesh
                name="Cube6"
                geometry={nodes.Cube6.geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[225.56, -15.45, -87.17]}
                rotation={[-1.54, -0.04, -1.3]}
                scale={1}
              />
              <mesh
                name="红色1"
                geometry={nodes.红色1.geometry}
                material={materials['orange-1']}
                castShadow
                receiveShadow
                position={[188.61, -31.5, 27.93]}
                rotation={[0.02, -1.3, 0.01]}
                scale={[0.72, 0.09, 0.72]}
              />
              <mesh
                name="Cylinder6"
                geometry={nodes.Cylinder6.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[188.61, -31.5, 27.93]}
                rotation={[0.02, -1.3, 0.01]}
                scale={[0.72, 0.09, 0.72]}
              />
              <mesh
                name="paper 2"
                geometry={nodes['paper 2'].geometry}
                material={materials['pink-light']}
                castShadow
                receiveShadow
                position={[63.14, -38.35, 49.92]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="paper 3"
                geometry={nodes['paper 3'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[743.72, -52.5, -488.27]}
                rotation={[-Math.PI / 2, 0, -2.32]}
                scale={1}
              />
              <mesh
                name="paper1"
                geometry={nodes.paper1.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[52.37, -37.54, 100.71]}
                rotation={[-Math.PI / 2, 0, -1.83]}
                scale={1}
              />
            </group>
            <mesh
              name="Cube 741"
              geometry={nodes['Cube 741'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[143.91, -65.03, 94.39]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cube 731"
              geometry={nodes['Cube 731'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[96.63, -65.03, 191.51]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <group name="plant" position={[-158.66, -2.84, -204.56]} rotation={[0, -0.61, 0]} scale={0.58}>
              <mesh
                name="Ellipse1"
                geometry={nodes.Ellipse1.geometry}
                material={materials['wood-red']}
                castShadow
                receiveShadow
                position={[18.85, -36.13, 11.14]}
                rotation={[-Math.PI / 2, 0, 2.36]}
                scale={1.42}
              />
              <mesh
                name="Merged Geometry29"
                geometry={nodes['Merged Geometry29'].geometry}
                material={materials['tree-3']}
                castShadow
                receiveShadow
                position={[21.97, 13.55, -14.21]}
                rotation={[0, 0.61, 0]}
                scale={1.71}
              />
              <mesh
                name="Cube 183"
                geometry={nodes['Cube 183'].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[18.85, -83.45, 10.99]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
            <group
              name="Group 41"
              position={[11.17, -42.43, -191.18]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.66, 0.71, 0.71]}
            >
              <mesh
                name="Cube 638"
                geometry={nodes['Cube 638'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-44.03, 9.64, 68.26]}
                rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
                scale={[1.42, 0.81, 0.94]}
              />
              <mesh
                name="Cube 639"
                geometry={nodes['Cube 639'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-44.03, 9.64, -67.03]}
                rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
                scale={[1.42, 0.81, 0.94]}
              />
              <mesh
                name="Cube 66"
                geometry={nodes['Cube 66'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-53.31, -28.69, -1.24]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={[1.17, 0.81, 1.37]}
              />
              <mesh
                name="Cube 671"
                geometry={nodes['Cube 671'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[9.19, -18.23, -147.01]}
                rotation={[Math.PI, 0, -Math.PI / 2]}
                scale={[1.17, 0.81, 1.37]}
              />
              <mesh
                name="Cube 652"
                geometry={nodes['Cube 652'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[9.19, -18.23, 144.64]}
                rotation={[Math.PI, 0, -Math.PI / 2]}
                scale={[1.17, 0.81, 1.37]}
              />
              <mesh
                name="Cube 642"
                geometry={nodes['Cube 642'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[23.91, -51, -1.91]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.17, 0.81, 1.37]}
              />
              <mesh
                name="Cube 605"
                geometry={nodes['Cube 605'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[23.91, -26.12, 68.26]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.42, 0.81, 1.37]}
              />
              <mesh
                name="Cube 594"
                geometry={nodes['Cube 594'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[23.91, -26.12, -67.03]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.42, 0.81, 1.37]}
              />
            </group>
            <group name="Group 49" position={[24.49, -53.7, -18.67]} scale={0.77}>
              <mesh
                name="Cylinder7"
                geometry={nodes.Cylinder7.geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[0, 26.09, 0]}
              />
              <mesh
                name="Merged Geometry30"
                geometry={nodes['Merged Geometry30'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[0, -4.81, 1.12]}
                scale={1.3}
              />
            </group>
            <group name="lamp1" position={[160.42, 8.17, -175.73]} rotation={[0, -0.26, 0]} scale={0.18}>
              <mesh
                name="Sphere5"
                geometry={nodes.Sphere5.geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-53.25, 403.22, 1.25]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cube 510"
                geometry={nodes['Cube 510'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[37.09, -270.06, 5.4]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1.53}
              />
              <mesh
                name="Cylinder 24"
                geometry={nodes['Cylinder 24'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[-54.23, 325.3, 0.88]}
                rotation={[0, 0, 0]}
                scale={1.53}
              />
              <mesh
                name="Cylinder8"
                geometry={nodes.Cylinder8.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[45.52, -462.67, 0]}
                rotation={[0, 0, 0]}
                scale={1.53}
              />
            </group>
            <group name="carpet " position={[27.54, -78.45, 74.5]} scale={0.22}>
              <mesh
                name="Ellipse 3"
                geometry={nodes['Ellipse 3'].geometry}
                material={materials['gray-light']}
                castShadow
                receiveShadow
                position={[1.05, 10.47, -1.05]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.02, 1.02, 1.57]}
              />
              <mesh
                name="Ellipse2"
                geometry={nodes.Ellipse2.geometry}
                material={materials['wood-3']}
                castShadow
                receiveShadow
                position={[0, -7.39, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.09, 1.09, 1.66]}
              />
              <mesh
                name="Ellipse 23"
                geometry={nodes['Ellipse 23'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[0, 7.48, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.02, 1.02, 1.57]}
              />
            </group>
          </group>
          <group name="bathroom" position={[-244.22, 76.46, -826.13]}>
            <mesh
              name="Cube 412"
              geometry={nodes['Cube 412'].geometry}
              material={materials.metal}
              castShadow
              receiveShadow
              position={[-129.15, -20.44, -269.45]}
              rotation={[-Math.PI / 2, -0.53, 0]}
              scale={1}
            />
            <mesh
              name="Cube 33"
              geometry={nodes['Cube 33'].geometry}
              material={materials.metal}
              castShadow
              receiveShadow
              position={[-124.57, 18.8, 192.22]}
              rotation={[-Math.PI / 2, -0.53, 0]}
              scale={1}
            />
            <mesh
              name="Cube 413"
              geometry={nodes['Cube 413'].geometry}
              material={materials.metal}
              castShadow
              receiveShadow
              position={[-139.02, -23.61, -269.45]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cube 27"
              geometry={nodes['Cube 27'].geometry}
              material={materials.metal}
              castShadow
              receiveShadow
              position={[-134.44, 15.63, 192.22]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cube7"
              geometry={nodes.Cube7.geometry}
              material={materials.WC}
              castShadow
              receiveShadow
              position={[-99.04, 0.41, 186.89]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <group name="Group 57" position={[153.16, 58.88, -74.59]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
              <mesh
                name="Cube 79"
                geometry={nodes['Cube 79'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[0.82, -13.17, 29.49]}
                rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Merged Geometry31"
                geometry={nodes['Merged Geometry31'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1}
              />
            </group>
            <group name="Mirror" position={[-153.16, 52.47, 191.61]} scale={[1, 0.62, 1]}>
              <mesh
                name="Merged Geometry 24"
                geometry={nodes['Merged Geometry 24'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[2.85, 1.09, 3.15]}
              />
              <mesh
                name="Cylinder 142"
                geometry={nodes['Cylinder 142'].geometry}
                material={materials.glass}
                castShadow
                receiveShadow
                position={[1.05, 0, 0]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Cylinder 132"
                geometry={nodes['Cylinder 132'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <group name="cabinet-bathroom" position={[-97.25, -28.82, 180.09]} scale={[1, 0.79, 1]}>
              <mesh
                name="Merged Geometry 25"
                geometry={nodes['Merged Geometry 25'].geometry}
                material={materials['purple-light']}
                castShadow
                receiveShadow
                position={[51.13, -17.07, 0.19]}
                scale={[1, 1.26, 1]}
              />
              <mesh
                name="Merged Geometry32"
                geometry={nodes['Merged Geometry32'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[53.43, -11.46, 0.19]}
                scale={[1, 1.26, 1]}
              />
              <group name="Group1" position={[-6.15, -18.73, 0]} scale={[1, 1.26, 1]}>
                <mesh
                  name="Cube 831"
                  geometry={nodes['Cube 831'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[53.69, 1.25, -130.83]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[-1, 0.76, 1]}
                />
                <mesh
                  name="Cube 832"
                  geometry={nodes['Cube 832'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[53.69, 1.25, 79.04]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[-1, 0.76, 1]}
                />
                <mesh
                  name="Cube 833"
                  geometry={nodes['Cube 833'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[53.69, 1.25, -78.66]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1, 0.76, 1]}
                />
                <mesh
                  name="Cube 834"
                  geometry={nodes['Cube 834'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[53.69, 1.25, 131.22]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1, 0.76, 1]}
                />
                <mesh
                  name="Cube 811"
                  geometry={nodes['Cube 811'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[54.27, -16.27, 0.52]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.12, 0.76, 0.18]}
                />
                <mesh
                  name="Cube 80"
                  geometry={nodes['Cube 80'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[54.27, 17.41, 0.52]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.12, 0.76, 0.18]}
                />
                <mesh
                  name="Cube 76"
                  geometry={nodes['Cube 76'].geometry}
                  material={materials['wood-red-light']}
                  castShadow
                  receiveShadow
                  position={[-4.16, 0, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1, 0.79, 1]}
                />
              </group>
              <mesh
                name="Cube 861"
                geometry={nodes['Cube 861'].geometry}
                material={materials['wall-livingroom']}
                castShadow
                receiveShadow
                position={[-6.87, 28.11, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
            </group>
            <group name="Group 804" position={[-0.19, -46.1, -263.25]}>
              <mesh
                name="Cube 801"
                geometry={nodes['Cube 801'].geometry}
                material={materials['pink-light']}
                castShadow
                receiveShadow
                position={[-68.1, 5.78, 47.24]}
                rotation={[-2.97, 0, Math.PI]}
                scale={1}
              />
              <mesh
                name="Cube 751"
                geometry={nodes['Cube 751'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -3.35, -6.64]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <mesh
              name="Rectangle 91"
              geometry={nodes['Rectangle 91'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[39.24, -78.46, -128.19]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={1}
            />
          </group>
          <group name="floor" position={[-42.23, 73.93, -321.11]}>
            <mesh
              name="Cube 414"
              geometry={nodes['Cube 414'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[709.25, -77.75, 196.81]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1, 1, 0.04]}
            />
            <mesh
              name="Cube 34"
              geometry={nodes['Cube 34'].geometry}
              material={materials['WC Floor']}
              castShadow
              receiveShadow
              position={[-204.86, -77.46, -498.19]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1, 1, 0.04]}
            />
            <mesh
              name="Cube 922"
              geometry={nodes['Cube 922'].geometry}
              material={materials['Cube 922 Material']}
              castShadow
              receiveShadow
              position={[445.14, -77.75, -498.74]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1, 1, 0.04]}
            />
            <mesh
              name="Cube 28"
              geometry={nodes['Cube 28'].geometry}
              material={materials['Cube 28 Material']}
              castShadow
              receiveShadow
              position={[63.77, -77.46, 354.51]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1, 1, 0.04]}
            />
            <mesh
              name="Cube8"
              geometry={nodes.Cube8.geometry}
              material={materials['Cube8 Material']}
              castShadow
              receiveShadow
              position={[-646.05, -77.46, 507.68]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1, 1, 0.04]}
            />
          </group>
          <group name="doors" position={[103.76, 92.72, -45.32]}>
            <group name="door-house-front" position={[-490.43, 0.53, 566.59]} scale={1}>
              <group name="Group 701" position={[72.48, -0.53, 6.75]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
                <mesh
                  name="Cube 94"
                  geometry={nodes['Cube 94'].geometry}
                  material={materials.glass}
                  castShadow
                  receiveShadow
                  position={[-1.05, 28.28, 0.52]}
                />
                <mesh
                  name="Merged Geometry33"
                  geometry={nodes['Merged Geometry33'].geometry}
                  material={materials['Merged Geometry33 Material']}
                  castShadow
                  receiveShadow
                  position={[-46.39, -6.64, 0]}
                />
                <mesh
                  name="Cube 937"
                  geometry={nodes['Cube 937'].geometry}
                  material={materials.purple}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.05]}
                />
              </group>
            </group>
            <group name="door-bedroom2" position={[659.03, 0.53, -432.61]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
              <group name="Group 702" position={[118.94, -7.18, -6.01]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
                <mesh
                  name="Cube 954"
                  geometry={nodes['Cube 954'].geometry}
                  material={materials['gray-light']}
                  castShadow
                  receiveShadow
                  position={[-11.15, 11.95, -13.75]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="Cube 941"
                  geometry={nodes['Cube 941'].geometry}
                  material={materials['gray-light']}
                  castShadow
                  receiveShadow
                  position={[-11.15, 11.95, 15.42]}
                />
                <mesh
                  name="Shape 24"
                  geometry={nodes['Shape 24'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[-14.42, 19.99, -8.45]}
                />
              </group>
              <mesh
                name="Cube 942"
                geometry={nodes['Cube 942'].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[72.56, -0.53, -6.07]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1}
              />
            </group>
            <group name="door-backyard" position={[-525.63, 0.53, -208.38]} rotation={[0, -Math.PI / 2, 0]} scale={1}>
              <mesh
                name="Cube 97"
                geometry={nodes['Cube 97'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[-19.16, 4.77, 129.14]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="Cube 971"
                geometry={nodes['Cube 971'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[7.5, 4.77, 129.14]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Shape 44"
                geometry={nodes['Shape 44'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-16.37, 12.81, 132.41]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Cube 943"
                geometry={nodes['Cube 943'].geometry}
                material={materials.glass}
                castShadow
                receiveShadow
                position={[-6.31, 27.75, 72.83]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Cube 938"
                geometry={nodes['Cube 938'].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-6.78, -0.53, 71.79]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
            </group>
            <group name="door-bathroom" position={[-206.57, 0.53, -437.06]} rotation={[0, Math.PI / 2, 0]} scale={1}>
              <mesh
                name="Cube 96"
                geometry={nodes['Cube 96'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[5.46, 4.77, -129.06]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="Cube 961"
                geometry={nodes['Cube 961'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[-21.2, 4.77, -129.06]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Shape 34"
                geometry={nodes['Shape 34'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[2.67, 12.81, -132.33]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry 114"
                geometry={nodes['Merged Geometry 114'].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-6.66, -0.53, -72.2]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle 11"
                geometry={nodes['Rectangle 11'].geometry}
                material={materials.glass}
                castShadow
                receiveShadow
                position={[-8.22, -0.75, -70.58]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1}
              />
            </group>
            <group name="door-bedroom" position={[-149.46, 0.53, -436.28]} rotation={[0, Math.PI / 2, 0]} scale={1}>
              <group name="Group 703" position={[-6.36, -7.18, 118.69]} rotation={[0, Math.PI / 2, 0]} scale={1}>
                <mesh
                  name="Cube 955"
                  geometry={nodes['Cube 955'].geometry}
                  material={materials['grey-material']}
                  castShadow
                  receiveShadow
                  position={[-11.15, 11.95, -11.24]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="Cube 944"
                  geometry={nodes['Cube 944'].geometry}
                  material={materials['grey-material']}
                  castShadow
                  receiveShadow
                  position={[-11.15, 11.95, 15.42]}
                />
                <mesh
                  name="Shape 25"
                  geometry={nodes['Shape 25'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[-14.42, 19.99, -8.45]}
                />
              </group>
              <mesh
                name="Cube 945"
                geometry={nodes['Cube 945'].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-6.3, -0.53, 72.3]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
            </group>
            <group name="door-studio" position={[350.66, 0.53, -397.15]} rotation={[0, Math.PI / 2, 0]} scale={1}>
              <group name="Group 69" position={[-118.81, -7.18, -6.4]} scale={1}>
                <mesh
                  name="Cube 956"
                  geometry={nodes['Cube 956'].geometry}
                  material={materials['']}
                  castShadow
                  receiveShadow
                  position={[-11.15, 11.95, -15.42]}
                  rotation={[Math.PI, 0, -Math.PI]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="Cube 946"
                  geometry={nodes['Cube 946'].geometry}
                  material={materials['gray-light']}
                  castShadow
                  receiveShadow
                  position={[-11.15, 11.95, 15.42]}
                />
                <mesh
                  name="Shape 26"
                  geometry={nodes['Shape 26'].geometry}
                  material={materials['Untitled Material']}
                  castShadow
                  receiveShadow
                  position={[-14.42, 19.99, -8.45]}
                />
              </group>
              <mesh
                name="Cube 939"
                geometry={nodes['Cube 939'].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-72.43, -0.53, -6.34]}
                scale={1}
              />
            </group>
          </group>
          <group name="house" position={[-48.66, 90.63, -324.39]}>
            <mesh
              name="Cube 812"
              geometry={nodes['Cube 812'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-264.41, -98.4, 891.31]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Merged Geometry34"
              geometry={nodes['Merged Geometry34'].geometry}
              material={materials['Merged Geometry34 Material']}
              castShadow
              receiveShadow
              position={[224.27, 2.62, 350.09]}
            />
            <mesh
              name="wall"
              geometry={nodes.wall.geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[717.68, -5.98, 180.79]}
            />
            <mesh
              name="wall1"
              geometry={nodes.wall1.geometry}
              material={materials['green-3']}
              castShadow
              receiveShadow
              position={[457.62, -5.98, -501.96]}
            />
            <mesh
              name="Merged Geometry 5"
              geometry={nodes['Merged Geometry 5'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 0.34, 0]}
            />
            <mesh
              name="Merged Geometry35"
              geometry={nodes['Merged Geometry35'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 2.19, 0]}
            />
            <mesh
              name="Merged Geometry 31"
              geometry={nodes['Merged Geometry 31'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[-217.27, -6.91, 350.2]}
            />
            <mesh
              name="Merged Geometry 26"
              geometry={nodes['Merged Geometry 26'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[-204.55, -5.98, -501.96]}
            />
            <mesh
              name="Merged Geometry 4"
              geometry={nodes['Merged Geometry 4'].geometry}
              material={materials['blue-1']}
              castShadow
              receiveShadow
              position={[1.21, -7.27, 2.17]}
            />
            <group name="window-1" position={[277.24, 37.51, 853.16]}>
              <mesh
                name="Merged Geometry36"
                geometry={nodes['Merged Geometry36'].geometry}
                material={materials['blue-1-dark']}
                castShadow
                receiveShadow
                position={[-95.66, -25.92, 0]}
              />
              <mesh
                name="Merged Geometry 27"
                geometry={nodes['Merged Geometry 27'].geometry}
                material={materials.glass}
                castShadow
                receiveShadow
                position={[-96, -23.44, -0.25]}
              />
            </group>
            <group name="window-2" position={[926.99, 37.51, -429.43]} rotation={[0, Math.PI / 2, 0]}>
              <mesh
                name="Merged Geometry37"
                geometry={nodes['Merged Geometry37'].geometry}
                material={materials['blue-1-dark']}
                castShadow
                receiveShadow
                position={[95.66, -25.97, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="Merged Geometry 28"
                geometry={nodes['Merged Geometry 28'].geometry}
                material={materials.glass}
                castShadow
                receiveShadow
                position={[95.33, -23.44, -0.25]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
          </group>
          <group name="outside" position={[49.75, 221.7, -263.8]}>
            <group name="backyard" position={[-793.4, 0.09, -491.66]}>
              <mesh
                name="road"
                geometry={nodes.road.geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-228.38, -225.58, 118.14]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name="poop"
                geometry={nodes.poop.geometry}
                material={materials['wood-2']}
                castShadow
                receiveShadow
                position={[-25.13, -219.15, 396.56]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <group name="dog" position={[-30.72, -180.31, 51.31]} rotation={[-0.22, -0.08, 0.06]} scale={1}>
                <mesh
                  name="Shape 27"
                  geometry={nodes['Shape 27'].geometry}
                  material={materials.grey}
                  castShadow
                  receiveShadow
                  position={[13.59, -12, 8.66]}
                  rotation={[0, 0.44, 0]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 133"
                  geometry={nodes['Cylinder 133'].geometry}
                  material={materials['pink-light']}
                  castShadow
                  receiveShadow
                  position={[12.96, 3.71, -3.77]}
                  rotation={[-3.02, 0.86, -2.43]}
                  scale={1}
                />
                <mesh
                  name="Merged Geometry38"
                  geometry={nodes['Merged Geometry38'].geometry}
                  material={materials['dog-2']}
                  castShadow
                  receiveShadow
                  position={[0.32, -16.7, -18.3]}
                  rotation={[0.22, 0.06, -0.08]}
                  scale={1}
                />
                <mesh
                  name="Cube 610"
                  geometry={nodes['Cube 610'].geometry}
                  material={materials.dog}
                  castShadow
                  receiveShadow
                  position={[-7.11, -14.77, -23.75]}
                  rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                  scale={0.14}
                />
                <mesh
                  name="Subdiv 8"
                  geometry={nodes['Subdiv 8'].geometry}
                  material={materials.dog}
                  castShadow
                  receiveShadow
                  position={[2.99, -21.56, 4.53]}
                  rotation={[2.92, 0.85, -2.81]}
                  scale={[0.14, 0.16, 0.14]}
                />
                <mesh
                  name="Subdiv 10"
                  geometry={nodes['Subdiv 10'].geometry}
                  material={materials.dog}
                  castShadow
                  receiveShadow
                  position={[-25.82, -25.09, -20.78]}
                  rotation={[-3.04, 1.08, -3]}
                  scale={0.14}
                />
                <mesh
                  name="Subdiv 9"
                  geometry={nodes['Subdiv 9'].geometry}
                  material={materials.dog}
                  castShadow
                  receiveShadow
                  position={[-1.13, -24.98, -38.31]}
                  rotation={[Math.PI, Math.PI / 4, 3.12]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 810"
                  geometry={nodes['Cube 810'].geometry}
                  material={materials.dog}
                  castShadow
                  receiveShadow
                  position={[23.64, -24.37, -13.54]}
                  rotation={[-2.74, 0.74, 2.84]}
                  scale={0.14}
                />
                <mesh
                  name="Cube 77"
                  geometry={nodes['Cube 77'].geometry}
                  material={materials.dog}
                  castShadow
                  receiveShadow
                  position={[-23.24, -25.13, -41]}
                  rotation={[2.32, 0.99, -2.64]}
                  scale={0.15}
                />
                <group name="Group2" position={[20.24, 17.1, 9.43]}>
                  <mesh
                    name="Subdiv"
                    geometry={nodes.Subdiv.geometry}
                    material={materials['dog-2']}
                    castShadow
                    receiveShadow
                    position={[14.23, 12.7, -11.11]}
                    rotation={[-0.03, 0.12, -0.03]}
                    scale={[-0.14, 0.14, 0.14]}
                  />
                  <mesh
                    name="Subdiv1"
                    geometry={nodes.Subdiv1.geometry}
                    material={materials['dog-2']}
                    castShadow
                    receiveShadow
                    position={[-16.28, 13.78, -7.48]}
                    rotation={[-0.03, 0.12, -0.03]}
                    scale={0.14}
                  />
                  <mesh
                    name="Sphere 41"
                    geometry={nodes['Sphere 41'].geometry}
                    material={materials['dog-2']}
                    castShadow
                    receiveShadow
                    position={[-5.2, 12.9, 10.06]}
                    rotation={[-0.96, -0.13, 0.29]}
                    scale={[0.08, 0.08, 0.03]}
                  />
                  <mesh
                    name="Sphere 31"
                    geometry={nodes['Sphere 31'].geometry}
                    material={materials['dog-2']}
                    castShadow
                    receiveShadow
                    position={[7.63, 12.72, 8.93]}
                    rotation={[-0.93, 0.23, 0.31]}
                    scale={[0.08, 0.08, 0.03]}
                  />
                  <mesh
                    name="Cube 29"
                    geometry={nodes['Cube 29'].geometry}
                    material={materials['Cube 29 Material']}
                    castShadow
                    receiveShadow
                    position={[-16.35, 13.76, -8.03]}
                    rotation={[-0.03, 0.12, -0.03]}
                    scale={0.14}
                  />
                  <mesh
                    name="Cube 210"
                    geometry={nodes['Cube 210'].geometry}
                    material={materials['Cube 210 Material']}
                    castShadow
                    receiveShadow
                    position={[14.16, 12.68, -11.65]}
                    rotation={[-0.03, 0.12, -0.03]}
                    scale={[-0.14, 0.14, 0.14]}
                  />
                  <mesh
                    name="Subdiv 2"
                    geometry={nodes['Subdiv 2'].geometry}
                    material={materials['Untitled Material']}
                    castShadow
                    receiveShadow
                    position={[-6.74, 3.8, 16.73]}
                    rotation={[2.7, 0.04, 3.06]}
                    scale={[0.14, 0.14, 0.15]}
                  />
                  <mesh
                    name="Sphere 26"
                    geometry={nodes['Sphere 26'].geometry}
                    material={materials['Untitled Material']}
                    castShadow
                    receiveShadow
                    position={[11.58, 2.88, 13.8]}
                    rotation={[-0.41, 0.37, 0.02]}
                    scale={[0.14, 0.14, 0.15]}
                  />
                  <mesh
                    name="Sphere6"
                    geometry={nodes.Sphere6.geometry}
                    material={materials['Untitled Material']}
                    castShadow
                    receiveShadow
                    position={[3.45, -1.36, 25.08]}
                    rotation={[-0.03, 0.12, -0.03]}
                    scale={[0.14, 0.12, 0.14]}
                  />
                  <mesh
                    name="Cube9"
                    geometry={nodes.Cube9.geometry}
                    material={materials['Cube9 Material']}
                    castShadow
                    receiveShadow
                    position={[-0.24, 0.4, -2.89]}
                    rotation={[-0.04, 0.12, -0.03]}
                    scale={0.14}
                  />
                </group>
              </group>
              <group name="Group 60" position={[208.69, -194.62, -117.54]} rotation={[0, -Math.PI / 3, 0]} scale={1}>
                <mesh
                  name="Merged Geometry 29"
                  geometry={nodes['Merged Geometry 29'].geometry}
                  material={materials.gress}
                  castShadow
                  receiveShadow
                  position={[-40.8, -17.42, -67.38]}
                  rotation={[0, 0, 0]}
                />
                <mesh
                  name="Cube 321"
                  geometry={nodes['Cube 321'].geometry}
                  material={materials['flower-2']}
                  castShadow
                  receiveShadow
                  position={[0.5, -28.42, -12.96]}
                  rotation={[0.54, 1.06, -0.55]}
                  scale={0.5}
                />
                <group
                  name="Group 68"
                  position={[162.51, -20.46, 518.63]}
                  rotation={[-Math.PI, -0.56, -Math.PI]}
                  scale={1}
                >
                  <mesh
                    name="Cube 322"
                    geometry={nodes['Cube 322'].geometry}
                    material={materials['flower-2']}
                    castShadow
                    receiveShadow
                    position={[64.86, -7.96, 83.04]}
                    rotation={[2.73, -1.16, 2.4]}
                    scale={0.5}
                  />
                  <mesh
                    name="Cube 251"
                    geometry={nodes['Cube 251'].geometry}
                    material={materials['flower-2']}
                    castShadow
                    receiveShadow
                    position={[-22.39, -7.96, -14.61]}
                    rotation={[0.48, -0.99, 0.34]}
                    scale={0.5}
                  />
                  <mesh
                    name="Merged Geometry39"
                    geometry={nodes['Merged Geometry39'].geometry}
                    material={materials.gress}
                    castShadow
                    receiveShadow
                    position={[0.22, 0.66, -0.24]}
                    rotation={[0, -Math.PI / 3, 0]}
                    scale={1}
                  />
                </group>
                <group name="Group 671" position={[-156.45, -20.46, 202.63]} rotation={[0, Math.PI / 3, 0]} scale={1}>
                  <mesh
                    name="Cube 311"
                    geometry={nodes['Cube 311'].geometry}
                    material={materials['flower-2']}
                    castShadow
                    receiveShadow
                    position={[12.92, -7.96, 25.94]}
                    rotation={[0.43, -1.28, 0.21]}
                    scale={0.5}
                  />
                  <mesh
                    name="Cube 252"
                    geometry={nodes['Cube 252'].geometry}
                    material={materials['flower-2']}
                    castShadow
                    receiveShadow
                    position={[-22.39, -7.96, -14.61]}
                    rotation={[0.48, -0.99, 0.34]}
                    scale={0.5}
                  />
                  <mesh
                    name="Merged Geometry40"
                    geometry={nodes['Merged Geometry40'].geometry}
                    material={materials.gress}
                    castShadow
                    receiveShadow
                    position={[0.22, 0.66, -0.24]}
                    rotation={[0, -Math.PI / 3, 0]}
                    scale={1}
                  />
                </group>
                <group name="Group 661" position={[-71.54, 5.39, 85.1]} rotation={[0, 0.87, 0]} scale={1.18}>
                  <mesh
                    name="Merged Geometry 210"
                    geometry={nodes['Merged Geometry 210'].geometry}
                    material={materials.black}
                    castShadow
                    receiveShadow
                    position={[0.33, -1.05, -2.55]}
                    rotation={[0, -0.87, 0]}
                    scale={1}
                  />
                  <mesh
                    name="Merged Geometry41"
                    geometry={nodes['Merged Geometry41'].geometry}
                    material={materials.pink}
                    castShadow
                    receiveShadow
                    position={[0, 12.38, 0.08]}
                    rotation={[0, -0.87, 0]}
                    scale={1}
                  />
                </group>
              </group>
              <mesh
                name="stone"
                geometry={nodes.stone.geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[77.09, -228.26, 318.72]}
                rotation={[0, -0.17, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry42"
                geometry={nodes['Merged Geometry42'].geometry}
                material={materials.bush}
                castShadow
                receiveShadow
                position={[260.23, -217.45, -91.31]}
              />
              <group name="Group 58" position={[-8.28, -32.91, -243.51]}>
                <group name="tree-1 3" position={[-13.22, -0.87, 35.04]} scale={0.81}>
                  <mesh
                    name="Cube 415"
                    geometry={nodes['Cube 415'].geometry}
                    material={materials['tree-3']}
                    castShadow
                    receiveShadow
                    position={[71.15, 52.19, -90.5]}
                    rotation={[0.86, 0.99, 2.52]}
                    scale={1.3}
                  />
                  <mesh
                    name="Cube 35"
                    geometry={nodes['Cube 35'].geometry}
                    material={materials['tree-3']}
                    castShadow
                    receiveShadow
                    position={[-95, 37.73, 2.12]}
                    rotation={[0, 0, 0.69]}
                    scale={1.3}
                  />
                  <mesh
                    name="Cube 211"
                    geometry={nodes['Cube 211'].geometry}
                    material={materials['tree-3']}
                    castShadow
                    receiveShadow
                    position={[56.5, 217.12, 7.05]}
                    rotation={[0, 0, 0.26]}
                    scale={1.3}
                  />
                  <mesh
                    name="Cylinder9"
                    geometry={nodes.Cylinder9.geometry}
                    material={materials['wood-2']}
                    castShadow
                    receiveShadow
                    position={[3.55, -112.04, -7.6]}
                    scale={1.3}
                  />
                </group>
              </group>
            </group>
            <group name="yard" position={[-105.87, -46.17, 766.81]}>
              <mesh
                name="Merged Geometry43"
                geometry={nodes['Merged Geometry43'].geometry}
                material={materials.bush}
                castShadow
                receiveShadow
                position={[751.97, -167.57, -192.32]}
              />
              <mesh
                name="Merged Geometry 32"
                geometry={nodes['Merged Geometry 32'].geometry}
                material={materials.bush}
                castShadow
                receiveShadow
                position={[-685.51, -138.64, 161.78]}
              />
              <mesh
                name="Merged Geometry 211"
                geometry={nodes['Merged Geometry 211'].geometry}
                material={materials.bush}
                castShadow
                receiveShadow
                position={[-20.01, -151.85, 80.19]}
              />
              <group name="Group 59" position={[821.3, 13.86, -107.31]}>
                <group name="tree-1" position={[-17.99, -13.72, 1.95]} scale={0.81}>
                  <mesh
                    name="Cube 36"
                    geometry={nodes['Cube 36'].geometry}
                    material={materials['tree-3']}
                    castShadow
                    receiveShadow
                    position={[-107.88, -0.26, 2.21]}
                    rotation={[0, 0, 0.22]}
                    scale={1.3}
                  />
                  <mesh
                    name="Cube 212"
                    geometry={nodes['Cube 212'].geometry}
                    material={materials['tree-3']}
                    castShadow
                    receiveShadow
                    position={[41.3, 126.74, 7.05]}
                    rotation={[0, 0, -0.17]}
                    scale={1.3}
                  />
                  <mesh
                    name="Cylinder10"
                    geometry={nodes.Cylinder10.geometry}
                    material={materials['wood-2']}
                    castShadow
                    receiveShadow
                    position={[3.55, -112.04, -7.6]}
                    scale={1.3}
                  />
                </group>
              </group>
            </group>
            <group name="fence" position={[-105.41, -210.43, 15.8]}>
              <mesh
                name="Merged Geometry 41"
                geometry={nodes['Merged Geometry 41'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-683.16, 0, -1036.44]}
                rotation={[Math.PI, -1.22, Math.PI]}
                scale={1}
              />
              <mesh
                name="Merged Geometry 8"
                geometry={nodes['Merged Geometry 8'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[923.71, 0, 800.59]}
                rotation={[Math.PI, Math.PI / 9, Math.PI]}
                scale={1}
              />
              <mesh
                name="Merged Geometry 7"
                geometry={nodes['Merged Geometry 7'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[691.09, 0, 1036.44]}
                rotation={[0, 1.22, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry 6"
                geometry={nodes['Merged Geometry 6'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[227.42, 0, 1036.44]}
                rotation={[0, 1.22, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry 51"
                geometry={nodes['Merged Geometry 51'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-695.18, 0, 1036.44]}
                rotation={[0, 1.22, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry 33"
                geometry={nodes['Merged Geometry 33'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-917.46, 0, -804.05]}
                rotation={[0, -Math.PI / 9, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry 212"
                geometry={nodes['Merged Geometry 212'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-923.71, 0, -155.88]}
                rotation={[0, -Math.PI / 9, 0]}
                scale={1}
              />
            </group>
            <mesh
              name="ground"
              geometry={nodes.ground.geometry}
              material={materials['ground Material']}
              castShadow
              receiveShadow
              position={[0, -225.57, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
