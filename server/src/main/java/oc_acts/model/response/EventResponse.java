package oc_acts.model.response;

import oc_acts.core.ResponseModel;
import oc_acts.model.data.Event;

import java.util.List;

public class EventResponse extends ResponseModel<EventResponse> {
    List<Event> events;

    public List<Event> getEvents() {
        return events;
    }

    public EventResponse setEvents(List<Event> events) {
        this.events = events;
        return this;
    }
}
