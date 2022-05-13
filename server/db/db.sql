DROP SCHEMA IF EXISTS oc_acts_events;
CREATE SCHEMA oc_acts_events;


CREATE TABLE oc_acts_events.event
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    address VARCHAR(128) NOT NULL
);

CREATE TABLE oc_acts_events.tags
(
    id INT NOT NULL PRIMARY KEY,
    tag VARCHAR(32) NOT NULL
);

CREATE TABLE oc_acts_events.event_tag
(
    event_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (event_id, tag_id),
    FOREIGN KEY (event_id) REFERENCES oc_acts_events.event (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES oc_acts_events.tags (id)
        ON UPDATE CASCADE ON DELETE CASCADE
)
