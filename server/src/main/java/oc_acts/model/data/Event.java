package oc_acts.model.data;

public class Event {
    private int id;
    private String title;
    private String date;
    private String time;
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

    public String getDate() {
        return date;
    }

    public Event setDate(String date) {
        this.date = date;
        return this;
    }

    public String getTime() {
        return time;
    }

    public Event setTime(String time) {
        this.time = time;
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
