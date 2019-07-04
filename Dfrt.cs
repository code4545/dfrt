using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DeploymentFailureRetroTracker.Models
{
    public class Dfrt
    {
        [DataType(DataType.Date)]
        public DateTime? FromDate { get; set; }
        [DataType(DataType.Date)]
        public DateTime? ToDate { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        [Required(ErrorMessage ="Is Retro is mandatory")]
        public bool? IsRetro {get;set;}

        public string ErrorDescription { get; set; }
        
    }
  

       
    }

