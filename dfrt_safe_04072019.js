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
    $("#btnrefresh").click(function () {

    });

    var data = [
        { text: "Black", value: "1" },
        { text: "Orange", value: "2" },
        { text: "Grey", value: "3" }
    ];

    $("#color").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: data,
        index: 0,
        change: onChange
    });

    // create DropDownList from select HTML element
    //$("#size").kendoDropDownList();

    var color = $("#color").data("kendoDropDownList");

    color.select(0);
    //var size = $("#size").data("kendoDropDownList");

    function onChange() {
        var value = $("#color").val();
        $("#color")
            .toggleClass("black-cap", value == 1)
            .toggleClass("orange-cap", value == 2)
            .toggleClass("grey-cap", value == 3);
    };
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
            field: "Dep.ID",
            title: "Dep.ID",
        },
        {
            field: "Env",
            title: "Env",
          
        },
        {
            field: "Build No.",
            title: "Build No.",
            width : "6em",
            
        },
        {
            field: "X",
            title: "x ",
            width: "2em",
        },
        {
            field: "Y",
            title: "y",
            width: "2em",
            
        },
         {
             field: "Z",
             title: "z",
             width: "2em",
            
         },
          {
              field: "Owner",
              title: "Owner",
            
          },
           {
               field: "Status",
               title: "Status",
            
           },
            {
                field: "Retro",
                title: "Retro",
            
            },
             {
                 field: "BugID",
                 title: "BugID",
            
             },
              {
                  field: "Fix",
                  title: "Fix",
            
              },
               {
                   field: "Failure",
                   title: "Failure",
            
               },
                {
                    field: "Category",
                    title: "Category",
            
                },
                 {
                     field: "Last Modified",
                     title: "Last Modified",
                     width: "8em",
            
                 },
                  {
                      field: "Action",
                      title: "Action",
                  }
        ],


});
    }
}

