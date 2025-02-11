document.addEventListener("DOMContentLoaded", function () {
  const totalIncomeElement = document.getElementById("total-income");
  const totalExpenseElement = document.getElementById("total-expense");
  const remainingBalanceElement = document.getElementById("remaining-balance");
  const incomeList = document.getElementById("income-list");
  const expenseList = document.getElementById("expense-list");

  // Lấy dữ liệu từ localStorage
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  let totalIncome = 0;
  let totalExpense = 0;

  // Chỉ hiển thị tối đa 4 dòng
  const maxDisplayCount = 4;
  const incomeTransactions = transactions.filter(t => t.type === 'income').slice(0, maxDisplayCount);
  const expenseTransactions = transactions.filter(t => t.type === 'expense').slice(0, maxDisplayCount);

  // Hiển thị danh sách thu
  incomeTransactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.amount.toLocaleString()} VND</td>
      <td>${transaction.reason}</td>
    `;
    incomeList.appendChild(row);
    totalIncome += transaction.amount;
  });

  // Hiển thị danh sách chi
  expenseTransactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.amount.toLocaleString()} VND</td>
      <td>${transaction.reason}</td>
    `;
    expenseList.appendChild(row);
    totalExpense += transaction.amount;
  });

  // Tính số tiền còn
  const remainingBalance = totalIncome - totalExpense;

  // Cập nhật tổng thu, tổng chi, số tiền còn
  totalIncomeElement.textContent = totalIncome.toLocaleString();
  totalExpenseElement.textContent = totalExpense.toLocaleString();
  remainingBalanceElement.textContent = remainingBalance.toLocaleString();
});
