using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RXJsDemo.Controllers
{
    [Route("api/[controller]")]
    public class NameController : Controller
    {
        private static string[] _searchableList = new[]
        {
            "Jeff","John","Mark","Steve","Brandon","Josh","Scott","Adam","Darrel","Dan"
        };

        [HttpGet("[action]")]
        public IEnumerable<string> NameSearch(string search)
        {
            return _searchableList.Where(x => x.ToLower().StartsWith(search.ToLower()));
        }

        [HttpGet("[action]")]
        public string[] LongNameListRetrieve()
        {
            System.Threading.Thread.Sleep(5000);
            return _searchableList;
        }
    }
}
