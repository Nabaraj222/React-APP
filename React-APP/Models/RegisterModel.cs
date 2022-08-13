using System.ComponentModel.DataAnnotations;

namespace React_APP.Models
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "User Name is Required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Email is Required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        public string Password { get; set; }    

    }
}
