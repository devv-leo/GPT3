import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat quibusdam ea.',
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat quibusdam ea gist so dibad.',
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat quibusdam ea gist so dibad',
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat quibusdam ea gist so dibadLorem ipsum dolor sit amet.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam esse debitis.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
