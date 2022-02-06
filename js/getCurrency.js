const ratesCur = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const elementBYN = document.querySelector('[data-value="BYN"]');
async function getCurrence() {
  const responseCurrence = await fetch(
    "https://www.cbr-xml-daily.ru/daily_json.js"
  );
  const getJson = await responseCurrence.json();
  const result = await getJson;
  let usdCurrencyIsEdited,
    eurCurrencyIsEdited,
    gbpCurrencyIsEdited,
    bynCurrencyIsEdited;
  ratesCur.USD = result.Valute.USD;
  ratesCur.EUR = result.Valute.EUR;
  ratesCur.GBP = result.Valute.GBP;
  ratesCur.BYN = result.Valute.BYN;
  usdCurrencyIsEdited =
    ratesCur.USD.Value > ratesCur.USD.Previous
      ? elementUSD.classList.add("top")
      : elementUSD.classList.add("bottom");
  eurCurrencyIsEdited =
    ratesCur.EUR.Value > ratesCur.EUR.Previous
      ? elementEUR.classList.add("top")
      : elementEUR.classList.add("bottom");
  gbpCurrencyIsEdited =
    ratesCur.GBP.Value > ratesCur.GBP.Previous
      ? elementGBP.classList.add("top")
      : elementGBP.classList.add("bottom");
  bynCurrencyIsEdited =
    ratesCur.BYN.Value > ratesCur.BYN.Previous
      ? elementBYN.classList.add("top")
      : elementBYN.classList.add("bottom");
  elementUSD.textContent = ratesCur.USD.Value.toFixed(2) + "₽";
  elementEUR.textContent = ratesCur.EUR.Value.toFixed(2) + "₽";
  elementGBP.textContent = ratesCur.GBP.Value.toFixed(2) + "₽";
  elementBYN.textContent = ratesCur.BYN.Value.toFixed(2) + "₽";
}
