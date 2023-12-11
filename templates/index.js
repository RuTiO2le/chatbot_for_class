function getBotResponse() {
    var rawText = $("#textInput").val();
    var userHtml = '<div class="message userText"><p>' + rawText + "</p></div>";
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    scrollToBottom();
    $.get("/get", { msg: rawText }).done(function (data) {
        var botHtml = '<div class="message botText"><p>' + data + "</p></div>";
        $("#chatbox").append(botHtml);
        scrollToBottom();
    });
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getBotResponse();
    }
});

function scrollToBottom() {
    var chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}