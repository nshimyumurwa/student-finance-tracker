const addBtn = document.getElementById("addRecordBtn");
const modal = document.getElementById("recordModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("recordForm");
const tableBody = document.getElementById("recordsTableBody");

let recordsList = loadRecords();
let editIndex = null;

addBtn.onclick = () => {
  form.reset();
  editIndex = null;
  modal.classList.remove("hidden");
};

closeModal.onclick = () => modal.classList.add("hidden");

form.onsubmit = (e) => {
  e.preventDefault();
  const desc = document.getElementById("desc").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!desc || isNaN(amount) || amount <= 0) {
    return showMessage("Please enter valid details", "error");
  }

  const record = {
    date: new Date().toLocaleDateString(),
    desc,
    amount,
    type
  };

  if (editIndex !== null) {
    recordsList[editIndex] = record;
    showMessage("Record updated successfully", "success");
  } else {
    recordsList.push(record);
    showMessage("Record added successfully", "success");
  }

  saveRecords(recordsList);
  renderRecords();
  modal.classList.add("hidden");
};

function renderRecords() {
  tableBody.innerHTML = "";

  if (recordsList.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" class="empty">No records yet</td></tr>`;
    return;
  }

  recordsList.forEach((r, i) => {
    tableBody.innerHTML += `
      <tr>
        <td>${r.date}</td>
        <td>${r.desc}</td>
        <td>RWF ${r.amount.toLocaleString()}</td>
        <td>${r.type}</td>
        <td>
          <button onclick="editRecord(${i})" class="btn-secondary">Edit</button>
          <button onclick="deleteRecord(${i})" class="btn-secondary">Delete</button>
        </td>
      </tr>`;
  });
}

function deleteRecord(i) {
  if (confirm("Delete this record?")) {
    recordsList.splice(i, 1);
    saveRecords(recordsList);
    renderRecords();
    showMessage("Record deleted", "info");
  }
}

function editRecord(i) {
  const r = recordsList[i];
  document.getElementById("desc").value = r.desc;
  document.getElementById("amount").value = r.amount;
  document.getElementById("type").value = r.type;
  editIndex = i;
  modal.classList.remove("hidden");
}

renderRecords();