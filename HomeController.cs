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
            //var model = new Dfrt();
            //return View(model);
        }
        [HttpPost]
        public ActionResult GetDetails(string FromDate, string ToDate, int CategoryId, string ErrorDescription, string IsRetro)
        {
            
            return View();
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



   