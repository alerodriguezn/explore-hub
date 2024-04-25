import React, { useEffect } from 'react'

import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { DotButton, useDotButton } from './EmblaCarouselDotButton'

import { getInterestingPlaces } from '@/lib/placeholder-data'
import { LocationOnIcon } from '@/lib/icons'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const places = getInterestingPlaces()
  
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container" style={{width:"100%"}}>
      {
        places.map((place, index) => (
          <div key={index} className="embla__slide">
            <div className='embla__slide__inner'>
              <Image
                className="object-cover w-full h-full"
                src={place.image} 
                alt={place.name}
                fill={true}
              />
              <div className="embla__slide__label">
                  <LocationOnIcon />
                  <p>{place.name}</p>
              </div>
            </div>
          </div>
        ))
      }
      </div>

      <div className="embla__controls">
        <div className="embla__dots" style={{
        }}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
