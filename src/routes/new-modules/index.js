import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
 } from 'reactstrap';
// intl messages
import IntlMessages from 'Util/IntlMessages';
import { NewWidget } from 'Components/Widgets';
export default class NewList extends Component {
	render() {
		return (
			<div className="blank-wrapper">
				<Helmet>
					<title>name page</title>
					<meta name="description" content="Reactify Blank Page" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.newmodules" />} match={this.props.match} />
				<NewWidget />
				<div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 mb-30">
				<Card>
					<CardImg top width="100%" className="img-fluid ripple-effect" src={require('Assets/img/gallery-1.jpg')} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card Title</CardTitle>
						<CardSubtitle>Card Subtitle</CardSubtitle>
						<CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
						<Button size="small" color="primary">Read More</Button>
					</CardBody>
				</Card>
				</div>
				
				<div className="col-xs-12 col-sm-12 col-md-4 mb-30">
				<Card>
					<CardImg top width="100%" className="img-fluid ripple-effect" src={require('Assets/img/gallery-7.jpg')} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card Title</CardTitle>
						<CardSubtitle>Card Subtitle</CardSubtitle>
						<CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
						<Button size="small" color="primary">Read More</Button>
					</CardBody>
				</Card>
				</div>
                <div className="col-xs-12 col-sm-12 col-md-4 mb-30">
				<Card>
					<CardImg top width="100%" className="img-fluid ripple-effect" src={require('Assets/img/gallery-9.jpg')} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card Title</CardTitle>
						<CardSubtitle>Card Subtitle</CardSubtitle>
						<CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
						<Button size="small" color="primary">Read More</Button>
					</CardBody>
				</Card>
				</div>

			</div>

			</div>
		);
	}
}