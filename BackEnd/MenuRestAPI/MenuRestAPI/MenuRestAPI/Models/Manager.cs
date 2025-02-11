using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class Manager
    {
        public int MId { get; set; }
        public int UId { get; set; }
        public string Fname { get; set; } = null!;
        public string? Lname { get; set; }
        public ulong IsActive { get; set; }
        public string Contact { get; set; } = null!;
        public int HId { get; set; }

        public virtual Hotel HIdNavigation { get; set; } = null!;
        public virtual User UIdNavigation { get; set; } = null!;
    }
}
