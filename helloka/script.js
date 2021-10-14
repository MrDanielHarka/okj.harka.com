function doBoom() {
  document.body.style.backgroundColor = 'red';
  document.getElementById('button').style.visibility = 'hidden';
  document.querySelector('.background').textContent = 'BOOM!';
}

document.getElementById('button').addEventListener('mouseover', mouseOver);
document.getElementById('button').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('button').style.color = 'red';
  document.querySelector('#button').textContent = 'Mondom NE!';
}

function mouseOut() {
  document.getElementById('button').style.color = 'black';
  document.querySelector('#button').textContent = 'Ne nyomj meg!';
}
