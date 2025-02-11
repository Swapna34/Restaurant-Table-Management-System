using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class Role
    {
        public Role()
        {
            Users = new HashSet<User>();
        }

        public int RId { get; set; }
        public string Type { get; set; } = null!;

        public virtual ICollection<User> Users { get; set; }
    }
}
