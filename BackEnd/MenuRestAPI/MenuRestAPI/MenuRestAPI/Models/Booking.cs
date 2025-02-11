using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class Booking
    {
        public Booking()
        {
            Orders = new HashSet<Order>();
        }

        public int BId { get; set; }
        public int CId { get; set; }
        public int TId { get; set; }
        public sbyte? PreOrder { get; set; }
        public DateOnly BDate { get; set; }
        public string BTime { get; set; } = null!;

        public virtual Customer CIdNavigation { get; set; } = null!;
        public virtual Tablel TIdNavigation { get; set; } = null!;
        public virtual ICollection<Order> Orders { get; set; }
    }
}
