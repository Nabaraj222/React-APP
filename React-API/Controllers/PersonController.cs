using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using React_API.IdentityAuth;
using React_API.Models;
using React_API.Services;
using System.Xml;

namespace React_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly PersonService _personService;

        public PersonController(PersonService ProductService)
        {
            _personService = ProductService;

        }

        //Add Person  
        [HttpPost("AddPerson")]
        public async Task<Object> AddPerson([FromBody] Person person)
        {
            Response response = new Response();
            try
            {
                await _personService.AddPerson(person);
                response.Status = "Success";
                response.Message = "Person Added Successfully!";
            }
            catch (Exception)
            {
                response.Status = "Error";
                response.Message = "Error occurred while adding Person!";
            }
            return person;
        }

        //Delete Person  
        [HttpDelete("DeletePerson")]
        public async Task<Object> DeletePerson(int personId)
        {
            Response response = new Response();
            try
            {
                _personService.DeletePerson(personId);
                response.Status = "Success";
                response.Message = "Person Deleted Successfully!";
            }
            catch (Exception)
            {
                response.Status = "Error";
                response.Message = "Error occurred while deleting Person!";
            }
            return response;
        }

        //Delete Person  
        [HttpPut("UpdatePerson")]
        public async Task<Object> UpdatePerson(Person Object)
        {
            Response response = new Response();
            try
            {
                _personService.UpdatePerson(Object);
                response.Status = "Success";
                response.Message = "Person Updated Successfully!";
            }
            catch (Exception)
            {
                response.Status = "Error";
                response.Message = "Error occurred while Updating Person!";
            }
            return response;
        }

        //GET All Person  
        [HttpGet("GetAllPersons")]
        public Object GetAllPersons()
        {
            var data = _personService.GetAllPersons();
            var json = JsonConvert.SerializeObject(data,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }
    }
}
