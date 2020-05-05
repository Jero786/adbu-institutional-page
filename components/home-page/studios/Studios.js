import './Studios.scss';
import React from 'react';
import GridIcons from '../../grid-icons/GridIcons';
import GridIcon from '../../grid-icons/GridIcon';

export default class Studios extends React.PureComponent {
	render() {
		return (
  <article className="studios">
    <h1 className="studios__title">ADBU STUDIO</h1>
    <p className="studios__description">
					Adbu is divided into studios to organize and group in a better shape our
					delivery

    </p>
    <div className="studios__list">
      <GridIcons>
        <GridIcon title="MOBILE STUDIO" imageSrc="/static/images/studio-mobile.png" />
        <GridIcon title="QA STUDIO" imageSrc="/static/images/studios-qa.png" />
        <GridIcon title="BIG DATA STUDIO" imageSrc="/static/images/studios-big-data.png" />
        <GridIcon title="CREATIVE STUDIO" imageSrc="/static/images/studio-creative.png" />
      </GridIcons>
    </div>
    <div className="studios__footer">
      <div className="studios__footer-header">
						Adbu helps you to create the most innovative and everywhere Apps focus on creative design and best techs
						practices. One App for your phone, tablet or Smart TV

      </div>
      <div className="studios__footer-content">
        <img src="/static/images/devices.svg" alt="devices" />
      </div>
    </div>
  </article>
		);
	}
}

Studios.propTypes = {};
