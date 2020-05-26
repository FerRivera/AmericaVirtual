using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Domain.Entities
{
    public class WeatherCondition
    {
        public int temperatureCelsius { get; set; }
        public decimal temperatureFahrenheit { get; set; }
        public int precipitation { get; set; }
        public int humidity { get; set; }
        public int wind { get; set; }
        public string dayWeather { get; set; }
        public string dayName { get; set; }
        public int cityId { get; set; }
        public int dayId { get; set; }
        public int weatherId { get; set; }
    }
}
