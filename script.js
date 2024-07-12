let heatmap = document.getElementById("heatmap");
let hover = document.getElementById("hover");

function addDay(week, data, color, max, min) {
  let div = document.createElement("div");
  week.appendChild(div);

  div.style.width = "10px";
  div.style.height = "10px";
  div.style.margin = "0px";
  div.style.marginRight = "1px";
  div.style.marginBottom = "1px";
  div.style.padding = "0px";

  if (data) {
    let value = (data.value - min) / (max - min);
    let r = color.r;
    let g = color.g;
    let b = color.b;
    div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${value})`;
  }
}

function addWeek(data, e, startIdx, color, max, min) {
  let week = document.createElement("div");
  week.style.display = "inline-block";
  e.appendChild(week);

  for (let j = 0; j < 7; j++) {
    let idx = startIdx + j;
    let d = data[idx];

    addDay(week, d, color, max, min);
  }
}
