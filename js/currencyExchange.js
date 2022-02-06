const input = document.querySelector("#input");
const result = document.querySelector("#result");
const select = document.querySelector("#select");
input.oninput = convertValueCur;
select.oninput = convertValueCur;
function convertValueCur() {
  result.value = (
    parseFloat(input.value) / ratesCur[select.value].Value
  ).toFixed(2);
}
