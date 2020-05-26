using AmericaVirtual.Domain.Entities;
using AmericaVirtual.Presentation.Web.Models.ViewModels;
using AmericaVirtual.Services.Implementation;
using AmericaVirtual.Services.Interfaces;
using AmericaVirtual.Services.Responses;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AmericaVirtual.Presentation.Web.Controllers
{
    public class WeatherController : Controller
    {        
        // GET: Weather
        public ActionResult Index()
        {
            var viewModel = new WeatherViewModel();
            viewModel.isLogged = false;
            return View("Index",viewModel);
        }

        private List<WeatherCondition> GetWeatherConditions(int cityId)
        {
            IWeatherService weatherService = new WeatherService();

            WeatherResponse weatherResponse = weatherService.GetWeatherConditionsByCity(cityId);
            List<WeatherCondition> weatherConditionsList = new List<WeatherCondition>();
            weatherConditionsList = weatherResponse.weatherConditions;

            return weatherConditionsList;
        }

        private SelectList CountrySelectList()
        {
            ICountryServices country = new CountryServices();

            CountryResponse countriesResponse = country.GetCountries();
            List<Country> countriesList = new List<Country>();
            countriesList = countriesResponse.countries;

            var selectList = new SelectList(countriesList, "id","name");

            return selectList;
        }

        [HttpPost]
        public ActionResult Logout()
        {
            var viewModel = new WeatherViewModel();
            viewModel.isLogged = false;
            return View("Index", viewModel);
        }

        [HttpPost]
        public ActionResult Login([Required]string username, [Required]string password)
        {
            ILoginServices login = new LoginServices();

            var viewModel = new WeatherViewModel();

            bool logged = login.UserLogin(username, password);

            if (logged)
            {
                viewModel.isLogged = true;
                viewModel.countryList = CountrySelectList();

                List<SelectListItem> citiesSelectList = new List<SelectListItem>();
                var citySelectList = new SelectList(citiesSelectList, "Value", "Text");
                viewModel.cityList = citySelectList;

                var weatherConditions = GetWeatherConditions(1);
                viewModel.weatherConditions = weatherConditions;

                viewModel.username = username;
            }

            return View("Index", viewModel);
        }

        public JsonResult GetCities(int countryId)
        {
            ICityServices city = new CityServices();            

            CityResponse citiesResponse = city.GetCitiesByCountry(countryId);
            List<City> citiesList = new List<City>();
            citiesList = citiesResponse.cities;

            List<SelectListItem> citiesSelectList = new List<SelectListItem>();

            citiesSelectList.Add(new SelectListItem { Text = "Seleccione", Value = "0" });

            foreach (var cityTemp in citiesList)
            {
                citiesSelectList.Add(new SelectListItem { Text = cityTemp.city, Value = cityTemp.id.ToString()});
            }

            return Json(new SelectList(citiesSelectList, "Value", "Text"));
        }

        public JsonResult GetWeatherConditionsJson(int cityId)
        {
            IWeatherService weatherService = new WeatherService();

            WeatherResponse weatherResponse = weatherService.GetWeatherConditionsByCity(cityId);
            List<WeatherCondition> weatherConditionsList = new List<WeatherCondition>();
            weatherConditionsList = weatherResponse.weatherConditions;

            return Json(weatherConditionsList);
        }
    }
}