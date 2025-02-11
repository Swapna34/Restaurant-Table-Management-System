using System;
using System.Collections.Generic;

namespace MenuRestAPI.Models
{
    public partial class MenuCategory
    {
        public MenuCategory()
        {
            MenuItems = new HashSet<MenuItem>();
        }

        public int CatId { get; set; }
        public string Name { get; set; } = null!;
        public string? Descp { get; set; }

        public virtual ICollection<MenuItem> MenuItems { get; set; }
    }
}
