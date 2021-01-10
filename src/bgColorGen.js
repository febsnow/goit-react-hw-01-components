const random = () => Math.floor(255 * Math.random());

export default function setBgColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}
