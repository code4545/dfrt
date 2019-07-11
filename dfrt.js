$(document).ready(function () {
    kendoUIHelper.generatekendogrid();

    $("#frmdatetimepicker").kendoDateTimePicker({
        format: "MM/dd/yyyy hh:mm tt",
        defaultDate: new Date()
    });
    $("#todatetimepicker").kendoDateTimePicker({
        format: "MM/dd/yyyy hh:mm tt",
        defaultDate: new Date()
    });
    $("btnrefresh").click(function () {

    });
    $("#btnsubmit").click(function () {

    });

});
var kendoUIHelper = {
    generatekendogrid: function () {
        $("#gridretro").kendoGrid({
            
            scrollable: true,
            editable: { mode: "inline" },
            sortable: true,
            pageable: {
                refresh: false,
                pageSizes: [5, 10, 20, 30],
                buttonCount: 5
            },
            //filterable: true,
            navigatable: true,
            columns: [
                {
                    field: "DeptId",
                    title: "Dep.ID"
                 
                },
                {
                    field: "Environment",
                    title: "Env"
                   

                },
                {
                    field: "BuildNumber",
                    title: "Build No.",
                    width: "6em"
                   

                },
                {
                    field: "X",
                    title: "x ",
                    width: "2em"
                 
                },
                {
                    field: "Y",
                    title: "y",
                    width: "2em"
                  

                },
                {
                    field: "Z",
                    title: "z",
                    width: "2em"
                  

                },
                {
                    field: "Owner",
                    title: "Owner"
                    

                },
                {
                    field: "Status",
                    title: "Status"

                },
                {
                    field: "IsRetro",
                    title: "Retro"

                },
                {
                    field: "BugID",
                    title: "BugID"

                },
                {
                    field: "Fix",
                    title: "Fix"

                },
                {
                    field: "Failure",
                    title: "Failure"

                },
                {
                    field: "CategoryName",
                    title: "Category"

                },
                 {
                     field: "ErrorDescription",
                     title: "Error Description"

                 },
                {
                    field: "LstModified",
                    title: "Last Modified",
                    width: "3em"
                },
               {
                   command: [{ name: "edit", text: "Edit", click: editRecord, imageClass: "k-icon k-edit" },
                          ],
               },
            ],      
            dataSource: [{ DeptId: 1, Environment: "Dev", BuildNumber: "007", IsRetro: true, CategoryName: "Production" }],
            //dataSource:{
            //    transport :{
            //        read:{
            //            url: "Home/Readgrid"
            //        },
            //        update :{
            //            url :"Home/Updategrid",
            //            type:"POST"
            //        }
            //    }
            //},
            save: function () {
                this.refresh();
            }
        });
}
};

function editRecord(e) {
  
    var grid = $("#gridretro").data(kendoGrid);
    var selectedItem = grid.dataItem(grid.select());
    $("#ErrDes").val(selectedItem.ErrorDescription)

}



////displaying the data in the grid
//function displayGrid() {

//    var deploy = {
//        ErrorDescription: $("#ErrorDescription").val()
//    };

//    $.ajax({
//        type: "POST",
//        url: "/Home/GetDetails",
//        data: JSON.stringify(deploy),
//        cache: false,
//        async: false,
//        contentType: "application/json; charset=utf-8",
//        success: function (result) {
//            if (result.length > 0) {
//                $("#ErrorDescription").show();
//                gridretro(result);
//            }
//            else {
//                $("#gridretro").hide();
//            }
//            $('.navigationMenu').css("display", "none");
//        },
//        error: function (xmlHttpRequest, textStatus, errorThrown) {
//            $('.navigationMenu').css("display", "none");
//            handleAjaxError(xmlHttpRequest, textStatus);
//        }
//    });
//}