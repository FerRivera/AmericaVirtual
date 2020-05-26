using AmericaVirtual.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Responses
{
    public class WeatherResponse
    {
        public List<WeatherCondition> weatherConditions { get; set; }
        public string errors { get; set; }
    }
}
