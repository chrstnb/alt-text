var elements = document.getElementsByTagName("img")

for (var i = 0; i < elements.length; i++) {
  processImage(elements[i].src, elements[i]);
}


function processImage(source, element) {
    var subscriptionKey = "20613855066847539021532e06e9ce11";
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";

    var params = {
        "visualFeatures": "Categories,Description,Color",
        "details": "",
        "language": "en",
    };

    var sourceImageUrl = source;

    $.ajax({
        url: uriBase + "?" + $.param(params),
            beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

    .done(function(data) {
        var caption = data.description.captions[0].text;
        if (element.alt != "") {
          element.alt ="Original caption: " + element.alt + "; Generated caption: " + caption;
        } else {
          element.alt = "Generated caption: " + caption;
        }
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
        console.log(errorString);
    });
};
