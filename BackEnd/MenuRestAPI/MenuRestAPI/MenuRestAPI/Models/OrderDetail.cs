using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class OrderDetail
    {
        public int OdId { get; set; }
        public int OId { get; set; }
        public int ItemId { get; set; }
        public int Qty { get; set; }

        public virtual MenuItem? Item { get; set; } = null!;
        public virtual Order? OIdNavigation { get; set; } = null!;
    }
}
