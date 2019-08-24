export const state = {
    currentButtonValue: "0",
    valueToDisplay: "0",
    buttons: [
        [
            { className: "special_button", value: "AC" },
            { className: "functional_button", value: "C" },
            { className: "functional_button", value: "√" },
            { className: "functional_button", value: "%" }
        ],
        [
            { className: "operators", value: "7" },
            { className: "operators", value: "8" },
            { className: "operators", value: "9" },
            { className: "functional_button", value: "÷" }
        ],
        [
            { className: "operators", value: "4" },
            { className: "operators", value: "5" },
            { className: "operators", value: "6" },
            { className: "functional_button", value: "×" }
        ],
        [
            { className: "operators", value: "4" },
            { className: "operators", value: "5" },
            { className: "operators", value: "6" },
            { className: "functional_button", value: "-" }
        ],
        [
            { className: "operators", value: "1" },
            { className: "operators", value: "." },
            { className: "operators", value: "=" },
            { className: "functional_button", value: "+" }
        ]
    ]
};
