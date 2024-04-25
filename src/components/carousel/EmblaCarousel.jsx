import React, { useEffect } from 'react'

import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'


import { getInterestingPlaces } from '@/lib/placeholder-data'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const places = getInterestingPlaces()
  
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
      {
        places.map((place, index) => (
          <div key={index} className="embla__slide display-inline-block text-align-center">
            <div style={{ position: 'relative', height: '80vh', width: '100%' }}>
              <Image
                className="object-fit-contain"
                src={place.image} 
                alt={place.name}
                fill={true}
              />
            </div>
            <div >
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}
