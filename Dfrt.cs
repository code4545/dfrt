using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace DeploymentFailureRetroTracker.Models
{
    public class Dfrt
    {
        
        public DateTime FromDate { get; set; }
     
        public DateTime ToDate { get; set; }

        public List<SelectListItem> Categories { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        [Required(ErrorMessage ="Is Retro is mandatory")]
        public bool? IsRetro {get;set;}

        public string ErrorDescription { get; set; }

        public int DeptId { get; set; }

        public string Environment { get; set; }

        public int BuildNumber { get; set; }

        public string X { get; set; }
        public string Y { get; set; }
        public string Z { get; set; }

        public string Owner { get; set; }

        public string Status { get; set; }

        public int BugID { get; set; }
        public string Fix { get; set; }
        public string Failure { get; set; }

        public DateTime LstModified { get; set; }






    }
  

       
    }

