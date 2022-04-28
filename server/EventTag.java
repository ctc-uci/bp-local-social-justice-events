import com.fasterxml.jackson.annotation.JsonValue;

public enum EventTag
{
    FUNDRAISER(1, "Fundraiser"),
    PROTEST(2, "Protest"),
    WALKOUT(3, "Walkout");

    private final int    id;
    private final String tag;

    EventTag(int id, String tag)
    {
        this.id = id;
        this.tag = tag;
    }

    public int id() { return id; }

    @JsonValue public String tag() { return tag; }

    public static EventTag fromId(int id)
    {
        for (EventTag type : tags()) {
            if (type.id == id) {
                return type;
            }
        }

        throw new IllegalArgumentException("Id not found");
    }
}