using System.Threading.Tasks;
using Expenses.Core.DTO;
using Expenses.DB;

namespace Expenses.Core
{
    public interface IUserServices
    {
        Task<AuthenticatedUser> SignUp(User user);

        Task<AuthenticatedUser> SignIn(User user);
    }
}
