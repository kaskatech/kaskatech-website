'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AssetGraph3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === 'undefined') return
    const wrap = canvas.parentElement
    if (!wrap) return

    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = wrap.clientWidth || 600
    let H = wrap.clientHeight || 300

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(W, H, false)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 100)
    camera.position.set(0, 0, 15)
    const group = new THREE.Group()
    scene.add(group)

    const N = 46
    const COL: Record<string, THREE.Color> = {
      t: new THREE.Color('#4FC9A3'),
      b: new THREE.Color('#C89B45'),
      c: new THREE.Color('#E0554E'),
    }
    type Node = { p: THREE.Vector3; kind: 't' | 'b' | 'c' }
    const nodes: Node[] = []
    for (let i = 0; i < N; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = 2 * Math.PI * u
      const phi = Math.acos(2 * v - 1)
      const r = 4.6 * Math.cbrt(Math.random())
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.7
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.85
      const z = r * Math.cos(phi) * 1.15
      const roll = Math.random()
      const kind: 't' | 'b' | 'c' = roll < 0.12 ? 'c' : roll < 0.5 ? 'b' : 't'
      nodes.push({ p: new THREE.Vector3(x, y, z), kind })
    }

    function glowTex() {
      const c = document.createElement('canvas')
      c.width = c.height = 64
      const g = c.getContext('2d')!
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.25, 'rgba(255,255,255,0.85)')
      grad.addColorStop(0.5, 'rgba(255,255,255,0.3)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      g.fillStyle = grad
      g.fillRect(0, 0, 64, 64)
      return new THREE.CanvasTexture(c)
    }
    const sprite = glowTex()

    const disposables: { dispose: () => void }[] = [sprite]

    function makePoints(list: Node[], size: number) {
      const geo = new THREE.BufferGeometry()
      const pos = new Float32Array(list.length * 3)
      const col = new Float32Array(list.length * 3)
      list.forEach((n, idx) => {
        pos[idx * 3] = n.p.x
        pos[idx * 3 + 1] = n.p.y
        pos[idx * 3 + 2] = n.p.z
        const c = COL[n.kind]
        col[idx * 3] = c.r
        col[idx * 3 + 1] = c.g
        col[idx * 3 + 2] = c.b
      })
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
      const mat = new THREE.PointsMaterial({
        size,
        map: sprite,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
      disposables.push(geo, mat)
      return new THREE.Points(geo, mat)
    }
    const basePts = makePoints(
      nodes.filter((n) => n.kind !== 'c'),
      0.55
    )
    group.add(basePts)
    const critPts = makePoints(
      nodes.filter((n) => n.kind === 'c'),
      0.95
    )
    group.add(critPts)

    const segPos: number[] = []
    for (let i = 0; i < nodes.length; i++) {
      const d: [number, number][] = []
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) d.push([nodes[i].p.distanceTo(nodes[j].p), j])
      }
      d.sort((a, b) => a[0] - b[0])
      for (let k = 0; k < Math.min(2, d.length); k++) {
        const jj = d[k][1]
        if (jj > i)
          segPos.push(
            nodes[i].p.x,
            nodes[i].p.y,
            nodes[i].p.z,
            nodes[jj].p.x,
            nodes[jj].p.y,
            nodes[jj].p.z
          )
      }
    }
    const lgeo = new THREE.BufferGeometry()
    lgeo.setAttribute('position', new THREE.Float32BufferAttribute(segPos, 3))
    const lmat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#C89B45'),
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const lines = new THREE.LineSegments(lgeo, lmat)
    group.add(lines)
    disposables.push(lgeo, lmat)

    const pathIdx: number[] = []
    ;(function () {
      let start = 0
      for (let s = 0; s < nodes.length; s++) {
        if (nodes[s].kind === 'c') {
          start = s
          break
        }
      }
      const used: Record<number, number> = {}
      let cur = start
      pathIdx.push(cur)
      used[cur] = 1
      for (let s2 = 0; s2 < 5; s2++) {
        let best = -1
        let bd = 1e9
        for (let j = 0; j < nodes.length; j++) {
          if (!used[j]) {
            const dd = nodes[cur].p.distanceTo(nodes[j].p)
            if (dd < bd) {
              bd = dd
              best = j
            }
          }
        }
        if (best < 0) break
        pathIdx.push(best)
        used[best] = 1
        cur = best
      }
    })()
    const ppos: number[] = []
    pathIdx.forEach((ix) => {
      ppos.push(nodes[ix].p.x, nodes[ix].p.y, nodes[ix].p.z)
    })
    const pgeo = new THREE.BufferGeometry()
    pgeo.setAttribute('position', new THREE.Float32BufferAttribute(ppos, 3))
    const pmat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#4FC9A3'),
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const pathLine = new THREE.Line(pgeo, pmat)
    group.add(pathLine)
    disposables.push(pgeo, pmat)

    let mx = 0
    let my = 0
    let tx = 0
    let ty = 0
    function onMove(e: MouseEvent) {
      const r = wrap!.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 0.5
      ty = ((e.clientY - r.top) / r.height - 0.5) * 0.5
    }
    function onLeave() {
      tx = 0
      ty = 0
    }
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', onLeave)

    function resize() {
      W = wrap!.clientWidth
      H = wrap!.clientHeight
      if (!W || !H) return
      renderer.setSize(W, H, false)
      camera.aspect = W / H
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize)

    let t = 0
    let raf = 0
    function frame() {
      t += 0.006
      group.rotation.y += 0.0016
      mx += (tx - mx) * 0.05
      my += (ty - my) * 0.05
      group.rotation.x = -my * 0.6
      camera.position.x = mx * 3
      camera.lookAt(0, 0, 0)
      const critMat = critPts.material as THREE.PointsMaterial
      critMat.size = 0.85 + Math.sin(t * 2.2) * 0.22
      critMat.opacity = 0.8 + Math.sin(t * 2.2) * 0.2
      pmat.opacity = 0.35 + (Math.sin(t * 1.6) * 0.5 + 0.5) * 0.4
      renderer.render(scene, camera)
      if (!reduce) raf = requestAnimationFrame(frame)
    }
    resize()
    if (reduce) {
      group.rotation.set(-0.15, 0.6, 0)
    }
    frame()

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseleave', onLeave)
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    }
  }, [])

  return (
    <div className="spine-3d">
      <canvas ref={canvasRef} id="assetGraph"></canvas>
      <div className="s3d-cap">ASSET GRAPH · ATTACK PATHS</div>
      <div className="s3d-legend">
        <span className="lg">
          <i className="d t"></i>Assets &amp; controls
        </span>
        <span className="lg">
          <i className="d b"></i>Exposure path
        </span>
        <span className="lg">
          <i className="d c"></i>Critical gap
        </span>
      </div>
    </div>
  )
}
