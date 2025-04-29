const FMRPMR355Brake = "/assets/images/FMR_PMR_355_Brake.png";
const GovernorGB32Maintanance = "/assets/images/Governor_GB_32_Maintanance.png";
const OilContaminationActions = "/assets/images/Oil_Contamination_Actions.png";
const Actions_CN =
  "/assets/Subtitle_Files/Oil_Contamination_Actions/Oil_Contamination_Actions_CN.vtt";
const Actions_DE =
  "/assets/Subtitle_Files/Oil_Contamination_Actions/Oil_Contamination_Actions_DE.vtt";
const Actions_EN =
  "/assets/Subtitle_Files/Oil_Contamination_Actions/Oil_Contamination_Actions_EN.vtt";
const Actions_FR =
  "/assets/Subtitle_Files/Oil_Contamination_Actions/Oil_Contamination_Actions_FR.vtt";
const Maintenance_CN =
  "/assets/Subtitle_Files/Governor_GB_32_Maintenance/Governor_GB_32_Maintenance_CN.vtt";
const Maintenance_DE =
  "/assets/Subtitle_Files/Governor_GB_32_Maintenance/Governor_GB_32_Maintenance_DE.vtt";
const Maintenance_EN =
  "/assets/Subtitle_Files/Governor_GB_32_Maintenance/Governor_GB_32_Maintenance_EN.vtt";
const Maintenance_FR =
  "/assets/Subtitle_Files/Governor_GB_32_Maintenance/Governor_GB_32_Maintenance_FR.vtt";
const Brake_Maintenance_CN =
  "/assets/Subtitle_Files/FMR_PMR_355_Brake_Maintenance/FMR_PMR_355_Brake_Maintenance_CN.vtt";
const Brake_Maintenance_DE =
  "/assets/Subtitle_Files/FMR_PMR_355_Brake_Maintenance/FMR_PMR_355_Brake_Maintenance_DE.vtt";
const Brake_Maintenance_EN =
  "/assets/Subtitle_Files/FMR_PMR_355_Brake_Maintenance/FMR_PMR_355_Brake_Maintenance_EN.vtt";
const Brake_Maintenance_FR =
  "/assets/Subtitle_Files/FMR_PMR_355_Brake_Maintenance/FMR_PMR_355_Brake_Maintenance_FR.vtt";

