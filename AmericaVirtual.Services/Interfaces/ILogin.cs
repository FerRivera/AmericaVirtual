using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Interfaces
{
    public interface ILogin
    {
        bool UserLogin(string user,string password);
    }
}
