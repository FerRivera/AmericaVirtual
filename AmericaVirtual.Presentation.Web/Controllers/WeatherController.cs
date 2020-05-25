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

        //private SelectList CitySelectList(int countryId)
        //{
        //    CityServices city = new CityServices();

        //    List<City> cities = city.GetCitiesByCountry(countryId);

        //    var selectList = new SelectList(cities, "id", "city");

        //    return selectList;
        //}

        private SelectList CountrySelectList()
        {
            CountryServices country = new CountryServices();

            CountryResponse countriesResponse = country.GetCountries();
            List<Country> countriesList = new List<Country>();

            foreach (var countryTemp in countriesResponse.countries)
            {
                countriesList.Add(countryTemp);
            }

            var selectList = new SelectList(countriesList, "id","name");

            return selectList;
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
            }

            return View("Index", viewModel);
        }

        public JsonResult GetCities(int countryId)
        {
            CityServices city = new CityServices();
            List<City> citiesList = new List<City>();            

            CityResponse citiesResponse = city.GetCitiesByCountry(countryId);

            foreach (var cityTemp in citiesResponse.cities)
            {
                citiesList.Add(cityTemp);
            }
            //List<City> cities = city.GetCitiesByCountry(countryId);

            List<SelectListItem> citiesSelectList = new List<SelectListItem>();

            citiesSelectList.Add(new SelectListItem { Text = "Seleccione", Value = "0" });

            foreach (var cityTemp in citiesList)
            {
                citiesSelectList.Add(new SelectListItem { Text = cityTemp.city, Value = cityTemp.id.ToString()});
            }

            return Json(new SelectList(citiesSelectList, "Value", "Text"));
        }
    }
}