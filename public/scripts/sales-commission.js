const COMMISSION_YEAR_MIN = 2026;
const COMMISSION_YEAR_MAX = 2033;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("salesCommissionForm");
  if (!form) return;

  const paper = document.getElementById("salesCommissionPaper");
  const tierList = document.getElementById("commissionTierList");
  const tierTemplate = document.getElementById("commissionTierTemplate");
  const addTierButton = document.getElementById("addTierButton");

  const fields = {
    salespersonName: document.getElementById("salespersonName"),
    commissionMonth: document.getElementById("commissionMonth"),
    commissionYear: document.getElementById("commissionYear"),
    commissionCurrency: document.getElementById("commissionCurrency"),
    payoutDate: document.getElementById("payoutDate"),
    salesAmount: document.getElementById("salesAmount"),
    baseSalary: document.getElementById("baseSalary"),
    bonusThreshold: document.getElementById("bonusThreshold"),
    bonusAmount: document.getElementById("bonusAmount"),
    deductions: document.getElementById("deductions"),
    commissionNotes: document.getElementById("commissionNotes"),
  };

  const previewEls = {
    salesAmount: document.getElementById("previewSalesAmount"),
    baseSalary: document.getElementById("previewBaseSalary"),
    baseSalaryTable: document.getElementById("previewBaseSalaryTable"),
    tierCommission: document.getElementById("previewTierCommission"),
    tierCommissionTable: document.getElementById("previewTierCommissionTable"),
    bonusThreshold: document.getElementById("previewBonusThreshold"),
    bonusAmount: document.getElementById("previewBonusAmount"),
    deductions: document.getElementById("previewDeductions"),
    grossCommission: document.getElementById("previewGrossCommission"),
    grossCommissionHero: document.getElementById("previewGrossCommissionHero"),
    netPayout: document.getElementById("previewNetPayout"),
    netPayoutHero: document.getElementById("previewNetPayoutHero"),
    tierTableBody: document.getElementById("previewTierTableBody"),
    statementPeriod: document.getElementById("previewStatementPeriod"),
    statementTitle: document.getElementById("previewStatementTitle"),
  };

  const currencyConfig = {
    USD: { symbol: "$" },
    EUR: { symbol: "€" },
    GBP: { symbol: "£" },
    CNY: { symbol: "¥" },
    JPY: { symbol: "¥" },
    CAD: { symbol: "$" },
    AUD: { symbol: "$" },
  };

  function numberValue(value) {
    const number = Number.parseFloat(value);
    return Number.isFinite(number) ? number : 0;
  }

  function currentCurrency() {
    const code = fields.commissionCurrency instanceof HTMLSelectElement
      ? fields.commissionCurrency.value || "USD"
      : "USD";
    return { code, symbol: currencyConfig[code]?.symbol || "$" };
  }

  function money(value) {
    const currency = currentCurrency();
    return `${currency.symbol}${numberValue(value).toFixed(2)}`;
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
      const isActive = button.dataset.paperSize === size;
      button.classList.toggle("is-active", isActive);
      button.classList.toggle("active", isActive);
    });
  }

  function updatePreviewFields() {
    document.querySelectorAll("[data-preview]").forEach((target) => {
      const fieldId = target.dataset.preview;
      if (fieldId === "statementPeriod") return;

      const input = document.getElementById(fieldId);
      if (!input) return;

      let value = input.value;
      if (input.type === "date") value = formatDate(value);
      target.textContent = value || "—";
    });

    const month = fields.commissionMonth instanceof HTMLSelectElement ? fields.commissionMonth.value : "";
    const year = fields.commissionYear instanceof HTMLSelectElement ? fields.commissionYear.value : "";
    const periodText = [month, year].filter(Boolean).join(" ") || "—";

    if (previewEls.statementPeriod) {
      previewEls.statementPeriod.textContent = periodText;
    }

    if (previewEls.statementTitle) {
      previewEls.statementTitle.textContent = month && year
        ? "Monthly Commission Statement"
        : "Sales Commission Statement";
    }
  }

  function createTierRow(preset = {}) {
    if (!tierList || !(tierTemplate instanceof HTMLTemplateElement)) return;

    const fragment = tierTemplate.content.cloneNode(true);
    const row = fragment.querySelector("[data-tier-row]");
    if (!(row instanceof HTMLElement)) return;

    const capInput = row.querySelector('[data-tier-field="cap"]');
    const rateInput = row.querySelector('[data-tier-field="rate"]');

    if (capInput instanceof HTMLInputElement) {
      capInput.value = preset.cap ?? "";
    }

    if (rateInput instanceof HTMLInputElement) {
      rateInput.value = preset.rate ?? "";
    }

    tierList.appendChild(fragment);
    updateTierLabels();
  }

  function getTierRows() {
    return Array.from(document.querySelectorAll("[data-tier-row]"));
  }

  function updateTierLabels() {
    const rows = getTierRows();

    rows.forEach((row, index) => {
      const title = row.querySelector("[data-tier-title]");
      const removeButton = row.querySelector("[data-remove-tier]");

      if (title) {
        title.textContent = `Tier ${index + 1}`;
      }

      if (removeButton instanceof HTMLButtonElement) {
        removeButton.hidden = rows.length <= 1;
      }
    });
  }

  function collectTiers() {
    return getTierRows().map((row, index) => {
      const capInput = row.querySelector('[data-tier-field="cap"]');
      const rateInput = row.querySelector('[data-tier-field="rate"]');
      const rawCap = capInput instanceof HTMLInputElement ? capInput.value.trim() : "";
      const rawRate = rateInput instanceof HTMLInputElement ? rateInput.value.trim() : "";

      return {
        index,
        cap: rawCap === "" ? null : numberValue(rawCap),
        rate: rawRate === "" ? 0 : numberValue(rawRate),
      };
    });
  }

  function calculateTierCommission(salesAmount) {
    const tiers = collectTiers();
    let previousCap = 0;
    let totalCommission = 0;
    const breakdown = [];

    tiers.forEach((tier, index) => {
      const upperCap = tier.cap == null ? salesAmount : Math.max(previousCap, tier.cap);
      const taxableSales = Math.max(0, Math.min(salesAmount, upperCap) - previousCap);
      const commission = taxableSales * (tier.rate / 100);

      breakdown.push({
        label: `Tier ${index + 1}`,
        from: previousCap,
        to: tier.cap == null ? null : upperCap,
        rate: tier.rate,
        taxableSales,
        commission,
      });

      totalCommission += commission;
      previousCap = upperCap;
    });

    if (tiers.length === 0) {
      breakdown.push({
        label: "Tier 1",
        from: 0,
        to: null,
        rate: 0,
        taxableSales: 0,
        commission: 0,
      });
    }

    return { totalCommission, breakdown };
  }

  function renderTierBreakdown(breakdown) {
    if (!previewEls.tierTableBody) return;

    const rows = breakdown
      .map((tier) => {
        const rangeText = tier.to == null
          ? `${money(tier.from)} and above`
          : `${money(tier.from)} to ${money(tier.to)}`;

        return `
          <tr>
            <td>${tier.label}</td>
            <td>${rangeText}</td>
            <td>${percent(tier.rate)}</td>
            <td>${money(tier.commission)}</td>
          </tr>
        `;
      })
      .join("");

    previewEls.tierTableBody.innerHTML = rows || `
      <tr>
        <td colspan="4">Add tier settings to see the commission breakdown.</td>
      </tr>
    `;
  }

  function updateCalculations() {
    const salesAmount = numberValue(fields.salesAmount.value);
    const baseSalary = numberValue(fields.baseSalary.value);
    const bonusThreshold = numberValue(fields.bonusThreshold.value);
    const bonusAmount = numberValue(fields.bonusAmount.value);
    const deductions = numberValue(fields.deductions.value);

    const tierResult = calculateTierCommission(salesAmount);
    const earnedBonus = salesAmount >= bonusThreshold && bonusThreshold > 0 ? bonusAmount : 0;
    const grossCommission = baseSalary + tierResult.totalCommission + earnedBonus;
    const netPayout = grossCommission - deductions;

    previewEls.salesAmount.textContent = money(salesAmount);
    previewEls.baseSalary.textContent = money(baseSalary);
    previewEls.baseSalaryTable.textContent = money(baseSalary);
    previewEls.tierCommission.textContent = money(tierResult.totalCommission);
    previewEls.tierCommissionTable.textContent = money(tierResult.totalCommission);
    previewEls.bonusThreshold.textContent = money(bonusThreshold);
    previewEls.bonusAmount.textContent = money(earnedBonus);
    previewEls.deductions.textContent = money(deductions);
    previewEls.grossCommission.textContent = money(grossCommission);
    previewEls.grossCommissionHero.textContent = money(grossCommission);
    previewEls.netPayout.textContent = money(netPayout);
    previewEls.netPayoutHero.textContent = money(netPayout);

    renderTierBreakdown(tierResult.breakdown);
  }

  function updateAll() {
    updatePreviewFields();
    updateCalculations();
  }

  function resetForm() {
    form.reset();
    if (tierList) {
      tierList.innerHTML = "";
    }
    createTierRow({ cap: "10000", rate: "3" });
    createTierRow({ cap: "", rate: "5" });
    if (fields.commissionMonth instanceof HTMLSelectElement) {
      fields.commissionMonth.value = "";
    }
    if (fields.commissionYear instanceof HTMLSelectElement) {
      fields.commissionYear.value = "";
    }
    if (fields.commissionCurrency instanceof HTMLSelectElement) {
      fields.commissionCurrency.value = "USD";
    }
    updateAll();
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
      resetForm();
      return;
    }

    if (target.closest("[data-calculate-commission]")) {
      updateAll();
      return;
    }

    if (target.closest("#addTierButton")) {
      createTierRow({ cap: "", rate: "" });
      updateAll();
      return;
    }

    const removeButton = target.closest("[data-remove-tier]");
    if (removeButton) {
      const row = removeButton.closest("[data-tier-row]");
      if (row && getTierRows().length > 1) {
        row.remove();
        updateTierLabels();
        updateAll();
      }
    }
  });

  document.addEventListener("focusin", (event) => {
    const input = event.target.closest("[data-clear-zero-on-focus='true']");
    if (!(input instanceof HTMLInputElement)) return;

    if (input.value === "0" || input.value === "0.00") {
      input.value = "";
    }
  });

  document.addEventListener("focusout", (event) => {
    const input = event.target.closest("[data-clear-zero-on-focus='true']");
    if (!(input instanceof HTMLInputElement)) return;

    const defaultValue = input.dataset.defaultValue ?? "0";
    if (input.value.trim() === "") {
      input.value = defaultValue;
    }

    updateAll();
  });

  form.addEventListener("input", updateAll);
  form.addEventListener("change", updateAll);

  addTierButton?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      createTierRow({ cap: "", rate: "" });
      updateAll();
    }
  });

  const now = new Date();

  if (fields.commissionMonth instanceof HTMLSelectElement) {
    fields.commissionMonth.value = fields.commissionMonth.value || now.toLocaleString("en-US", { month: "long" });
  }
  if (fields.commissionYear instanceof HTMLSelectElement) {
    const y = now.getFullYear();
    const yStr = String(y);
    const hasYearOption = Array.from(fields.commissionYear.options).some((o) => o.value === yStr);
    const fallbackYear = hasYearOption ? yStr : String(COMMISSION_YEAR_MIN);
    fields.commissionYear.value = fields.commissionYear.value || fallbackYear;
    if (fields.commissionYear.value) {
      const yv = Number.parseInt(fields.commissionYear.value, 10);
      if (!Number.isFinite(yv) || yv < COMMISSION_YEAR_MIN || yv > COMMISSION_YEAR_MAX) {
        fields.commissionYear.value = String(COMMISSION_YEAR_MIN);
      }
    }
  }
  if (fields.payoutDate instanceof HTMLInputElement) {
    fields.payoutDate.value = fields.payoutDate.value || now.toISOString().slice(0, 10);
  }
  if (fields.commissionCurrency instanceof HTMLSelectElement) {
    fields.commissionCurrency.value = fields.commissionCurrency.value || "USD";
  }

  setPaperSize("a4");
  createTierRow({ cap: "10000", rate: "3" });
  createTierRow({ cap: "", rate: "5" });
  updateAll();
});
