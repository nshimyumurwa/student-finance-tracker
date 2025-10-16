const dashboardBody = document.getElementById("dashboardTableBody");
const records = loadRecords();

if (dashboardBody) {
  if (records.length === 0) {
    dashboardBody.innerHTML = `<tr><td colspan="4" class="empty">No records yet</td></tr>`;
  } else {
    records.slice(-5).forEach(r => {
      dashboardBody.innerHTML += `
        <tr>
          <td>${r.date}</td>
          <td>${r.desc}</td>
          <td>${r.amount}</td>
          <td>${r.type}</td>
        </tr>`;
    });
  }

  const income = records.filter(r => r.type === "income").reduce((s, r) => s + r.amount, 0);
  const expense = records.filter(r => r.type === "expense").reduce((s, r) => s + r.amount, 0);
 document.getElementById("totalIncome").textContent = `RWF ${income.toLocaleString()}`;
 document.getElementById("totalExpenses").textContent = `RWF ${expense.toLocaleString()}`;
 document.getElementById("balance").textContent = `RWF ${(income - expense).toLocaleString()}`;
  document.getElementById("totalRecords").textContent = records.length;
}

const statsText = document.getElementById("statsText");
if (statsText) {
  const total = records.length;
  const income = records.filter(r => r.type === "income").reduce((s, r) => s + r.amount, 0);
  const expense = records.filter(r => r.type === "expense").reduce((s, r) => s + r.amount, 0);
  statsText.textContent = `Total records: ${total}. Income: RWF ${income}. Expenses: RWF ${expense}.`;
}

document.getElementById("exportBtn")?.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(records, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "records.json";
  a.click();
});

document.getElementById("importFile")?.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (Array.isArray(imported)) {
        saveRecords(imported);
        showMessage("Data imported successfully", "success");
      } else throw new Error();
    } catch {
      showMessage("Invalid JSON file", "error");
    }
  };
  reader.readAsText(file);
});