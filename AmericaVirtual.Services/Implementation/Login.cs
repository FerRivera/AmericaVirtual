using AmericaVirtual.Services.Interfaces;
using Newtonsoft.Json;
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
        public bool UserLogin(string user, string password)
        {
            using (HttpClient client = new HttpClient())
            {
                string url = _url + "?username=" + user + "&password=" + password;
                client.BaseAddress = new Uri(url);
                var responseTask = client.GetAsync(_url);
                responseTask.Wait();

                var result = responseTask.Result;

                if (result.IsSuccessStatusCode)
                {
                    var readTask = result.Content.ReadAsStringAsync();
                    readTask.Wait();
                    var content = new StringContent(JsonConvert.SerializeObject(readTask));

                    //JsonConvert.DeserializeObject<User>(response);
                    return true;

                    //return readTask.Result;
                }
                return false;

                
                //client.DefaultRequestHeaders.Accept.TryParseAdd("application/json");
                ////var request = client.GetAsync("[api url here]", content);

                //HttpResponseMessage response = client.GetAsync(url);

                //string data = await response.Content.ReadAsStringAsync();

                //if (response.IsSuccessStatusCode)
                //{
                //    return true;
                //}
                //else
                //{
                //    return false;
                //}

                //var content = new StringContent(JsonConvert.SerializeObject(data));
                //content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                //var request = http.PostAsync("[api url here]", content);

                //var response = request.Result.Content.ReadAsStringAsync().Result;

                //return JsonConvert.DeserializeObject<ResponseModelType>(response);
            }
        }
    }
}
