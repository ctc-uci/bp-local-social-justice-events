package oc_acts.model.response;

public class EventRequest {
    private String title;
    private String datetime;
    private String address;

    public String getTitle() {
        return title;
    }

    public EventRequest setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getDatetime() {
        return datetime;
    }

    public EventRequest setDatetime(String datetime) {
        this.datetime = datetime;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public EventRequest setAddress(String address) {
        this.address = address;
        return this;
    }
}
