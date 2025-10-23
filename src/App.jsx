import Instargram from "./instagram/Instargram";

function App() {
  const data = [
    { src: "man.jpg", name: "sangwon", followedDate: 20, followState: "unFollow" },
    { src: "man1.jpg", name: "jongwoo", followedDate: 22, followState: "follow" },
    { src: "woman.jpg", name: "yeojin", followedDate: 21, followState: "unFollow" },
    { src: "man.jpg", name: "sangwon", followedDate: 20, followState: "unFollow" },
    { src: "man1.jpg", name: "jongwoo", followedDate: 22, followState: "follow" },
    { src: "woman.jpg", name: "yeojin", followedDate: 21, followState: "unFollow" },
    { src: "man.jpg", name: "sangwon", followedDate: 20, followState: "unFollow" },
    { src: "man1.jpg", name: "jongwoo", followedDate: 22, followState: "follow" },
    { src: "woman.jpg", name: "yeojin", followedDate: 21, followState: "unFollow" },
    { src: "man.jpg", name: "sangwon", followedDate: 20, followState: "unFollow" },
    { src: "man1.jpg", name: "jongwoo", followedDate: 22, followState: "follow" },
    { src: "woman.jpg", name: "yeojin", followedDate: 21, followState: "unFollow" },
    { src: "man.jpg", name: "sangwon", followedDate: 20, followState: "unFollow" },
    { src: "man1.jpg", name: "jongwoo", followedDate: 22, followState: "follow" },
    { src: "woman.jpg", name: "yeojin", followedDate: 21, followState: "unFollow" },
  ];

  return (
    <>
      {data.map((v) => (
        <Instargram src={v.src} name={v.name} followedDate={v.followedDate} followState={v.followState} />
      ))}
    </>
  );
}

export default App;
