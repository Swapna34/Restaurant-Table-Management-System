using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Bookings = new HashSet<Booking>();
        }

        public int CId { get; set; }
        public int UId { get; set; }
        public string Fname { get; set; } = null!;
        public string? Lname { get; set; }
        public string Contact { get; set; } = null!;

        public virtual User UIdNavigation { get; set; } = null!;
        public virtual ICollection<Booking> Bookings { get; set; }
    }
}
