using AmericaVirtual.Domain.Entities;
using AmericaVirtual.Services.Interfaces;
using AmericaVirtual.Services.Responses;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Implementation
{
    public class CountryServices : ICountryServices
    {
        private string _url { get; set; }

        public CountryServices()
        {
            _url = "https://localhost:44361/api/Weather/GetActiveCountries";
        }
        public List<Country> GetCountries()
        {
            try
            {
                RestRequest request;
                var client = new RestClient(_url);
                request = new RestRequest() { Method = Method.GET };
                request.Parameters.Clear();
                request.AddHeader("Content-Type", "application/json");
                var response = client.Execute(request,Method.GET);
                var countriesResponse = JsonConvert.DeserializeObject<List<Country>>(response.Content);
                
                if (countriesResponse != null)
                    return countriesResponse;
                else
                    return new List<Country>();
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
