using System;
using System.Threading.Tasks;
using Expenses.Core;
using Expenses.Core.CustomExceptions;
using Expenses.DB;
using Microsoft.AspNetCore.Mvc;

namespace Expenses.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController:ControllerBase
    {

        private readonly IUserServices _usersServices;

        public AuthenticationController(IUserServices usersServices)
        {
            _usersServices = usersServices;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(User user)
        {
            try
            {
                var result = await _usersServices.SignUp(user);
                return Created("", result);
            }
            catch (UsernameAlreadyExistException e)
            {
                return StatusCode(409, e.Message);
            }
           
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(User user)
        {
            try
            {
                var result = await _usersServices.SignIn(user);
                return Ok(result);
            }
            catch (InvalidUsernamePasswordException e)
            {
                return StatusCode(401, e.Message);
            }
        }
    }
}
