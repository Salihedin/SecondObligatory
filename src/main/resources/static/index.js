function PurchaseTicket () {
    const ticket = {
        movies: $("#movies").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNumber: $("#phoneNumber").val(),
        email: $("#email").val(),
        amount: $("#amount").val()
    };

    let error = false;
    if (ticket.movies == ""){
        $("#errorMovie").html("Fill in this input")
        error = true;
    } else {
        $("#errorMovie").html("");
    }

    if (ticket.firstName == ""){
        $("#errorFirstName").html("Fill in this input")
        error = true;
    } else {
        $("#errorFirstName").html("");
    }

    if (ticket.lastName == ""){
        $("#errorLastName").html("Fill in this input")
        error = true;
    } else {
        $("#errorLastName").html("");
    }

    if (ticket.phoneNumber == ""){
        $("#errorPhoneNumber").html("Fill in this input")
        error = true;
    } else {
        $("#errorPhoneNumber").html("");
    }

    if (ticket.email == ""){
        $("#errorEmail").html("Fill in this input")
        error = true;
    } else {
        $("#errorEmail").html("");
    }

    if (ticket.amount == ""){
        $("#errorAmount").html("Fill in this input")
        error = true;
    } else {
        $("#errorAmount").html("");
    }

    if (!error){
        $.post("/saveTicket", ticket, function () {
            getAlt();
            console.log("Ticket fra post: "+ticket);
        });

        $("#movies").val(""); //tømer input-feltene
        $("#firstName").val("");
        $("#lastName").val("");
        $("#phoneNumber").val("");
        $("#email").val("");
        $("#amount").val("");
    }

}
function getAlt() {
    $.get("/getAllTicket", function(data ) {
        formatData(data);
    });
}

function formatData(allTickets){
    let out = "<table><tr>" +
        "<th>Movie</th><th>First name</th><th>Last name</th>" +
        "<th>Phone number</th><th>Email</th><th>Amount</th>" + "</tr>";

    for (const ticket of allTickets){
        out += "<td>" + ticket.movies + "</td> <td>" + ticket.firstName + "</td><td>" + ticket.lastName + "</td>" +
            "<td>" + ticket.phoneNumber + "</td><td>" + ticket.email + "</td><td>" + ticket.amount + "</td>";
    }

    out+="</table>";
    $("#TicketReceipt").html(out);
}

function deleteTickets (){
    $.get("/deleteAllTicket", function (){
        getAlt();
    });
}