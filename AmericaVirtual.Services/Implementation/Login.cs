using AmericaVirtual.Services.Interfaces;
using AmericaVirtual.Services.Requests;
using AmericaVirtual.Services.Responses;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace AmericaVirtual.Services.Implementation
{
    public class Login : ILogin
    {
        private string _url { get; set; }

        public Login()
        {
            _url = "https://localhost:44361/api/Weather";
        }

        public bool UserLogin(string _username, string _password)
        {
            try
            {
                RestRequest request;
                var client = new RestClient(_url);
                request = new RestRequest() { Method = Method.POST };
                request.Parameters.Clear();
                request.AddHeader("Content-Type", "application/json");
                request.AddJsonBody(JsonConvert.SerializeObject(new LoginRequest { username = _username, password = _password }));
                var response = client.Execute(request);
                var loginResponse = JsonConvert.DeserializeObject<LoginResponse>(response.Content);
                return loginResponse.result;
            }
            catch (Exception)
            {

                throw;
            }        
        }
    }
}
