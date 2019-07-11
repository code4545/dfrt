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
        public ActionResult GetDetails(Dfrt det)
        {
           
            return View(det);
        }
        //public ActionResult Readgrid()
        //{
        //    Dfrt d = new Dfrt();
        //    //List<Dfrt> pm = d.GetDetails();
        //    return Json(JsonRequestBehavior.AllowGet);

        //}
        //[HttpPost]
        //public ActionResult Updategrid(int DeptId)
        //{
        //    int id = DeptId;
        //    string ErrorDescription = Request["ErrorDescription"].ToString();
        //    return View();
        //}

    }


    }



   