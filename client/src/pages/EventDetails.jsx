import React from 'react';
import './EventDetails.css';

function EventDetails() {
  return (
    <div className="Event">
      <h1 className="eventTitle">Event Title</h1>
      <div className="eventSpecifics">
        <div className="eventDate">
          <h3 className="eventHeaderOne">Date</h3>
          <p>
            Saturday, February 12
            <br />
            4:00 PM - 6:00 PM
          </p>
        </div>
        <div className="eventLocation">
          <h3 className="eventHeaderOne">Location</h3>
          <p>
            123 Somewhere Rd
            <br />
            Irvine, CA 92617
          </p>
        </div>
      </div>

      <div className="eventDetails">
        <h3 className="eventHeaderOne">Description</h3>
        <p className="eventText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et magnis dis
          parturient montes. Tellus orci ac auctor augue mauris augue neque gravida in. Arcu ac
          tortor dignissim convallis aenean et tortor at risus. Eu facilisis sed odio morbi quis
          commodo odio. Elementum curabitur vitae nunc sed. Ac tincidunt vitae semper quis lectus
          nulla. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
          Scelerisque varius morbi enim nunc faucibus a pellentesque. Amet facilisis magna etiam
          tempor orci eu lobortis elementum nibh. In iaculis nunc sed augue lacus viverra vitae.
          Enim ut tellus elementum sagittis vitae et leo. Iaculis urna id volutpat lacus laoreet.
          Aenean et tortor at risus viverra adipiscing at in. Cras sed felis eget velit aliquet
          sagittis id consectetur purus. Semper viverra nam libero justo laoreet sit amet cursus.
        </p>
      </div>
      <button type="button" className="eventButton">
        More Info
      </button>
    </div>
  );
}

export default EventDetails;
