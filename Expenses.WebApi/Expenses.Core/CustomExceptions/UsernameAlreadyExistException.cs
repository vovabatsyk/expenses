using System;
using System.Runtime.Serialization;

namespace Expenses.Core.CustomExceptions
{
    public class UsernameAlreadyExistException : Exception
    {
        public UsernameAlreadyExistException()
        {
        }

        public UsernameAlreadyExistException(string message) : base(message)
        {
        }

        public UsernameAlreadyExistException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public UsernameAlreadyExistException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
