import React, { useEffect, useRef, useState } from "react";
import './styles.scss';

import ContentPath from '../../assets/wallpapers/calculator.jpg';
import filmsPath from '../../assets/wallpapers/classroom.jpg';
import mobilePath from '../../assets/wallpapers/study.jpg';
import gamesPath from '../../assets/wallpapers/green.jpg';
import vfxPath from '../../assets/wallpapers/math.jpg';
import animationPath from '../../assets/wallpapers/library.jpg';
import vrPath from '../../assets/wallpapers/music.jpg';
import experimentalPath from '../../assets/wallpapers/numbers.jpg';
import richMediaPath from '../../assets/wallpapers/pencils.jpg';
import { Cell } from '../Cell';

const blocksInfo = [
  {
    name: 'content',
    src: ContentPath,
  },
  {
    name: 'films',
    src: filmsPath,
  },
  {
    name: 'mobile & platforms',
    src: mobilePath,
  },
  {
    name: 'games',
    src: gamesPath,
  },
  {
    name: 'vfx & post',
    src: vfxPath,
  },
  {
    name: 'animation',
    src: animationPath,
  },
  {
    name: 'vr',
    src: vrPath,
  },
  {
    name: 'experimental',
    src: experimentalPath,
  },
  {
    name: 'rich media',
    src: richMediaPath,
  },
  {
    name: 'for good',
    src: mobilePath,
  },
];

export const Cells = () => {
  const [state, setState] = useState(
    {
      index: -1,
      src: blocksInfo[0].src,
      name: ''
    }
  );

  const ref = useRef(0);

  useEffect(() => {
    handleAnimations();

    return () => ref.current && clearInterval(ref.current);
  }, [])

  function handleAnimations() {
    ref.current = setInterval(() => {
      const { floor, random } = Math;
      const randomInteger = floor(random() * (blocksInfo.length - 1));

      changeBackgroundImage(randomInteger);
    }, 4000);
  }

  function handleSrc(index) {
    return index !== state.index ? state.src : null;
  }

  function onMouseLeave() {
    handleAnimations();
  }

  function onMouseEnter(event) {
    const index = event.currentTarget.id

    if (ref.current) {
      clearInterval(ref.current);
      changeBackgroundImage(index - 1);
    }
  }

  function changeBackgroundImage(index) {
    setState({
      src: blocksInfo[index].src,
      name: blocksInfo[index].name,
      index,
    });
  }

  return (
    <div className="cells page__cells page__section">
      {blocksInfo.map((block, index) => (
        <Cell
          key={index}
          id={index + 1}
          imageName={state.name}
          name={block.name}
          src={handleSrc(index)}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
        />
      ))}
    </div>
  );
}

export default Cells;
