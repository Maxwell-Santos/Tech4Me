import { url } from "./carros.js";

const container = document.getElementById("container")

const paragraph = document.createElement("p")
paragraph.innerHTML = url
container.appendChild(paragraph)