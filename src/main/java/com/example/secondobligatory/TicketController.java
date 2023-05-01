package com.example.secondobligatory;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    private final List<Ticket> allTicket = new ArrayList<>();

    @PostMapping("/saveTicket")
    public void saveTicket(Ticket innTicket){
        allTicket.add(innTicket);
    }

    @GetMapping("/getAllTicket")
    public List<Ticket> getAlt(){
        return allTicket;
    }

    @GetMapping("/deleteAllTicket")
    public void DeleteAlt (){
        allTicket.clear();
    }
}