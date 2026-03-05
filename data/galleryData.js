export const galleryItems = [
  {
    id: "fpv-1",
    title: "Oregon West Coast",
    vimeoId: "1170077881", // <-- replace with your Vimeo video ID
    description:
      "A short cinematic FPV sequence focused on smooth proximity lines and parallax.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro 11 Mini",
      "Video System: DJI Goggles V2 + Vista",
      "Video Editing Software: Premiere Pro",
    ],
  },
  {
    id: "fpv-2",
    title: "Seaport City",
    vimeoId: "1170494350",
    description: "A short sequence from an MV for Cascade Media.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro Hero 6",
      "Video System: DJI Goggles V2 + Vista",
    ],
  },
  {
    id: "fpv-3",
    title: "Heather Lake FPV",
    vimeoId: "1170487271",
    description:
      "Here is a flight that I dreamed about 4 years ago, to capture it from my favorite machine and to celebrate nature at its purest. I am grateful to be alive, to have gotten a chance to live on and film a beautiful planet of ours, with all of you. I highly recommend enjoying this video in 4k. I love you all.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro Hero 6",
      "Video System: DJI Goggles V2 + Vista",
    ],
  },
  {
    id: "fpv-4",
    title: "Oregon West Coast - Part 2",
    vimeoId: "1170561702",
    description:
      "Got a chance to revisit Oregon West Coast while roadtripping down to California.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro 11 Mini",
      "Video System: DJI Goggles 2 + O3",
    ],
  },
  {
    id: "fpv-5",
    title: "Alps in the Summer",
    vimeoId: "1170562264",
    description: "Experimenting the most hated Gopro setting - Linear fov.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro 11 Mini",
      "Video System: DJI Goggles 2 + O3",
    ],
  },
  {
    id: "fpv-6",
    title: "Sauk Lake waterfall.",
    vimeoId: "1170479961",
    description: "A Summer time with FPV.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro 11 Mini",
      "Video System: DJI Goggles v2 + Vista",
    ],
  },
  {
    id: "fpv-7",
    title: "FPV x Drift",
    vimeoId: "1170496469",
    description:
      "Beyond excited to release my dream project video, it’s an opportunity given by @spirit.peaks.raceway which also brought me to an amazing community and I can’t be thankful enough to get these shots done. Since this is my first time ever chasing objects with great speed, most of these shots were unplanned and kept in a good distance from the cars with zoomed edit for safety but it turned out epic for the least.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro Hero 6",
      "Video System: DJI Goggles v2 + Vista",
    ],
  },
  {
    id: "fpv-8",
    title: "American Alps surfing.",
    vimeoId: "1170470058",
    description:
      "Here’s the raw look of beautiful American alps. Music by @modera.music",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro 11 Mini",
      "Video System: DJI Goggles 2 +  O3",
    ],
  },
  {
    id: "fpv-9",
    title: "Fireworks X FPV",
    vimeoId: "1170488135",
    description: "Some explosions with this one.",
    gear: [
      "FPV Drone: Custom 5-inch 6s",
      "Camera: GoPro 11 Mini",
      "Video System: DJI Goggles 2 +  O3",
    ],
  },
];

export const getGalleryItemById = (id) =>
  galleryItems.find((item) => item.id === id);
