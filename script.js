function changeText() {
  const heading = document.getElementById("dynamicText");
  heading.textContent = "Text has been changed!";
  heading.style.color = "crimson";
  heading.style.fontSize = "26px";
}

function toggleElement() {
  const container = document.getElementById("toggleElement");
  const existingPara = document.getElementById("dynamicPara");

  if (existingPara) {
    container.removeChild(existingPara);
  } else {
    const para = document.createElement("p");
    para.id = "dynamicPara";
    para.textContent = "This paragraph was added dynamically.";
    para.style.color = "green";
    container.appendChild(para);
  }
}
