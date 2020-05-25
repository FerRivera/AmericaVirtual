using AmericaVirtual.Domain.Entities;
using AmericaVirtual.Presentation.Web.Models.ViewModels;
using AmericaVirtual.Services.Implementation;
using AmericaVirtual.Services.Interfaces;
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

            List<Country> countries = country.GetCountries();

            var selectList = new SelectList(countries,"id","name");

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

            List<City> cities = city.GetCitiesByCountry(countryId);

            List<SelectListItem> citiesSelectList = new List<SelectListItem>();

            citiesSelectList.Add(new SelectListItem { Text = "Seleccione", Value = "0" });

            foreach (var cityTemp in cities)
            {
                citiesSelectList.Add(new SelectListItem { Text = cityTemp.city, Value = cityTemp.id.ToString()});
            }

            return Json(new SelectList(citiesSelectList, "Value", "Text"));
        }
    }
}