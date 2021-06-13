import './assets/css/style.css';
import './modules/factory';

const world = 'world';

export function hello(word: string = world): string {

  return `Hello ${world}! `;
}

console.log(hello());

function greet(person: string, date: Date) {
  return `Hello ${person}, today is ${date.toDateString()}!`;
}

console.log(greet('12', new Date()));

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}

console.log(padLeft(12, 'novo input'))

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4, m: 5 };

console.log(getProperty(x, "a"));
console.log(getProperty(x, "m"));

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01") as HTMLImageElement;
var captionText = document.getElementById("caption");

function openModal(event: any) {

  if (modal && modalImg && captionText) {
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
  }

}

(<any>window).openModal = openModal;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal && (modal.style.display = "none");
}

