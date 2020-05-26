using AmericaVirtual.Domain.Entities;
using AmericaVirtual.Services.Interfaces;
using AmericaVirtual.Services.Requests;
using AmericaVirtual.Services.Responses;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Implementation
{
    public class CityServices : ICityServices
    {
        private string _url { get; set; }

        public CityServices()
        {
            _url = "https://localhost:44361/api/Weather/GetActiveCitiesByCountry";
        }

        public CityResponse GetCitiesByCountry(int _countryId)
        {
            try
            {
                RestRequest request;
                var client = new RestClient(_url + "/?idCountry=" + _countryId);
                request = new RestRequest() { Method = Method.GET };
                request.Parameters.Clear();
                request.AddHeader("Content-Type", "application/json");
                var response = client.Execute(request);
                var citiesResponse = JsonConvert.DeserializeObject<CityResponse>(response.Content);

                if (citiesResponse != null)
                    return citiesResponse;
                else
                    return new CityResponse();
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
