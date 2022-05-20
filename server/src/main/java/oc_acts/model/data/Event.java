package oc_acts.model.data;

public class Event {
    private int id;
    private String title;
    private String datetime;
    private String address;

    public int getId() {
        return id;
    }

    public Event setId(int id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public Event setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getDatetime() {
        return datetime;
    }

    public Event setDatetime(String datetime) {
        this.datetime = datetime;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public Event setAddress(String address) {
        this.address = address;
        return this;
    }
}
