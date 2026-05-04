document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("salesCommissionForm");
  if (!form) return;

  const paper = document.getElementById("salesCommissionPaper");

  const fields = {
    salespersonName: document.getElementById("salespersonName"),
    statementPeriod: document.getElementById("statementPeriod"),
    payoutDate: document.getElementById("payoutDate"),
    salesAmount: document.getElementById("salesAmount"),
    commissionRate: document.getElementById("commissionRate"),
    bonusThreshold: document.getElementById("bonusThreshold"),
    bonusAmount: document.getElementById("bonusAmount"),
    deductions: document.getElementById("deductions"),
    commissionNotes: document.getElementById("commissionNotes"),
  };

  const previewEls = {
    salesAmount: document.getElementById("previewSalesAmount"),
    commissionRate: document.getElementById("previewCommissionRate"),
    baseCommission: document.getElementById("previewBaseCommission"),
    bonusThreshold: document.getElementById("previewBonusThreshold"),
    bonusAmount: document.getElementById("previewBonusAmount"),
    deductions: document.getElementById("previewDeductions"),
    grossCommission: document.getElementById("previewGrossCommission"),
    netPayout: document.getElementById("previewNetPayout"),
  };

  function numberValue(value) {
    const number = Number.parseFloat(value);
    return Number.isFinite(number) ? number : 0;
  }

  function money(value) {
    return numberValue(value).toFixed(2);
  }

  function percent(value) {
    return `${numberValue(value).toFixed(2)}%`;
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

  function updateCalculations() {
    const salesAmount = numberValue(fields.salesAmount.value);
    const commissionRate = numberValue(fields.commissionRate.value);
    const bonusThreshold = numberValue(fields.bonusThreshold.value);
    const bonusAmount = numberValue(fields.bonusAmount.value);
    const deductions = numberValue(fields.deductions.value);

    const baseCommission = salesAmount * (commissionRate / 100);
    const earnedBonus = salesAmount >= bonusThreshold && bonusThreshold > 0 ? bonusAmount : 0;
    const grossCommission = baseCommission + earnedBonus;
    const netPayout = grossCommission - deductions;

    previewEls.salesAmount.textContent = money(salesAmount);
    previewEls.commissionRate.textContent = percent(commissionRate);
    previewEls.baseCommission.textContent = money(baseCommission);
    previewEls.bonusThreshold.textContent = money(bonusThreshold);
    previewEls.bonusAmount.textContent = money(earnedBonus);
    previewEls.deductions.textContent = money(deductions);
    previewEls.grossCommission.textContent = money(grossCommission);
    previewEls.netPayout.textContent = money(netPayout);
  }

  function updateAll() {
    updatePreviewFields();
    updateCalculations();
  }

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
      updateAll();
    }
  });

  form.addEventListener("input", updateAll);
  form.addEventListener("change", updateAll);

  setPaperSize("a4");
  updateAll();
});
