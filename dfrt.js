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
    $("btnrefresh").click(function () {

    });
    $("#Category").kendoDropDownList({
     
    });
   
    $("#btnsubmit").click(function ()
    { 
        var date = $("#frmdatetimepicker").data("kendoDateTimePicker").value();
      
        //var date1 = $("#todatetimepicker").data("kendoDateTimePicker").value();
        $.ajax({   
            type: "post",   
            url: "/Home/GetDetails",   
            data: JSON.stringify(Dfrt),   
            datatype: "json",   
            traditional: true,   
            success: function (data) {   
                // debugger   
                if (data == "No Record Found") {   
                    alert('No Record Found');   
                }   
                else {   
                    $('#gridretro').html(data);   
                    
                }   
            }   
        });   
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

    function Subdet() {
        var userModel = {
            FromDate: $("#frmdatetimepicker").val(),
            ToDate: $("#todatetimepicker").val(),
            Category: $("#Category").val(),
            IsRetro: $("#myCheck").val()
        }
    };
