using System.ComponentModel.DataAnnotations;

namespace React_APP.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "User Name is Required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        public string Password { get; set; }
    }
}
