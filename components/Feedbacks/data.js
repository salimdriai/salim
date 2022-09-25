export const feedbacks = [
  {
    name: 'iljmur',
    country: 'Latvia',
    flag: '/latvia.png',
    time: '7 months ago',
    feedback:
      'Thank you very much Salim, it is a pleasure working with you. You have even improved my originally anticipated design. You get things done and on a professional level.',
  },
  {
    name: 'x0153r',
    country: 'Germany',
    flag: '/germany.png',
    time: '7 months ago',
    feedback: 'nice guy, nice work, nice communication, fast delivery.',
  },
  {
    name: 'samgad650',
    country: 'Canada',
    flag: '/canada.png',
    time: '6 months ago',
    feedback:
      'Once again Salim was really professional and resolve all the issues i had Its amazing working with him I highly reccoment his services.',
  },
  {
    name: 'moeenbasra',
    country: 'United Arab Emirates',
    flag: '/united.png',
    time: '1 year ago',
    feedback:
      'Salim is a really smart developer and always prioritizes the satisfaction of clients. I really enjoyed working with him and highly recommend him.',
  },
  {
    name: 'b3tts32',
    country: 'United States',
    flag: '/usa.png',
    time: '1 year ago',
    feedback: 'Work was completed ahead of schedule and was very thorough.',
  },
]

export const carouselSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
