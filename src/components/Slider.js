import React, { useState, useEffect } from 'react';

const slides = ['slide-1', 'slide-2', 'slide-3', 'slide-4'].map(img => ({
  eachSlide: `url(${require(`../img/${img}.jpg`)})`,
}));

export const Slider = () => {
  const [active, setActive] = useState(0);
  const [isAutoplay, setAutoplay] = useState(false);
  const max = slides.length || 0;

  useEffect(() => {
    const inverval = setInterval(intervalBetweenSlides, 3000);

    return () => clearInterval(inverval);
  });

  const setSliderStyles = () => {
    const transition = (active * -100) / slides.length;

    return {
      width: slides.length * 100 + '%',
      transform: `translateX(${transition}%)`,
    };
  };

  const nextOne = () => {
    active < max - 1 ? setActive(active + 1) : setActive(0);
  };

  const prevOne = () => {
    active > 0 ? setActive(active - 1) : setActive(max - 1);
  };

  const isActive = value => {
    return active === value ? 'active' : '';
  };

  const toggleAutoPlay = () => {
    setAutoplay(!isAutoplay);
  };

  const intervalBetweenSlides = () => {
    if (isAutoplay) {
      setActive(active === max - 1 ? 0 : active + 1);
    }
  };
  
  const renderSlides = () => {
    const transition = 100 / slides.length + '%';

    return slides.map((item, index) => (
      <div
        className="each-slide"
        key={index}
        style={{ backgroundImage: item.eachSlide, width: transition }}
      />
    ));
  };

  const renderArrows = () => (
    <div>
      <button type="button" className="arrows prev" onClick={prevOne}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>

      <button type="button" className="arrows next" onClick={nextOne}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  );

  const renderDots = () => {
    return slides.map((_, i) => (
      <li
        className={`${isActive(i)} dots`}
        key={i}
        // ref="dots"
        onClick={() => setActive(i)}
      >
        <a>&#9679;</a>
      </li>
    ));
  };

  const renderPlayStop = () => {
    const playStop = isAutoplay ? (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ) : (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    );

    return playStop;
  };

  return (
    <div className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className="dots-container">{renderDots()}</ul>

      <a className="toggle-play" onClick={toggleAutoPlay}>
        {renderPlayStop()}
      </a>
    </div>
  );
};
