$(function() {
    console.log("ready!");

    // var outlineText = "";
    

    /* Document Opening And Closing */
    $("#outline").hide()
    $("#doc").hide();
    $("#title").hide();

    var isDocumentOpen = false;
    var toggleDocumentStatus = function() {
        if (isDocumentOpen) {
            $("#openDocButton").hide();
            $("#closeDocButton").show();
        } else {
            $("#openDocButton").show();
            $("#closeDocButton").hide();
        }
    }

    var openDocument = function() {
        hideOutline()
        $("#doc").show();
        $("#title").show();
        // $("filebutton").text("Close Document");
        isDocumentOpen = true;
        toggleDocumentStatus();
    }

    var closeDocument = function() {
        if (isDocumentOpen) {
            $("#doc").hide();
            $("#title").hide();
            // $("filebutton").text("Open Document");
            isDocumentOpen = false;
            toggleDocumentStatus();
        }
        clearOutline();
    }

    var hideDocument = function() {
        $("#doc").hide();
    }
    var showDocument = function() {
        if (isDocumentOpen) {
            $("#doc").show();
        };
    }

    /* Outline Fuctionz */
    var isOutlineOpen = false;



    var showOutline = function() {
        console.log("show Outline")

        var outlineText = "<ul id=\"outlineList\">";

        var select = document.getElementById("fontSizeSelect");
        var fontSize = select.options[select.selectedIndex].value;
        var fontWeight = fontSize / 15.0;

        for (var i = 0; i < outline.length; i++) {
            outlineText += "<li style=\"font-size: " + fontWeight + "em\">" + outline[i].content + "</li>";
        }

        outlineText += "</ul>";

        // alert(outlineText);

        document.getElementById("outlineContent").innerHTML = outlineText;

        // $("#outlineContent").text(outlineText);
        $("#outline").show();
    }

    var hideOutline = function() {
        console.log("hide Outline");
        $("#outline").hide();
    }

    /* Button Bindingz*/
    $("#showText").bind("click", function() {
        hideOutline();
        showDocument();
    });
    $("#openBtn").bind("click", function() {
        openDocument()
    });

    $("#closeDocButton").bind("click", function() {
        closeDocument()
    });

    $("#showOutline").bind("click", function() {
        console.log("show Outline clicked")
        hideDocument()
        showOutline()
    });
});