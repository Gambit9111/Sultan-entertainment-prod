import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

export interface PageProps {
  tracks: [
    {
      id: string;
      title: string;
      artist: string;
      audioSrc: string;
      image: StaticImageData;
    }
  ];
}

interface Track {
  id: string;
  title: string;
  artist: string;
  audioSrc: string;
  image: StaticImageData;
}

const AudioTrack: React.FC<Track> = ({ title, artist, audioSrc, image }) => {
  return (
    <div className="flex h-[125px] w-full gap-3 lg:h-[250px] lg:gap-8">
      <Image
        src={image}
        alt={title}
        width={127}
        height={125}
        className="lg:h-[250px] lg:w-[250px]"
      />
      <div className="w-full pt-1">
        <h3 className="font-Syne text-sm font-semibold text-myWhite lg:pb-3">
          {artist}
        </h3>
        <h3 className="text-sm font-bold text-myNeon lg:text-2xl">{title}</h3>
        <p className="hidden text-myWhite lg:inline-flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          tempore!
        </p>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
    </div>
  );
};

const AudioTracks: React.FC<PageProps> = ({ tracks }) => {
  const [artist, setArtist] = useState("");
  return (
    <div>
      <div>
        <div>
          <button className="text-myNeon" onClick={() => setArtist("Bienis")}>
            Bienis
          </button>
          <button className="text-myNeon" onClick={() => setArtist("Mamis")}>
            Mamis
          </button>
          <button className="text-myNeon" onClick={() => setArtist("Muile")}>
            Muile
          </button>
          <button
            className="text-myNeon"
            onClick={() => setArtist("Prosto Pijus")}
          >
            Prosto Pijus
          </button>
          <button className="text-myNeon" onClick={() => setArtist("Seneka")}>
            Seneka
          </button>
          <button
            className="my-button border border-myNeon bg-myBlack text-myNeon"
            onClick={() => setArtist("")}
          >
            View All
          </button>
        </div>
        <div>
          {/* <SectionTrack />
                    <SectionTrack />
                    <SectionTrack />
                    <SectionTrack /> */}
          {tracks
            .filter((track) => track.artist === artist)
            .map((track) => (
              <AudioTrack key={track.id} {...track} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AudioTracks;
