using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DeploymentFailureRetroTracker.Models;


namespace DeploymentFailureRetroTracker.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            return View();
        }
      [HttpGet]
        public ActionResult GetDetails()
       {
           
            return View();
        }
        [HttpPost]
        public ActionResult GetDetails(DateTime? FromDate, DateTime? ToDate, int CategoryId, string CategoryName,bool? IsRetro, string ErrorDescription)
        {
            return View();

        }
        //public ActionResult GetDetails()
        //{
        //    return View();
        //}
        //[HttpPost]
        //public ActionResult GetDetails(Dfrt failure)
        //{
        //    if(ModelState.IsValid)
        //    {
        //        using (OurDbContext db = new OurDbContext())
        //        {
        //            db.form.Add(failure);
        //            db.SaveChanges();
        //        }
        //        ModelState.Clear();
        //    }
        //    return View();
        //}
        ////display
        //public ActionResult DisplayDetails()
        //{
        //    return View();
        //}
        //[HttpPost]
        //public ActionResult DisplayDetails(Dfrt user )
        //{
        //    //using (OurDbContext db = new OurDbContext())
        //    //{

        //    //}
        //        return View();
        //}
    }

}

   