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
uniform float scrollRatio;

void main() {
  float x = vUv.x;
  float y = vUv.y;
  float scrollA = (1.0 - y * 1.5) * max(0.0, scrollRatio * 3.0);
  float a = min(ceil(max(distance(vec2(zoomX * aspectRatio, zoomY), vec2(x * aspectRatio, y)) - zoomSize * aspectRatio, 0.0)), 1.0) * 0.9 * (1.0 - scrollA);
  gl_FragColor = vec4(0.0, 0.0, 0.0, a); // R, G, B, A
}`;