// DEV-Environment -
export const videoListDT = [
  {
    title: "Governor-GB 32 Maintanance",
    src: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Governor-GB%2032%20Maintenance%20all%20translations%20source%20file/Governor-GB%2032%20Maintenance_Video%20no%20audio.mp4?se=2027-04-06T07%3A55%3A16Z&sp=r&sv=2023-08-03&sr=b&sig=%2Bv7kYRxRVnYw6gq88XbLnf9d/8OJiS%2BEQYWa8nJPWzk%3D",
    thumbnail: `${GovernorGB32Maintanance}`,
    description: "Governor-GB 32",
    audioTracks: [
      {
        language: "English",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Governor-GB%2032%20Maintenance%20all%20translations%20source%20file/Audio/Governor-GB%2032%20Maintenance_EN%20audio.mp3?se=2027-04-06T07%3A51%3A05Z&sp=r&sv=2023-08-03&sr=b&sig=6dGaZXSrcbLSBYKhr1JjSJJHPWS3%2B3OyG2LITAdzGjQ%3D",
      },
      {
        language: "German",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Governor-GB%2032%20Maintenance%20all%20translations%20source%20file/Audio/Governor-GB%2032%20Maintenance_DE%20audio.mp3?se=2027-04-06T07%3A49%3A52Z&sp=r&sv=2023-08-03&sr=b&sig=B06JZ1WX8HxA/Z7Bvitj5Dr7uBjx70sgy8EjzZ6BJ/Y%3D",
      },
      {
        language: "French",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Governor-GB%2032%20Maintenance%20all%20translations%20source%20file/Audio/Governor-GB%2032%20Maintenance_FR%20audio.mp3?se=2027-04-06T07%3A51%3A27Z&sp=r&sv=2023-08-03&sr=b&sig=G/kYjBAMblG0eQS/fyXxnQxQodXIUTcRCAIg6%2BLVx9o%3D",
      },
      {
        language: "Chinese",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Governor-GB%2032%20Maintenance%20all%20translations%20source%20file/Audio/Governor-GB%2032%20Maintenance_CN%20audio.mp3?se=2027-04-06T07%3A46%3A42Z&sp=r&sv=2023-08-03&sr=b&sig=7LhIBLzbElM/eGfYFuUZk6A9jirDDpkeO3mX0sJqIGE%3D",
      },
    ],
    subtitleTracks: [
      {
        language: "English",
        srclang: "en",
        url: Maintenance_EN,
      },
      {
        language: "German",
        srclang: "de",
        url: Maintenance_DE,
      },
      {
        language: "French",
        srclang: "fr",
        url: Maintenance_FR,
      },
      {
        language: "Chinese",
        srclang: "cn",
        url: Maintenance_CN,
      },
    ],
  },
  {
    title: "FMR-PMR 355 Brake Maintance",
    src: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/FMR-PMR%20355%20Brake%20Maintenance%20all%20translations%20source%20file/FMR-PMR%20355%20Brake%20Maintenance_Video%20no%20audio.mp4?se=2027-04-06T07%3A14%3A02Z&sp=r&sv=2023-08-03&sr=b&sig=v7Bezb3gvwZgOoyWfcDxKYxRupjSg0MdF6IgKgOVfbE%3D",
    thumbnail: `${FMRPMR355Brake}`,
    description: "FMR-PMR 355 Brake",
    audioTracks: [
      {
        language: "English",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/FMR-PMR%20355%20Brake%20Maintenance%20all%20translations%20source%20file/Audio/FMR-PMR%20355%20Brake%20Maintenance_EN%20audio.mp3?se=2027-04-06T07%3A10%3A40Z&sp=r&sv=2023-08-03&sr=b&sig=qrEl0HM9HJs3k06o%2BjYAjjtZdE3Nf3hkKpWqxVH20ps%3D",
      },
      {
        language: "German",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/FMR-PMR%20355%20Brake%20Maintenance%20all%20translations%20source%20file/Audio/FMR-PMR%20355%20Brake%20Maintenance_DE%20audio.mp3?se=2027-04-06T07%3A10%3A08Z&sp=r&sv=2023-08-03&sr=b&sig=ectsrk7kxZYB%2B07zBC5LXol98TXOcB2LDRnKQS1bDh0%3D",
      },
      {
        language: "French",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/FMR-PMR%20355%20Brake%20Maintenance%20all%20translations%20source%20file/Audio/FMR-PMR%20355%20Brake%20Maintenance_FR%20audio.mp3?se=2027-04-06T07%3A11%3A13Z&sp=r&sv=2023-08-03&sr=b&sig=rVrg3E9EhjGmE9rRNQP/GdEo0tAaiFIc4nvbitM2x1w%3D",
      },
      {
        language: "Chinese",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/FMR-PMR%20355%20Brake%20Maintenance%20all%20translations%20source%20file/Audio/FMR-PMR%20355%20Brake%20Maintenance_CN%20audio.mp3?se=2027-04-06T07%3A09%3A35Z&sp=r&sv=2023-08-03&sr=b&sig=VVEkwROL1DnMQcYWonB5Sc9uH8M3h9Uu3Hm%2BLtbhzcU%3D",
      },
    ],
    subtitleTracks: [
      {
        language: "English",
        srclang: "en",
        url: Brake_Maintenance_EN,
      },
      {
        language: "German",
        srclang: "de",
        url: Brake_Maintenance_DE,
      },
      {
        language: "French",
        srclang: "fr",
        url: Brake_Maintenance_FR,
      },
      {
        language: "Chinese",
        srclang: "cn",
        url: Brake_Maintenance_CN,
      },
    ],
  },
  {
    title: "Oil Contamination Actions",
    src: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Oil%20Contamination%20Actions%20all%20translations%20source%20file/Oil%20Contamination%20Actions_Video%20no%20audio.mp4?se=2027-04-06T07%3A56%3A40Z&sp=r&sv=2023-08-03&sr=b&sig=vGQJA%2BsOu0Wmg/80WsCzRzrcRmrCG4dexXPAukcnzgc%3D",
    thumbnail: `${OilContaminationActions}`,
    description: "Oil Contamination",
    audioTracks: [
      {
        language: "English",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Oil%20Contamination%20Actions%20all%20translations%20source%20file/Audio/Oil%20Contamination%20Actions_EN%20audio.mp3?se=2027-04-06T08%3A03%3A30Z&sp=r&sv=2023-08-03&sr=b&sig=sCQAsHspjAR3Ff1eUE98ayxOkH46pJl79dLNkaRldKM%3D",
      },
      {
        language: "German",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Oil%20Contamination%20Actions%20all%20translations%20source%20file/Audio/Oil%20Contamination%20Actions_DE%20audio.mp3?se=2027-04-06T08%3A02%3A33Z&sp=r&sv=2023-08-03&sr=b&sig=qJ7HaHg/i8uoP1jQrUltj7Z5xPSr4dpRJ2XiqPMcktY%3D",
      },
      {
        language: "French",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Oil%20Contamination%20Actions%20all%20translations%20source%20file/Audio/Oil%20Contamination%20Actions_FR%20audio.mp3?se=2027-04-06T08%3A04%3A43Z&sp=r&sv=2023-08-03&sr=b&sig=5nQaqkzPycTZKpcbJen0EM1lWaKQ2lqhuwJJxWk2wNA%3D",
      },
      {
        language: "Chinese",
        url: "https://saexperiment01.blob.core.windows.net/digital-twin/Maintenance%20Manuals/Videos/Oil%20Contamination%20Actions%20all%20translations%20source%20file/Audio/Oil%20Contamination%20Actions_CN%20audio.mp3?se=2027-04-06T08%3A01%3A40Z&sp=r&sv=2023-08-03&sr=b&sig=6xB8k4qujPndhWOOxaHKHFtBHQ0dE9eYLpep7tOAXPQ%3D",
      },
    ],
    subtitleTracks: [
      {
        language: "English",
        srclang: "en",
        url: Actions_EN,
      },
      {
        language: "German",
        srclang: "de",
        url: Actions_DE,
      },
      {
        language: "French",
        srclang: "fr",
        url: Actions_FR,
      },
      {
        language: "Chinese",
        srclang: "cn",
        url: Actions_CN,
      },
    ],
  },
];
