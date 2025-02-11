using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class MenuItem
    {
        public MenuItem()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int ItemId { get; set; }
        public int CatId { get; set; }
        public string Name { get; set; } = null!;
        public string? Descp { get; set; }
        public float Price { get; set; }
        //public byte[]? Img { get; set; }

        public virtual MenuCategory? Cat { get; set; } = null!;
        public virtual ICollection<OrderDetail>? OrderDetails { get; set; }
    }
}
