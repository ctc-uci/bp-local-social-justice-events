package oc_acts.repo;

import oc_acts.model.data.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.sql.Types;
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
                "SELECT DISTINCT e.id, e.title, e.datetime, e.address " +
                        "FROM oc_acts_events.event e " +
                        "LIMIT 6;",
                (rs, rowNum) ->
                        new Event()
                                .setId(rs.getInt("id"))
                                .setTitle(rs.getString("title"))
                                .setDatetime(rs.getString("datetime"))
                                .setAddress(rs.getString("address"))
        );
    }

    public void addEvent(Event event) {
        //language=sql
        String sql =
                "INSERT INTO oc_acts_events.event (title, datetime, address) " +
                "VALUES  (:title, :datetime, :address)";

        MapSqlParameterSource source = new MapSqlParameterSource()
                .addValue("title", event.getTitle(), Types.VARCHAR)
                .addValue("datetime", event.getDatetime(), Types.VARCHAR)
                .addValue("address", event.getAddress(), Types.VARCHAR);

        int rowsUpdated = this.template.update(sql, source);
    }
}
