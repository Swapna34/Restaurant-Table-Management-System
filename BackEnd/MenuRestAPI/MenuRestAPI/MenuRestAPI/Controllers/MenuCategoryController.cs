using MenuRestAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MenuRestAPI.Controllers
{
    [Route("transc/[controller]")]
    //[Route("api/[controller]")]
    [ApiController]
    public class MenuCategoryController : ControllerBase
    {
        [HttpGet]
        public List<MenuCategory> GetCategories()
        {
            List<MenuCategory> categories = new List<MenuCategory>();
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                categories = db.MenuCategories.ToList();
            }
            return categories;
        }

        [HttpGet("{id}")]
        public MenuCategory GetCategory(int id)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                return db.MenuCategories.Find(id);
            }
        }

        [HttpGet("name/{categoryName}")]
        public MenuCategory GetCategoryByName(string categoryName)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                return db.MenuCategories.FirstOrDefault(c => c.Name == categoryName);
            }
        }



        [HttpPost]
        public MenuCategory SaveCategory(MenuCategory category)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                db.MenuCategories.Add(category);
                db.SaveChanges();
            }
            return category;
        }

        [HttpPut]
        public string UpdateCategory(MenuCategory category)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                MenuCategory cat = db.MenuCategories.Find(category.CatId);
                if (cat != null)
                {
                    cat.Name = category.Name;
                    cat.Descp = category.Descp;
                    db.SaveChanges();
                    return "Menu Category Updated Successfully";
                }
                else
                {
                    return "Menu Category Not Found";
                }
            }
        }

       [HttpDelete]
        public bool DeleteCategory(int id)
        {
            using (var db = new p07_tablebookingsystemContext()) // Replace with your actual DbContext
            {
                MenuCategory category = db.MenuCategories.Find(id);
                if (category == null)
                {
                    return false;
                }

                db.MenuCategories.Remove(category);
                db.SaveChanges();
            }
            return true;
        }
    }
}
