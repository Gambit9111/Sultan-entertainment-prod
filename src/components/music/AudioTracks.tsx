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
    <div className="text-myWhite flex items-center justify-end px-3 gap-3 mt-6 h-[125px]">
      <Image
        src={image}
        alt={title}
        width={127}
        height={125}
        className="rounded-xl"
      />
      <div className="w-full flex flex-col h-full justify-evenly">
        <div>
          <h3 className="font-Syne leading-none font-bold text-myNeon">
            {artist}
          </h3>
          <h3 className="text-myWhite text-sm font-Outfit tracking-wider font-semibold">{title}</h3>
        </div>
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
        <div className="flex justify-between px-3 font-Syne text-xs leading-none font-bold text-myNeon pt-6">

          <div className="flex flex-col items-center gap-2">
            <button className="w-14 h-14 bg-[#89fc00] rounded-xl" onClick={() => setArtist("Mamis")}>
            </button>
            <h3>Mamis</h3>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button className="w-14 h-14 bg-[#dc0073] rounded-xl" onClick={() => setArtist("Bienis")}>
            </button>
            <h3>Bienis</h3>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button className="w-14 h-14 bg-[#00a1e4] rounded-xl" onClick={() => setArtist("Seneka")}>
            </button>
            <h3>Seneka</h3>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button className="w-14 h-14 bg-[#f5b700] rounded-xl" onClick={() => setArtist("Prosto Pijus")}>
            </button>
            <h3>Pijus</h3>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button className="w-14 h-14 bg-[#04e762] rounded-xl" onClick={() => setArtist("Muile")}>
            </button>
            <h3>Muile</h3>
          </div>

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
