using AmericaVirtual.Domain.Entities;
using AmericaVirtual.Services.Interfaces;
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
    public class WeatherService : IWeatherService
    {
        private string _url { get; set; }

        public WeatherService()
        {
            _url = "https://localhost:44361/api/Weather/";
        }

        public WeatherResponse GetWeatherConditionsByCity(int cityId)
        {
            try
            {
                RestRequest request;
                var client = new RestClient(_url + "GetWeatherConditionsByCity?idCity=" + cityId);
                request = new RestRequest() { Method = Method.GET };
                request.Parameters.Clear();
                request.AddHeader("Content-Type", "application/json");
                var response = client.Execute(request);
                var weatherConditionResponse = JsonConvert.DeserializeObject<WeatherResponse>(response.Content);

                if (weatherConditionResponse != null)
                    return weatherConditionResponse;
                else
                    return new WeatherResponse();
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }    
}
