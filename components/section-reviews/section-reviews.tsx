'use client';

import { Carousel } from '@mantine/carousel';
import {
  Card, Blockquote, Avatar, Flex, Center,
} from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './section-reviews.module.scss';

type ReviewItem = {
  img: string;
  text: string;
  author: string;
}

const data: ReviewItem[] = [
  { img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'Super professional people. Highly recommend.', author: 'John Doe' },
  { img: 'https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'It was a pleasure working with this company. They did great job in constructing my house.', author: 'John Doe, CEO, Non-existent company' },
  { img: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'Simply - superb.', author: 'John Doe' },
  { img: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'So many things to say.. But all in all ratio of the quality and price was what impressed me most. So many things to say.. But all in all ratio of the quality and price was what impressed me most.', author: 'Jane Doe, person' },
  { img: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'Keep it up!', author: 'Jane Doe, another person' },
];

export default function SectionReviews() {
  const t = useTranslations();
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Center bg="transparent">
      <Carousel
        draggable={false}
        withControls
        classNames={styles}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        maw={980}
        loop
      >
        {data.map((item) => (
          <Carousel.Slide key={item.img}>
            <Card
              radius={0}
              bg="primary.4"
              h="100%"
            >
              <Flex align="center" justify="center" gap="md" h="100%">
                <Avatar className={styles.avatar} radius={0} h="126px" w="126px" src={item.img} alt={item.author} />
                <Blockquote
                  cite={item.author}
                  color="secondary.9"
                  iconSize={80}
                  bg="primary.1"
                  maw={700}
                  flex={1}
                >
                  {t('page.introText')}
                </Blockquote>
              </Flex>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Center>
  );
}
