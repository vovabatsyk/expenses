﻿using Microsoft.EntityFrameworkCore;

namespace Expenses.DB
{
    public class AppDbContext: DbContext
    {
        public DbSet<Expense> Expenses { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=DESKTOP-38N1J1R\SQLEXPRESS;Database=ExpensesDB;Integrated Security=True"

                );

        }
    }
}
