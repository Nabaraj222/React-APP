using React_APP.Interface;
using React_APP.Models;

namespace React_APP.Services
{
    public class PersonService
    {
        private readonly IPersonRepository<Person> _person;

        public PersonService(IPersonRepository<Person> perosn)
        {
            _person = perosn;
        }

        //Get Person Details By Person Id  
        public IEnumerable<Person> GetPersonByUserId(string UserId)
        {
            return _person.GetAll().Where(x => x.UserEmail == UserId).ToList();
        }

        //GET All Perso Details   
        public IEnumerable<Person> GetAllPersons()
        {
            try
            {
                return _person.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Get Person by Person Name  
        public Person GetPersonByUserName(string UserName)
        {
            return _person.GetAll().Where(x => x.UserEmail == UserName).FirstOrDefault();
        }

        //Add Person  
        public async Task<Person> AddPerson(Person Person)
        {
            return await _person.Create(Person);
        }

        //Delete Person   
        public bool DeletePerson(int PersonId)
        {

            try
            {
                var DataList = _person.GetAll().Where(x => x.Id == PersonId).ToList();
                foreach (var item in DataList)
                {
                    _person.Delete(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }

        }

        //Update Person Details  
        public bool UpdatePerson(Person person)
        {
            try
            {
                var DataList = _person.GetAll().Where(x => x.IsDeleted != true && x.Id == person.Id).ToList();
                foreach (var item in DataList)
                {
                    _person.Update(item);
                }
                return true;
            }
            catch (Exception)
            {
                return true;
            }
        }
    }
}
