CREATE SCHEMA events;


CREATE TABLE events.event
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64) NOT NULL,
    event_datetime DATETIME NOT NULL,
    event_address VARCHAR(128) NOT NULL
);

CREATE TABLE events.tags
(
    id INT NOT NULL PRIMARY KEY,
    tag VARCHAR(32) NOT NULL
);

CREATE TABLE events.event_tag
(
    event_id INT NOT NULL,
    class_id INT NOT NULL,
    PRIMARY KEY (event_id, class_id),
    FOREIGN KEY (event_id) REFERENCES events.event (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES events.tags (id)
        ON UPDATE CASCADE ON DELETE CASCADE
)