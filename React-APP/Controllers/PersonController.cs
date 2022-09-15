using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using React_APP.IdentityAuth;
using React_APP.Models;
using React_APP.Services;
using System.Xml;

namespace React_APP.Controllers
{
    [Route("api/persons")]
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
        public async Task<Object> AddPerson(Person person)
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
