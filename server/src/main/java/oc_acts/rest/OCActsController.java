package oc_acts.rest;

import oc_acts.config.OCActsServiceConfig;
import oc_acts.core.OCActsResults;
import oc_acts.model.data.Event;
import oc_acts.model.response.AddEventResponse;
import oc_acts.model.response.EventRequest;
import oc_acts.model.response.EventResponse;
import oc_acts.repo.OCActsRepo;
import oc_acts.util.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OCActsController {
    private OCActsRepo repo;
    private Validate validate;

    @Autowired
    public OCActsController(OCActsRepo repo, Validate validate)
    {
        this.repo = repo;
        this.validate = validate;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/event")
    public ResponseEntity<EventResponse> event() {
        List<Event> events = repo.getEvents();
        EventResponse response = new EventResponse().setEvents(events);

        if (events.size() != 0) {
            response.setResult(OCActsResults.EVENTS_FOUND);
        }
        else {
            response.setResult(OCActsResults.NO_EVENTS_FOUND);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(response);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/event/add")
    public ResponseEntity<AddEventResponse> addEvent(@RequestBody EventRequest request) {
        Event event = new Event()
                .setTitle(request.getTitle())
                .setAddress(request.getAddress())
                .setDatetime(request.getDatetime());
        repo.addEvent(event);

        return ResponseEntity.status(HttpStatus.OK)
                .body(new AddEventResponse()
                        .setResult(OCActsResults.EVENT_ADDED));
    }
}
