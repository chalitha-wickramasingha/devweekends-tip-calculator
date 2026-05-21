/* ========================= */
/* DOM ELEMENTS */
/* ========================= */

const billAmountInput = document.getElementById("billAmount");
const customTipInput = document.getElementById("customTip");
const peopleCountInput = document.getElementById("peopleCount");

const tipButtons = document.querySelectorAll(".tip-btn");

const tipAmountDisplay = document.getElementById("tipAmount");
const grandTotalDisplay = document.getElementById("grandTotal");
const perPersonDisplay = document.getElementById("perPerson");

const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");
const peopleError = document.getElementById("peopleError");

const resetButton = document.getElementById("resetBtn");

/* ========================= */
/* APP STATE */
/* ========================= */

let selectedTip = 10;

/* ========================= */
/* FORMAT CURRENCY */
/* ========================= */

function formatCurrency(value) {
  return `Rs. ${value.toFixed(2)}`;
}

/* ========================= */
/* ERROR HANDLING */
/* ========================= */

function setError(element, message) {
  element.textContent = message;
}

function clearErrors() {
  setError(billError, "");
  setError(tipError, "");
  setError(peopleError, "");
}

/* ========================= */
/* RESET OUTPUTS */
/* ========================= */

function resetOutputs() {
  tipAmountDisplay.textContent = "Rs. 0.00";
  grandTotalDisplay.textContent = "Rs. 0.00";
  perPersonDisplay.textContent = "Rs. 0.00";
}

/* ========================= */
/* VALIDATION */
/* ========================= */

function validateInputs() {
  let isValid = true;

  clearErrors();

  const billValue = parseFloat(billAmountInput.value);

  const peopleValue = parseInt(peopleCountInput.value);

  const customTipValue = customTipInput.value.trim();

  const currentTip =
    customTipValue !== "" ? parseFloat(customTipValue) : selectedTip;

  /* ========================= */
  /* BILL VALIDATION */
  /* ========================= */

  if (billAmountInput.value.trim() !== "") {
    if (isNaN(billValue) || billValue <= 0) {
      setError(billError, "Bill amount must be greater than 0.");

      isValid = false;
    } else if (billValue > 1000000) {
      setError(billError, "Bill amount is too large.");

      isValid = false;
    }
  }

  /* ========================= */
  /* TIP VALIDATION */
  /* ========================= */

  if (customTipValue !== "") {
    if (isNaN(currentTip) || currentTip < 0) {
      setError(tipError, "Tip percentage cannot be negative.");

      isValid = false;
    } else if (currentTip > 100) {
      setError(tipError, "Tip percentage cannot exceed 100%.");

      isValid = false;
    }
  }

  /* ========================= */
  /* PEOPLE VALIDATION */
  /* ========================= */

  if (peopleCountInput.value.trim() !== "") {
    if (
      isNaN(peopleValue) ||
      peopleValue < 1 ||
      !Number.isInteger(peopleValue)
    ) {
      setError(peopleError, "Enter a valid number of people.");

      isValid = false;
    } else if (peopleValue > 1000) {
      setError(peopleError, "Too many people entered.");

      isValid = false;
    }
  }

  return isValid;
}

/* ========================= */
/* UPDATE CALCULATIONS */
/* ========================= */

function updateCalculations() {
  const billValue = parseFloat(billAmountInput.value);

  const peopleValue = parseInt(peopleCountInput.value);

  const customTipValue = customTipInput.value.trim();

  const currentTip =
    customTipValue !== "" ? parseFloat(customTipValue) : selectedTip;

  const isValid = validateInputs();

  /* ========================= */
  /* HANDLE EMPTY STATE */
  /* ========================= */

  if (
    billAmountInput.value.trim() === "" ||
    peopleCountInput.value.trim() === ""
  ) {
    resetOutputs();

    return;
  }

  /* ========================= */
  /* STOP IF INVALID */
  /* ========================= */

  if (!isValid) {
    resetOutputs();

    return;
  }

  /* ========================= */
  /* CALCULATIONS */
  /* ========================= */

  const tipAmount = (billValue * currentTip) / 100;

  const grandTotal = billValue + tipAmount;

  const perPerson = grandTotal / peopleValue;

  /* ========================= */
  /* UPDATE UI */
  /* ========================= */

  tipAmountDisplay.textContent = formatCurrency(tipAmount);

  grandTotalDisplay.textContent = formatCurrency(grandTotal);

  perPersonDisplay.textContent = formatCurrency(perPerson);
}

/* ========================= */
/* TIP BUTTON HANDLING */
/* ========================= */

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((btn) => {
      btn.classList.remove("active-tip");
    });

    button.classList.add("active-tip");

    selectedTip = parseFloat(button.dataset.tip);

    /* Clear custom tip */

    customTipInput.value = "";

    updateCalculations();
  });
});

/* ========================= */
/* CUSTOM TIP HANDLING */
/* ========================= */

customTipInput.addEventListener("input", () => {
  if (customTipInput.value.trim() !== "") {
    tipButtons.forEach((btn) => {
      btn.classList.remove("active-tip");
    });
  } else {
    tipButtons.forEach((btn) => {
      btn.classList.remove("active-tip");

      if (parseFloat(btn.dataset.tip) === selectedTip) {
        btn.classList.add("active-tip");
      }
    });
  }

  updateCalculations();
});

/* ========================= */
/* INPUT EVENTS */
/* ========================= */

billAmountInput.addEventListener("input", updateCalculations);

peopleCountInput.addEventListener("input", updateCalculations);

/* ========================= */
/* KEYBOARD NAVIGATION */
/* ========================= */

const inputs = [billAmountInput, customTipInput, peopleCountInput];

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const nextInput = inputs[index + 1];

      if (nextInput) {
        nextInput.focus();
      } else {
        resetButton.focus();
      }
    }
  });
});

/* ========================= */
/* RESET BUTTON */
/* ========================= */

resetButton.addEventListener("click", () => {
  /* Clear Inputs */

  billAmountInput.value = "";
  customTipInput.value = "";
  peopleCountInput.value = "";

  /* Reset Selected Tip */

  selectedTip = 10;

  tipButtons.forEach((btn) => {
    btn.classList.remove("active-tip");

    if (parseFloat(btn.dataset.tip) === 10) {
      btn.classList.add("active-tip");
    }
  });

  /* Clear Errors */

  clearErrors();

  /* Reset Outputs */

  resetOutputs();

  /* Focus First Input */

  billAmountInput.focus();
});

/* ========================= */
/* INITIALIZE */
/* ========================= */

/* Default Active Tip */

tipButtons.forEach((btn) => {
  if (parseFloat(btn.dataset.tip) === 10) {
    btn.classList.add("active-tip");
  }
});

/* Initial Output State */

resetOutputs();
