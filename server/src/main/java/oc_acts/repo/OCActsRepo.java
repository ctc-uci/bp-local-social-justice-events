package oc_acts.repo;

import com.fasterxml.jackson.databind.ObjectMapper;
import oc_acts.model.data.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class OCActsRepo {
    private final NamedParameterJdbcTemplate template;

    @Autowired
    public OCActsRepo(NamedParameterJdbcTemplate template)
    {
        this.template = template;
    }

    public List<Event> getEvents() {
        return this.template.query(
                "SELECT DISTINCT e.id, e.title, e.event_datetime, e.event_address\n" +
                        "FROM oc_acts_events.event e\n" +
                        "LIMIT 6;",
                (rs, rowNum) ->
                        new Event()
                                .setId(rs.getInt("id"))
                                .setTitle(rs.getString("title"))
                                .setDatetime(rs.getString("event_datetime"))
                                .setAddress(rs.getString("event_address"))
        );
    }
}
