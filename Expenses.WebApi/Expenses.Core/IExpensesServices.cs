using System.Collections.Generic;
using Expenses.Core.DTO;

namespace Expenses.Core
{
    public interface IExpensesServices
    {
        List<Expense> GetExpenses();

        Expense GetExpense(int id);

        Expense CreateExpense(DB.Expense expense);

        void DeleteExpense(Expense expense);

        Expense EditExpense(Expense expense);
    }
}
