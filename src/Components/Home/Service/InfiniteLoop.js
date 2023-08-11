import React from "react";
import "./InfiniteLoop.css";


const TAGS = ['Content marketing.', 'Social media marketing', 'Search engine optimization (SEO)', 'Email marketing', 'Influencer marketing', 'Earned media and PR', 'Leading pages', 'Advertising'];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 3;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const InfiniteLoop = ({ children, duration, reverse = false }) => {
  return (
    <div className='loop-slider' style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tagMark'>{text}</div>
);

const MarketingLeftDiv = () => (
  <div className='tag-listMark'>
    {[...new Array(ROWS)].map((_, i) => (
      <InfiniteLoop key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
        {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
          <Tag text={tag} key={tag} />
        ))}
      </InfiniteLoop>
    ))}
    <div className='fade' />
  </div>
);

export default MarketingLeftDiv;
