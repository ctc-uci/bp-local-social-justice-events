package oc_acts.repo;

import oc_acts.model.data.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class OCActsRepo {
    private final NamedParameterJdbcTemplate template;

    @Autowired
    public OCActsRepo(NamedParameterJdbcTemplate template)
    {
        this.template = template;
    }

    public List<Event> getEvents() {
        return this.template.query(
                "SELECT DISTINCT e.id, e.title, e.date, e.time, e.address " +
                        "FROM oc_acts_events.event e " +
                        "LIMIT 6;",
                (rs, rowNum) ->
                        new Event()
                                .setId(rs.getInt("id"))
                                .setTitle(rs.getString("title"))
                                .setDate(rs.getString("date"))
                                .setTime(rs.getString("time"))
                                .setAddress(rs.getString("address"))
        );
    }
}
