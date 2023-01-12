import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import Image from "next/image";

import AudioTracks from "../../components/music/AudioTracks";
import { PageProps } from "../../components/music/AudioTracks";

const Home: NextPageWithLayout<PageProps> = ({ tracks }) => {
  return (
    <>
      <main>
        <AudioTracks tracks={tracks} />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const tracks = [
    {
      id: 1,
      title: "3 Telefonai",
      artist: "Bienis",
      audioSrc: "/music/Bienis_3_Telefonai.mp3",
      image: "/music_images/Bienis_3_Telefonai.svg",
    },
    {
      id: 2,
      title: "Jaučiu Kaifa",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Jauciu_Kaifa.mp3",
      image: "/music_images/Bienis_Jauciu_Kaifa.svg",
    },
    {
      id: 3,
      title: "Overtimas",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Overtimas.mp3",
      image: "/music_images/Bienis_Overtimas.svg",
    },
    {
      id: 4,
      title: "Pabaiga",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Pabaiga.mp3",
      image: "/music_images/Bienis_Pabaiga.svg",
    },
    {
      id: 5,
      title: "Pasikeist",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Pasikeist.mp3",
      image: "/music_images/Bienis_Pasikeist.svg",
    },
    {
      id: 6,
      title: "Rolls Royce",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Rolls_Royce.mp3",
      image: "/music_images/Bienis_Rolls_Royce.svg",
    },
    {
      id: 7,
      title: "WoW/Keista",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Wow_Keista.mp3",
      image: "/music_images/Bienis_Wow_Keista.svg",
    },
    {
      id: 8,
      title: "Tarp Savu Minciu ft. Mamis",
      artist: "Bienis",
      audioSrc: "/music/Bienis_x_Mamis_Tarp_Savu_Minciu.mp3",
      image: "/music_images/Bienis_x_Mamis_Tarp_Savu_Minciu.svg",
    },
    {
      id: 9,
      title: "As Galiu",
      artist: "Mamis",
      audioSrc: "/music/Mamis_As_Galiu.mp3",
      image: "/music_images/Mamis_As_Galiu.svg",
    },
    {
      id: 10,
      title: "Puse 8",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Puse_8.mp3",
      image: "/music_images/Mamis_Puse_8.svg",
    },
    {
      id: 11,
      title: "Aukstai ft. Seneka & Prosto Pijus",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Seneka_Prosto_Pijus_Aukstai.mp3",
      image: "/music_images/Mamis_Seneka_Prosto_Pijus_Aukstai.svg",
    },
    {
      id: 12,
      title: "Sumaisytos Emocijos",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Sumaisytos_Emocijos.mp3",
      image: "/music_images/Mamis_Sumaisytos_Emocijos.svg",
    },
    {
      id: 13,
      title: "Tokyo",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Tokyo.mp3",
      image: "/music_images/Mamis_Tokyo.svg",
    },
    {
      id: 14,
      title: "Turbo",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Turbo.mp3",
      image: "/music_images/Mamis_Turbo.svg",
    },
    {
      id: 15,
      title: "Flexinu ft. Bienis",
      artist: "Mamis",
      audioSrc: "/music/Mamis_x_Bienis_Flexinu.mp3",
      image: "/music_images/Mamis_x_Bienis_Flexinu.svg",
    },
    {
      id: 16,
      title: "Angelas ft. Muile",
      artist: "Mamis",
      audioSrc: "/music/Mamis_x_Muile_Angelas.mp3",
      image: "/music_images/Mamis_x_Muile_Angelas.svg",
    },
    {
      id: 17,
      title: "D3MONS ft. Prosto Pijus & Bienis",
      artist: "Mamis",
      audioSrc: "/music/Mamis_x_Prosto_Pijus_x_Bienis_D3MONS.mp3",
      image: "/music_images/Mamis_x_Prosto_Pijus_x_Bienis_D3MONS.svg",
    },
    {
      id: 18,
      title: "Nesustabdys",
      artist: "Muile",
      audioSrc: "/music/Muile_Nesustabdys.mp3",
      image: "/music_images/Muile_Nesustabdys.svg",
    },
    {
      id: 19,
      title: "Garantas ft. Seneka",
      artist: "Muile",
      audioSrc: "/music/Muile_Seneka_Garantas.mp3",
      image: "/music_images/Muile_Seneka_Garantas.svg",
    },
    {
      id: 20,
      title: "As Noriu Daugiau",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_As_Noriu_Daugiau.mp3",
      image: "/music_images/Prosto_Pijus_As_Noriu_Daugiau.svg",
    },
    {
      id: 21,
      title: "As Nusirukes",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_As_Nusirukes.mp3",
      image: "/music_images/Prosto_Pijus_As_Nusirukes.svg",
    },
    {
      id: 22,
      title: "Marcelle",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_Marcelle.mp3",
      image: "/music_images/Prosto_Pijus_Marcelle.svg",
    },
    {
      id: 23,
      title: "Perlai",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_Perlai.mp3",
      image: "/music_images/Prosto_Pijus_Perlai.svg",
    },
    {
      id: 24,
      title: "Nebenoriu Grizt ft. Bienis & Mamis",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_x_Bienis_x_Mamis_Nebenoriu_Grizt.mp3",
      image: "/music_images/Prosto_Pijus_x_Bienis_x_Mamis_Nebenoriu_Grizt.svg",
    },
    {
      id: 25,
      title: "Paprasta ft. Mamis",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_x_Mamis_Paprasta.mp3",
      image: "/music_images/Prosto_Pijus_x_Mamis_Paprasta.svg",
    },
    {
      id: 26,
      title: "Zaidejams",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_Zaidejams.mp3",
      image: "/music_images/Prosto_Pijus_Zaidejams.svg",
    },
    {
      id: 27,
      title: "Motyvas",
      artist: "Seneka",
      audioSrc: "/music/Seneka_Motyvas.mp3",
      image: "/music_images/Seneka_Motyvas.svg",
    },
    {
      id: 28,
      title: "Debesuota ft. Mamis",
      artist: "Seneka",
      audioSrc: "/music/Seneka_x_Mamis_Debesuota.mp3",
      image: "/music_images/Seneka_x_Mamis_Debesuota.svg",
    },
  ];

  return {
    props: {
      tracks,
    },
  };
}

export default Home;
