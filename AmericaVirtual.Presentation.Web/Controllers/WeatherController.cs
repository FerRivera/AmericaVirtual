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
            //ILogin login = new Login();
            //Loging loging = new Loging();
            //login.UserLogin("fernando","rivera");
            //if(!string.IsNullOrEmpty(login))

            //return View();

            ILogin login = new Login();
            //Loging loging = new Loging();

            bool logged = login.UserLogin("", "");

            if (logged)
                return View();
            else
                return View("NotLogged");
        }



        public ActionResult Login()
        {
            ILogin login = new Login();
            //Loging loging = new Loging();

            bool logged = login.UserLogin("fernando", "rivera");

            if(logged)
                return View();
            else
                return View("NotLogged");
        }
    }
}