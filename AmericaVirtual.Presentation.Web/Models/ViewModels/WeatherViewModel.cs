using AmericaVirtual.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AmericaVirtual.Presentation.Web.Models.ViewModels
{
    public class WeatherViewModel
    {
        [DisplayName("Ciudad")]
        public SelectList cityList { get; set; }
        [DisplayName("País")]
        public SelectList countryList { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Seleccione País")]
        [DisplayName("País")]
        public int country { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Seleccione Ciudad")]
        [DisplayName("Ciudad")]
        public int city { get; set; }
        public bool isLogged { get; set; }
        public List<WeatherCondition> weatherConditions { get; set; }
        public int temperatureCelsius { get; set; }
        public decimal temperatureFahrenheit { get; set; }
        public int precipitation { get; set; }
        public int humidity { get; set; }
        public int wind { get; set; }
        public string username { get; set; }
    }
}