import Link from "next/link";

export default function Home() {
  const games = ["1"];
  return (
    <ul>
      {games.map((id) => (
        <li key={id}>
          <Link key={id + "-guessing"} href={"/game/" + id + "/guessing"}>
            Guessing Game {id}
          </Link>
          <br />
          <Link href={"/game/" + id + "/make-guess"}>MakeGuess Game {id}</Link>
        </li>
      ))}
    </ul>
  );
}
