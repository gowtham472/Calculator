const workspace = document.getElementById("workspace");
const buttons = document.querySelectorAll(".buttons button");
const equalButton = document.getElementById("equal-button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (!value) return;

        if (value === "sqrt") {
            workspace.textContent = Math.sqrt(parseFloat(workspace.textContent)) || "";
        } else if (value === "square") {
            workspace.textContent = Math.pow(parseFloat(workspace.textContent), 2) || "";
        } else if (value === "delete") {
            workspace.textContent = workspace.textContent.slice(0, -1);
        } else {
            workspace.textContent += value;
        }
    });
});

equalButton.addEventListener("click", () => {
    try {
        workspace.textContent = eval(workspace.textContent);
    } catch {
        workspace.textContent = "Error";
    }
});
