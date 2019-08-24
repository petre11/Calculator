import { updateCalculatorView } from '/helper.js'
import { html } from "./shared/html.js";

const Button = (buttonValue, buttonClass) => html`
  <button
    class="button ${buttonClass}"
    onclick=${() => updateCalculatorView(buttonValue)}
  >
    ${buttonValue}
  </button>
`;

const ButtonRow = buttonsRow => html`
  <div class="buttons">
    ${buttonsRow.map(button => Button(button.value, button.className))}
  </div>
`;

const CalculatorView = state => html`
  <div class="calculator">
    <div class="logo">CASIO</div>
    <form id="displayForm">
      <input
        type="text"
        class="display"
        id="display"
        value=${state.valueToDisplay}
        disabled
      />
    </form>
    ${state.buttons.map(row => ButtonRow(row))}
  </div>
`;

export { CalculatorView };
