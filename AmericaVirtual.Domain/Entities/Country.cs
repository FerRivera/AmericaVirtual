using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Domain.Entities
{
    public class Country
    {
        public int id { get; set; }
        public string name { get; set; }
        public int active { get; set; }
    }
}
