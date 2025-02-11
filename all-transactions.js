document.addEventListener("DOMContentLoaded", function () {
    const incomeList = document.getElementById("income-list");
    const expenseList = document.getElementById("expense-list");
  
    // Lấy dữ liệu từ localStorage
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  
    // Lọc giao dịch thu và chi
    const incomeTransactions = transactions.filter(t => t.type === 'income');
    const expenseTransactions = transactions.filter(t => t.type === 'expense');
  
    // Hiển thị danh sách thu
    incomeTransactions.forEach((transaction, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.amount.toLocaleString()} VND</td>
        <td>${transaction.reason}</td>
        <td><button class="delete-btn" data-type="income" data-index="${index}">Xóa</button></td>
      `;
      incomeList.appendChild(row);
    });
  
    // Hiển thị danh sách chi
    expenseTransactions.forEach((transaction, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.amount.toLocaleString()} VND</td>
        <td>${transaction.reason}</td>
        <td><button class="delete-btn" data-type="expense" data-index="${index}">Xóa</button></td>
      `;
      expenseList.appendChild(row);
    });
  
    // Xử lý xóa giao dịch
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        const index = this.getAttribute("data-index");
  
        // Lấy tất cả các giao dịch
        const updatedTransactions = transactions.filter((_, i) => i !== parseInt(index));
  
        // Lưu lại vào localStorage sau khi xóa
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  
        // Tải lại trang để cập nhật danh sách
        location.reload();
      });
    });
  });
  