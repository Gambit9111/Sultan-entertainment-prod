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
        <h1 className="font-Syne text-2xl uppercase text-myWhite font-bold leading-none text-center px-14 mt-9">Newest tracks by our <span className="text-myNeon">artists</span></h1>
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
      image: "/music_images/Bienis_3_Telefonai.webp",
    },
    {
      id: 2,
      title: "Jaučiu Kaifa",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Jauciu_Kaifa.mp3",
      image: "/music_images/Bienis_Jauciu_Kaifa.webp",
    },
    {
      id: 3,
      title: "Overtimas",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Overtimas.mp3",
      image: "/music_images/Bienis_Overtimas.webp",
    },
    {
      id: 4,
      title: "Pabaiga",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Pabaiga.mp3",
      image: "/music_images/Bienis_Pabaiga.webp",
    },
    {
      id: 5,
      title: "Pasikeist",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Pasikeist.mp3",
      image: "/music_images/Bienis_Pasikeist.webp",
    },
    {
      id: 6,
      title: "Rolls Royce",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Rolls_Royce.mp3",
      image: "/music_images/Bienis_Rolls_Royce.webp",
    },
    {
      id: 7,
      title: "WoW/Keista",
      artist: "Bienis",
      audioSrc: "/music/Bienis_Wow_Keista.mp3",
      image: "/music_images/Bienis_Wow_Keista.webp",
    },
    {
      id: 8,
      title: "Tarp Savu Minciu ft. Mamis",
      artist: "Bienis",
      audioSrc: "/music/Bienis_x_Mamis_Tarp_Savu_Minciu.mp3",
      image: "/music_images/Bienis_x_Mamis_Tarp_Savu_Minciu.webp",
    },
    {
      id: 9,
      title: "As Galiu",
      artist: "Mamis",
      audioSrc: "/music/Mamis_As_Galiu.mp3",
      image: "/music_images/Mamis_As_Galiu.webp",
    },
    {
      id: 10,
      title: "Puse 8",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Puse_8.mp3",
      image: "/music_images/Mamis_Puse_8.webp",
    },
    {
      id: 11,
      title: "Aukstai ft. Seneka & Prosto Pijus",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Seneka_Prosto_Pijus_Aukstai.mp3",
      image: "/music_images/Mamis_Seneka_Prosto_Pijus_Aukstai.webp",
    },
    {
      id: 12,
      title: "Sumaisytos Emocijos",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Sumaisytos_Emocijos.mp3",
      image: "/music_images/Mamis_Sumaisytos_Emocijos.webp",
    },
    {
      id: 13,
      title: "Tokyo",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Tokyo.mp3",
      image: "/music_images/Mamis_Tokyo.webp",
    },
    {
      id: 14,
      title: "Turbo",
      artist: "Mamis",
      audioSrc: "/music/Mamis_Turbo.mp3",
      image: "/music_images/Mamis_Turbo.webp",
    },
    {
      id: 15,
      title: "Flexinu ft. Bienis",
      artist: "Mamis",
      audioSrc: "/music/Mamis_x_Bienis_Flexinu.mp3",
      image: "/music_images/Mamis_x_Bienis_Flexinu.webp",
    },
    {
      id: 16,
      title: "Angelas ft. Muile",
      artist: "Mamis",
      audioSrc: "/music/Mamis_x_Muile_Angelas.mp3",
      image: "/music_images/Mamis_x_Muile_Angelas.webp",
    },
    {
      id: 17,
      title: "D3MONS ft. Prosto Pijus & Bienis",
      artist: "Mamis",
      audioSrc: "/music/Mamis_x_Prosto_Pijus_x_Bienis_D3MONS.mp3",
      image: "/music_images/Mamis_x_Prosto_Pijus_x_Bienis_D3MONS.webp",
    },
    {
      id: 18,
      title: "Nesustabdys",
      artist: "Muile",
      audioSrc: "/music/Muile_Nesustabdys.mp3",
      image: "/music_images/Muile_Nesustabdys.webp",
    },
    {
      id: 19,
      title: "Garantas ft. Seneka",
      artist: "Muile",
      audioSrc: "/music/Muile_Seneka_Garantas.mp3",
      image: "/music_images/Muile_Seneka_Garantas.webp",
    },
    {
      id: 20,
      title: "As Noriu Daugiau",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_As_Noriu_Daugiau.mp3",
      image: "/music_images/Prosto_Pijus_As_Noriu_Daugiau.webp",
    },
    {
      id: 21,
      title: "As Nusirukes",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_As_Nusirukes.mp3",
      image: "/music_images/Prosto_Pijus_As_Nusirukes.webp",
    },
    {
      id: 22,
      title: "Marcelle",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_Marcelle.mp3",
      image: "/music_images/Prosto_Pijus_Marcelle.webp",
    },
    {
      id: 23,
      title: "Perlai",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_Perlai.mp3",
      image: "/music_images/Prosto_Pijus_Perlai.webp",
    },
    {
      id: 24,
      title: "Nebenoriu Grizt ft. Bienis & Mamis",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_x_Bienis_x_Mamis_Nebenoriu_Grizt.mp3",
      image: "/music_images/Prosto_Pijus_x_Bienis_x_Mamis_Nebenoriu_Grizt.webp",
    },
    {
      id: 25,
      title: "Paprasta ft. Mamis",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_x_Mamis_Paprasta.mp3",
      image: "/music_images/Prosto_Pijus_x_Mamis_Paprasta.webp",
    },
    {
      id: 26,
      title: "Zaidejams",
      artist: "Prosto Pijus",
      audioSrc: "/music/Prosto_Pijus_Zaidejams.mp3",
      image: "/music_images/Prosto_Pijus_Zaidejams.webp",
    },
    {
      id: 27,
      title: "Motyvas",
      artist: "Seneka",
      audioSrc: "/music/Seneka_Motyvas.mp3",
      image: "/music_images/Seneka_Motyvas.webp",
    },
    {
      id: 28,
      title: "Debesuota ft. Mamis",
      artist: "Seneka",
      audioSrc: "/music/Seneka_x_Mamis_Debesuota.mp3",
      image: "/music_images/Seneka_x_Mamis_Debesuota.webp",
    },
  ];

  return {
    props: {
      tracks,
    },
  };
}

export default Home;
