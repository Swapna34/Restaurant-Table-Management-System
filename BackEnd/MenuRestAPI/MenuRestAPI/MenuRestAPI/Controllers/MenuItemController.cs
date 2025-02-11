using MenuRestAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MenuRestAPI.Controllers
{
    //[Route("api/[controller]/[action]")]
    [Route("transc/[controller]")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        private object _context;

        [HttpGet]
        public List<MenuItem> GetItems()
        {
            List<MenuItem> items = new List<MenuItem>();
            using (var db=new p07_tablebookingsystemContext())
            {
                items=db.MenuItems.ToList();
            }
            return items;
        }

        [HttpGet("{id}")]
        public MenuItem GetItem(int id)
        {
            using (var db = new p07_tablebookingsystemContext())
            {
                return db.MenuItems.Find(id);
            }
        }

        [HttpGet("name/{itemName}")]
        public MenuItem GetItemByName(string itemName)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                return db.MenuItems.FirstOrDefault(i => i.Name == itemName);
            }
        }

        [HttpPost]
        public MenuItem CreateMenuItem(MenuItem mit)
        {

            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                db.MenuItems.Add(mit);

                db.SaveChanges();
            }

            return  mit;
        }


        [HttpPut]
        public string UpdateMenuItem(MenuItem updatedMenuItem)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                MenuItem existingItem = db.MenuItems.Find(updatedMenuItem.ItemId);
                if (existingItem != null)
                {
                    existingItem.Name = updatedMenuItem.Name;
                    existingItem.Descp = updatedMenuItem.Descp;
                    existingItem.Price = updatedMenuItem.Price;
                    existingItem.CatId = updatedMenuItem.CatId;
                    //existingItem.Img = updatedMenuItem.Img;

                    db.SaveChanges();
                    return "Menu Item Updated Successfully";
                }
                else
                {
                    return "Menu Item Not Found";
                }
            }
        }

        [HttpDelete]
        public bool DeleteMenuItem(int id)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                MenuItem menuItem = db.MenuItems.Find(id);
                if (menuItem == null)
                {
                    return false;
                }

                db.MenuItems.Remove(menuItem);
                db.SaveChanges();
            }
            return true;
        }
    }
}
