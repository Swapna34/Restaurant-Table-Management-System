using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class User
    {
        public User()
        {
            Customers = new HashSet<Customer>();
            Managers = new HashSet<Manager>();
        }

        public int UId { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int RId { get; set; }

        public virtual Role RIdNavigation { get; set; } = null!;
        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<Manager> Managers { get; set; }
    }
}
