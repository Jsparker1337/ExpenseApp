// Initialize an empty array to store expenses
const expenses = [];

// Get form elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

// Handle form submission
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = expenseNameInput.value;
    const amount = parseFloat(expenseAmountInput.value);

    if (!name || isNaN(amount)) {
        alert('Please enter valid expense details.');
        return;
    }

    // Create an expense object
    const expense = { name, amount };
    expenses.push(expense);

    // Update total amount
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    totalAmount.textContent = total.toFixed(2);

    // Render expenses
    renderExpenses();
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
});

// Render expenses
function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td><button class="button-remove"onclick="removeExpense(${index})">Delete</button></td>
        `;
        expenseList.appendChild(row);
    });
}

// Remove an expense
function removeExpense(index) {
    expenses.splice(index, 1);

      // Update total amount by subtracting the removed amount
      const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
      totalAmount.textContent = total.toFixed(2);
    renderExpenses();
}
