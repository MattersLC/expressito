function setDatepicker(_this) {
  
    /* Get the parent class name so we 
        can show date picker */
    let className = $(_this).parent()
        .parent().parent().attr('class');

    // Remove space and add '.'
    let removeSpace = className.replace(' ', '.');

    // jQuery class selector
    $("." + removeSpace).datepicker({
        format: "dd/mm/yyyy",

        // Positioning where the calendar is placed
        orientation: "bottom auto",
        // Calendar closes when cursor is 
        // clicked outside the calendar
        autoclose: true,
        showOnFocus: "false"
    });
}

/*selectBox = new vanillaSelectBox("#selectDate", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});*/
selectBox = new vanillaSelectBox("#selectDay", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
selectBox = new vanillaSelectBox("#selectSchedule", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
selectBox = new vanillaSelectBox("#selectGroup", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
selectBox = new vanillaSelectBox("#selectSubject", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
selectBox = new vanillaSelectBox("#selectProffesor", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
selectBox = new vanillaSelectBox("#selectStudents", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
selectBox = new vanillaSelectBox("#selectCareer", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});
selectBox = new vanillaSelectBox("#selectSoftware", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});

selectBox = new vanillaSelectBox("#selectHoraFin", {
    "keepInlineStyles":true,
    "maxHeight": 200,
    "minWidth":210,
    "search": true,
    "placeHolder": "Choose..." 
});