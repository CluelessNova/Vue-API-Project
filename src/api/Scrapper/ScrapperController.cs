using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Google.Apis.Customsearch.v1;
using Google.Apis.Customsearch.v1.Data;
using Google.Apis.Services;

namespace CashStarAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CashStarController : ControllerBase
    {
        private readonly string apiKey = "AIzaSyAtYf9I0oTn21hjejTUU7G2TmZoANr54FA";
        private readonly string cx = "a42fbf1b6541a42d4";

        [HttpGet("subdomains")]
        public async Task<ActionResult<IEnumerable<string>>> GetSubdomains()
        {
            var customSearchService = new CustomsearchService(new BaseClientService.Initializer
            {
                ApplicationName = "Client Subdomain Search",
                ApiKey = apiKey,
            });

            var listRequest = customSearchService.Cse.List();
            listRequest.Q = "site:*.cashstar.com";
            listRequest.Cx = cx;

            var searchResults = await listRequest.ExecuteAsync();
            var subdomains = new List<string>();

            foreach (var item in searchResults.Items)
            {
                subdomains.Add(item.Link);
            }

            return Ok(subdomains);
        }
    }
}