using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Domain.Entities
{
    public class WeatherCondition
    {
        public string dayName { get; set; }
        public int cityId { get; set; }
        public int dayId { get; set; }
        public int weatherId { get; set; }
    }
}
