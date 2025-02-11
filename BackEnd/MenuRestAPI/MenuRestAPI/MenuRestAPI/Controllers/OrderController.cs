using MenuRestAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;


namespace MenuRestAPI.Controllers
{
    //[Route("api/[controller]")]
    [Route("transc/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        /* [HttpPost]
         public Order SaveOrder(Order order)
         {
             using (var context = new p07_tablebookingsystemContext())
             {

                 context.Orders.Add(order);
                 context.SaveChanges();
             }
             return order;
         }*/

        [HttpPost]
        public Order SaveOrder(Order ord)
        {
            float tot = 0;
            using (var db=new p07_tablebookingsystemContext())
            {

                foreach (var od in ord.OrderDetails)
                {
                    var amt = db.MenuItems.Where(p => p.ItemId == od.ItemId).Select(a => a.Price).FirstOrDefault();
                    tot += amt * od.Qty;
                }
               
                ord.Amt = tot;


                db.Orders.Add(ord);
                db.SaveChanges();
            }
            return ord;
        }
        
  /*      {
  
  
  "bId": 2,
  
  "orderDetails": [
    {
      
      "itemId": 44,
      "qty": 2
      }
       
  ]
}*/

[HttpGet]
        public List<Order> GetOrders()
        {
            List<Order> orders = new List<Order>();

            using (var db = new p07_tablebookingsystemContext())
            {
                orders = db.Orders.Include(p => p.OrderDetails).ToList();
            }
            return orders;
        }
        
        [HttpGet("{bId}")]
        public List<Order> GetOrderByBId(int bId)
        {
            List<Order> orders = new List<Order>();
            using (var db = new p07_tablebookingsystemContext())
            {
                orders = (db.Orders.Where(o => o.BId == bId)).Include(p => p.OrderDetails).ToList();

            }
            return orders;
        }


        /* [HttpPut]
         public string UpdateOrder(Order updateOrder)
         {
             using (var db = new p07_tablebookingsystemContext())
             {
                 Order existingOrder = db.Orders.Find(updateOrder.OId);
                 if (existingOrder != null)
                 {
                     existingOrder.BId = updateOrder.BId;
                     existingOrder.OId = updateOrder.OId;
                     existingOrder.Amt = updateOrder.Amt;
                     existingOrder.OrderDetails = updateOrder.OrderDetails;

                     db.SaveChanges();
                     return "Order Updated Successfully";

                 }
                 else
                 {
                     return "Order Not Found";
                 }
             }
         }*/

        /*[HttpPut]
        public string UpdateOrder(Order updateOrder)
        {
            using (var db = new p07_tablebookingsystemContext())
            {
                if (updateOrder.OId == 0)  // Check if OId is missing or invalid
                {
                    return "Order ID is required";
                }

                Order existingOrder = db.Orders.Find(updateOrder.OId);
                if (existingOrder != null)
                {
                    existingOrder.BId = updateOrder.BId;
                    existingOrder.Amt = updateOrder.Amt;
                    existingOrder.OrderDetails = updateOrder.OrderDetails;

                    db.SaveChanges();
                    return "Order Updated Successfully";
                }
                else
                {
                    return "Order Not Found";
                }
            }
        }*/


       /* [HttpDelete]
        public bool DeleteOrder(int  OId)
        {
            using (var db= new p07_tablebookingsystemContext())
            {
                Order order = db.Orders.Find(OId);
                if(order == null)
                {
                    return false;
                }
                db.Orders.Remove(order);
                db.SaveChanges();
            }
            return true;
        }*/

    }
}



    


