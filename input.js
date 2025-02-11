// Lắng nghe sự kiện gửi form
document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form
    
    // Lấy giá trị từ các input
    const month = document.getElementById('month').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    // Kiểm tra nếu nhập đầy đủ thông tin
    if (month && amount) {
      // Lưu trữ vào localStorage (hoặc gửi đến server nếu cần)
      let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
      expenses.push({ month, amount });
      localStorage.setItem('expenses', JSON.stringify(expenses));
  
      // Xóa dữ liệu form sau khi lưu
      document.getElementById('expenseForm').reset();
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  });
  