function loadRecords() {
  const saved = localStorage.getItem("recordsList");
  if (saved) {
    return JSON.parse(saved);
  } else {
    // If nothing saved, load sample data
    return [
      { date: "2025-10-10", desc: "Allowance from Dad", amount: 15000, type: "income" },
      { date: "2025-10-12", desc: "Groceries", amount: 5000, type: "expense" },
      { date: "2025-10-13", desc: "Choir Transport", amount: 2000, type: "expense" },
      { date: "2025-10-14", desc: "Online Gig Payment", amount: 25000, type: "income" }
    ];
  }
}

function saveRecords(records) {
  localStorage.setItem("recordsList", JSON.stringify(records));
}

function showMessage(text, type = "info") {
  const msg = document.createElement("div");
  msg.textContent = text;
  msg.className = `msg ${type}`;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}