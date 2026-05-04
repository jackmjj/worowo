document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("purchaseOrderForm");
  if (!form) return;

  const poItemsBody = document.getElementById("poItemsBody");
  const addItemBtn = document.getElementById("addPOItemBtn");
  const paper = document.getElementById("purchaseOrderPaper");

  const poSubtotal = document.getElementById("poSubtotal");
  const poTax = document.getElementById("poTax");
  const poTotal = document.getElementById("poTotal");

  const poPreviewItemsBody = document.getElementById("poPreviewItemsBody");
  const poPreviewSubtotal = document.getElementById("poPreviewSubtotal");
  const poPreviewTax = document.getElementById("poPreviewTax");
  const poPreviewTotal = document.getElementById("poPreviewTotal");

  function numberValue(value) {
    const number = Number.parseFloat(value);
    return Number.isFinite(number) ? number : 0;
  }

  function money(value) {
    return numberValue(value).toFixed(2);
  }

  function formatDate(value) {
    if (!value) return "—";
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }

  function setPaperSize(size) {
    if (!paper) return;

    paper.classList.remove("document-paper-a4", "document-paper-letter");
    document.body.classList.remove("print-a4", "print-letter");

    if (size === "letter") {
      paper.classList.add("document-paper-letter");
      document.body.classList.add("print-letter");
    } else {
      paper.classList.add("document-paper-a4");
      document.body.classList.add("print-a4");
    }

    document.querySelectorAll("[data-paper-size]").forEach((button) => {
      button.classList.toggle("active", button.dataset.paperSize === size);
    });
  }

  function createRow() {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input class="item-desc" type="text" placeholder="Product description" /></td>
      <td><input class="item-qty calc-field" type="number" value="1" min="0" step="1" /></td>
      <td><input class="item-price calc-field" type="number" value="0" min="0" step="0.01" /></td>
      <td><input class="item-tax calc-field" type="number" value="0" min="0" step="0.01" /></td>
      <td><input class="item-amount" type="text" value="0.00" readonly /></td>
      <td><button class="remove-item-btn" type="button" aria-label="Remove item">×</button></td>
    `;
    return row;
  }

  function getRowsData() {
    return Array.from(poItemsBody.querySelectorAll("tr")).map((row) => {
      const desc = row.querySelector(".item-desc")?.value.trim() || "";
      const qty = numberValue(row.querySelector(".item-qty")?.value);
      const price = numberValue(row.querySelector(".item-price")?.value);
      const taxRate = numberValue(row.querySelector(".item-tax")?.value);
      const base = qty * price;
      const tax = (base * taxRate) / 100;
      const amount = base + tax;

      const amtInput = row.querySelector(".item-amount");
      if (amtInput) amtInput.value = money(amount);

      return { desc, qty, price, taxRate, base, tax, amount };
    });
  }

  function updatePreviewFields() {
    document.querySelectorAll("[data-preview]").forEach((target) => {
      const fieldId = target.dataset.preview;
      const input = document.getElementById(fieldId);

      if (!input) return;

      let value = input.value;
      if (input.type === "date") value = formatDate(value);

      target.textContent = value || "—";
    });
  }

  function updateTotals() {
    const rows = getRowsData();
    const totals = rows.reduce(
      (acc, row) => {
        acc.subtotal += row.base;
        acc.tax += row.tax;
        acc.total += row.amount;
        return acc;
      },
      { subtotal: 0, tax: 0, total: 0 },
    );

    poSubtotal.textContent = money(totals.subtotal);
    poTax.textContent = money(totals.tax);
    poTotal.textContent = money(totals.total);

    poPreviewSubtotal.textContent = money(totals.subtotal);
    poPreviewTax.textContent = money(totals.tax);
    poPreviewTotal.textContent = money(totals.total);

    poPreviewItemsBody.innerHTML = "";
    rows.forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${row.desc || "—"}</td>
        <td>${row.qty || ""}</td>
        <td>${money(row.price)}</td>
        <td>${row.taxRate ? `${money(row.taxRate)}%` : ""}</td>
        <td>${money(row.amount)}</td>
      `;
      poPreviewItemsBody.appendChild(tr);
    });
  }

  function updateAll() {
    updatePreviewFields();
    updateTotals();
  }

  addItemBtn.addEventListener("click", () => {
    poItemsBody.appendChild(createRow());
    updateAll();
  });

  poItemsBody.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("remove-item-btn")) return;

    const rows = poItemsBody.querySelectorAll("tr");
    if (rows.length <= 1) {
      rows[0].querySelectorAll("input").forEach((input) => {
        input.value = input.type === "number" ? "0" : "";
      });
      rows[0].querySelector(".item-qty").value = "1";
      rows[0].querySelector(".item-amount").value = "0.00";
    } else {
      target.closest("tr")?.remove();
    }

    updateAll();
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const paperButton = target.closest("[data-paper-size]");
    if (paperButton instanceof HTMLElement) {
      setPaperSize(paperButton.dataset.paperSize || "a4");
      return;
    }

    if (target.closest("[data-print-document]")) {
      updateAll();
      window.print();
      return;
    }

    if (target.closest("[data-reset-form]")) {
      form.reset();
      poItemsBody.innerHTML = "";
      poItemsBody.appendChild(createRow());
      updateAll();
    }
  });

  form.addEventListener("input", updateAll);
  form.addEventListener("change", updateAll);

  setPaperSize("a4");
  updateAll();
});
