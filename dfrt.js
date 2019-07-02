$(document).ready(function () {
    kendoUIHelper.generatekendogrid();


    $("#frmdatetimepicker").kendoDateTimePicker({
        value: new Date(),
        dateInput: true
    });
    $("#todatetimepicker").kendoDateTimePicker({
        value: new Date(),
        dateInput: true
    });
    
   
    $("#btnsubmit").click(function () {
        var date = $(frmdatetimepicker).data("kendoDateTimePicker").value();
        alert(date);
    });
    $("btnrefresh").click(function () {

    })
    $("#color").kendoDropDownList({
     
    });   
});
var kendoUIHelper = {
    generatekendogrid: function () {
        
   
$("#gridretro").kendoGrid({
    //scrollable: true,
    //sortable: true,
    //pageable: {
    //    refresh: false,
    //    pageSizes: [5, 10, 20, 30],
    //    buttonCount: 5
    //},
    //filterable: true,
    navigatable: true,
    editable: "inline",
    columns: [
        {
            field: "EmailAddress",
            title: "Dep.ID",
        },
        {
            field: "Env",
            title: "Env",
          
        },
        {
            field: "ModifiedBy",
            title: "Build No.",
            width : "6em",
            
        },
        {
            field: "ModifiedOn",
            title: "x ",
            width: "2em",
        },
        {
            field: "ModifiedBy",
            title: "y",
            width: "2em",
            
        },
         {
             field: "ModifiedBy",
             title: "z",
             width: "2em",
            
         },
          {
              field: "ModifiedBy",
              title: "Owner",
            
          },
           {
               field: "ModifiedBy",
               title: "Status",
            
           },
            {
                field: "ModifiedBy",
                title: "Retro",
            
            },
             {
                 field: "ModifiedBy",
                 title: "BugID",
            
             },
              {
                  field: "ModifiedBy",
                  title: "Fix",
            
              },
               {
                   field: "ModifiedBy",
                   title: "Failure",
            
               },
                {
                    field: "ModifiedBy",
                    title: "Category",
            
                },
                 {
                     field: "ModifiedBy",
                     title: "Last Modified",
                     width: "8em",
            
                 },
                  {
                      field: "ModifiedBy",
                      title: "Action",
                  }
        ],


});
    }
}

