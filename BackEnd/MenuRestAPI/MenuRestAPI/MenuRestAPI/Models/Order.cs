using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int OId { get; set; }
        public float Amt { get; set; }
        public int BId { get; set; }

        public virtual Booking? BIdNavigation { get; set; } = null!;
        public virtual ICollection<OrderDetail>? OrderDetails { get; set; }
    }
}
