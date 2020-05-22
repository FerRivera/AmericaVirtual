using AmericaVirtual.Services.Implementation;
using AmericaVirtual.Services.Interfaces;
using System;
using System.Collections.Generic;
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
            ILogin login = new Login();
            //Loging loging = new Loging();
            login.UserLogin("fernando","rivera");
            return View();
        }
    }
}