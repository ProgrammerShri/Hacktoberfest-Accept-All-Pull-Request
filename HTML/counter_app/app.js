var count = 0;

function changeCounter(num) {
  count += num;
  console.log(count);
  document.getElementById("count").innerHTML = count;
}
