import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '2732s1ci',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skauyhSj1PWN3j6pd7xd4lIxwIzrqc1T2E7SGHcrs65kjunMCVbkiTCiiQ8ACgkmpkHtNEZgFXxoNaiQ5MH8WMH885bSrqvTULwoTgnldDQtlBO3HVoLhrSEA8QwOG0Ds4l6bNeqi6W6Uqp3vLrl71bNa3mTGquu3eWAKgBotfb6Yc4Woho0',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
