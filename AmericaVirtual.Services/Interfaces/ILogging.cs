using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Interfaces
{
    public interface ILogging
    {
        bool Login(string user,string password);
    }
}
