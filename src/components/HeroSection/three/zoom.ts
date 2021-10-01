export const ZOOM_VERTEX_SHADER =  `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
export const ZOOM_FRAGMENT_SHADER = `
varying vec2 vUv;
uniform float aspectRatio;
uniform float zoomSize;
uniform float zoomX;
uniform float zoomY;

void main() {
  float a = min(ceil(max(distance(vec2(zoomX * aspectRatio, zoomY), vec2(vUv.x * aspectRatio, vUv.y)) - zoomSize * aspectRatio, 0.0)), 1.0) * 0.9;
  gl_FragColor = vec4(0.0, 0.0, 0.0, a); // R, G, B, A
}`;