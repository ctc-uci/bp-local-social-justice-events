package oc_acts.rest;

import oc_acts.config.OCActsServiceConfig;
import oc_acts.core.OCActsResults;
import oc_acts.model.data.Event;
import oc_acts.model.response.EventResponse;
import oc_acts.repo.OCActsRepo;
import oc_acts.util.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

public class OCActsController {
    private OCActsRepo repo;
    private Validate validate;

    @Autowired
    public OCActsController(OCActsRepo repo, Validate validate)
    {
        this.repo = repo;
        this.validate = validate;
    }

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
}
