import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="Resources">
      <h1 className="ResourcesTitle">Resources Page</h1>
      <h3 className="ResourcesName">LGBTQ+</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://www.lgbtqcenteroc.org/" target="_blank" rel="noreferrer">
            LGBTQ Center Orange County
          </a>
        </li>
        <li>
          <a href="https://lgbtrc.uci.edu/" target="_blank" rel="noreferrer">
            UCI LGBT Resource Center
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Mental Health</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://findyouranchor.us/" target="_blank" rel="noreferrer">
            Find Your Anchor
          </a>
        </li>
        <li>
          <a href="https://crimesurvivors.org/" target="_blank" rel="noreferrer">
            Crime Survivors Resource Center
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Homelessness</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://projecthopealliance.org/" target="_blank" rel="noreferrer">
            Project Hope Alliance
          </a>
        </li>
        <li>
          <a href="https://ifhomeless.org/" target="_blank" rel="noreferrer">
            Illumination Foundation
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Racism</h3>
      <ul className="resourcesText">
        <li>
          <a
            href="https://sites.uci.edu/endracism/anti-racism-resources/"
            target="_blank"
            rel="noreferrer"
          >
            UCI Anti-Racism Resources
          </a>
        </li>
        <li>
          <a href="https://sites.uci.edu/equityinengineering/" target="_blank" rel="noreferrer">
            UCI Equity in Engineering Resources
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Environment</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://habitatuci.wixsite.com/habitatuci" target="_blank" rel="noreferrer">
            Habitat at UCI
          </a>
        </li>
        <li>
          <a href="https://www.ochabitats.org/" target="_blank" rel="noreferrer">
            OC Habitats
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Latinx</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://latinx.uci.edu/" target="_blank" rel="noreferrer">
            UCI Latinx Resource Center
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Education</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://literacyproj.org/" target="_blank" rel="noreferrer">
            Literacy Project Foundation
          </a>
        </li>
        <li>
          <a href="https://www.childcreativitylab.org/" target="_blank" rel="noreferrer">
            Child Creativity Lab
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Juvenile Incarceration</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://www.justice4families.org/" target="_blank" rel="noreferrer">
            Justice for Families
          </a>
        </li>
      </ul>
      <h3 className="ResourcesName">Food Insecurity</h3>
      <ul className="resourcesText">
        <li>
          <a href="https://www.aboundfoodcare.org/" target="_blank" rel="noreferrer">
            Abound Food Care
          </a>
        </li>
        <li>
          <a href="https://feedoc.org/" target="_blank" rel="noreferrer">
            Second Harvest Food Bank of Orange County
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Resources;
