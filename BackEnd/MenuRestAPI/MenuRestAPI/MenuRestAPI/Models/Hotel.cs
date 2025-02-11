using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class Hotel
    {
        public Hotel()
        {
            Managers = new HashSet<Manager>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Address { get; set; } = null!;

        public virtual ICollection<Manager> Managers { get; set; }
    }
}
