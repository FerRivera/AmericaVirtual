using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Domain.Entities
{
    public class City
    {
        public int id { get; set; }
        public string city { get; set; }
        public int active { get; set; }
        public string errors { get; set; }
    }
}
