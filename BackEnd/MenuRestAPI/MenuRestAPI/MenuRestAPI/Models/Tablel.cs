using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class Tablel
    {
        public Tablel()
        {
            Bookings = new HashSet<Booking>();
        }

        public int TId { get; set; }
        public int Capacity { get; set; }
        public string Status { get; set; } = null!;
        public int BTime { get; set; } 
        public int TableNo { get; set; }

        public virtual ICollection<Booking> Bookings { get; set; }
    }
}
