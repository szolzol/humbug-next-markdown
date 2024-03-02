import Image from "next/image";
import styles from "./page.module.css";
import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/PostCard";

export default function Home() {
  const PostMetadata = getPostMetadata("humbugs_md");
  // console.log(PostMetadata);

  return (
    <main>
      <div>
        <h3>Szabályok</h3>
        <br></br>
        <p>
          A játékmester feltesz egy kérdést, azaz lényegében megnevez egy
          kategóriát, a játékosoknak pedig sorban haladva mondaniuk kell 1-1
          elemet, amelyik szerintük beletartozik az adott kategóriába. A
          játékmester nem kommentálja az elhangzott válaszokat, mert nem az a
          lényeg, hogy a válasz jó-e vagy sem – egy fordulónak akkor van vége,
          ha egy játékos megkérdőjelezi egy másik válaszát azzal, hogy hangosan
          humbugot mond rá. A játékmester ekkor ellenőrzi, hogy a kérdéses
          válasz jó-e vagy sem. Ha jó volt, a humbugot hívó játékos veszít egy
          életet, ha viszont rossz, akkor értelemszerűen az, aki a hibás választ
          mondta. Ha helyes volt a humbug bemondása, akkor az azt bemondó
          játékos egy passzolási lehetőséggel is gazdagodik, amit később
          bármikor felhasználhat, vagyis amikor rákerül a sor, mondhat passzt
          is, és átugorjuk.
        </p>
        <br></br>
        <p>
          A játékosok előzetes megegyezés alapján 1, 2 vagy 3 élettel indulnak,
          az nyer, aki utoljára „életben marad”. Játszható a játék úgy is, hogy
          egy adott forduló nem ér véget az első humbug bemondásánál, hanem a
          még aktív játékosok (azaz a megkérdőjelezett választ adó és a humbugot
          behívó játékos kivételével mindenki) mennek tovább a második humbug
          bemondásáig. Ebben az esetben 2 különböző játékos is életet veszít az
          adott körben.
        </p>
        <br></br>
        <br></br>
      </div>
      <div className="postsContainer">
        {PostMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
