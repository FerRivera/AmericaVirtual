using AmericaVirtual.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Implementation
{
    public class Logging : ILogging
    {
        public bool Login(string user, string password)
        {
            return true;
        }
    }
}
