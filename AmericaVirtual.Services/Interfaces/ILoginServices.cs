using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Interfaces
{
    public interface ILoginServices
    {
        bool UserLogin(string user,string password);
    }
}
