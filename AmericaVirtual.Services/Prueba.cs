using AmericaVirtual.Services.Implementation;
using AmericaVirtual.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services
{
    public class Prueba
    {        
        private ILogin loggingPrueba;

        public Prueba()
        {
            loggingPrueba = new Login2();
            loggingPrueba.UserLogin("","");
        }
    }
}
