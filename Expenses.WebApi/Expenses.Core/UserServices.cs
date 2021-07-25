﻿using System;
using System.Threading.Tasks;
using Expenses.Core.CustomExceptions;
using Expenses.Core.DTO;
using Expenses.Core.DTO.Util;
using Expenses.DB;
using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;

namespace Expenses.Core
{
    public class UserServices : IUserServices
    {
        private readonly AppDbContext _context;
        private readonly IPasswordHasher _passwordHasher;


        public UserServices(AppDbContext context , IPasswordHasher passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        public async Task<AuthenticatedUser> SignUp(User user)
        {
            var checkUser = await _context.Users.FirstOrDefaultAsync(u => u.Username.Equals(user.Username));

            if (checkUser != null)
            {
                throw new UsernameAlreadyExistException("Username already exists");
            }

            user.Password = _passwordHasher.HashPassword(user.Password);

            await _context.AddAsync(user);
            await _context.SaveChangesAsync();

            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = JwtGenerator.GenerateUserToken(user.Username)
            };
        }

        public async Task<AuthenticatedUser> SignIn(User user)
        {
            var dbUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);

            if (dbUser == null || _passwordHasher.VerifyHashedPassword(dbUser.Password, user.Password) ==
                PasswordVerificationResult.Failed)
            {
                throw new InvalidUsernamePasswordException("Invalid username or password");
            }

            return new AuthenticatedUser
            {
                Username = user.Username,
                Token = JwtGenerator.GenerateUserToken(user.Username)
            };
        }
    }
}