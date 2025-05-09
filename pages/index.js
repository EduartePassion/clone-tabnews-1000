import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Decifração Literária e Filosófica</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <h1>Decifre Literária e Filosoficamente!</h1>
        <div className="poem">
          <h2>Insólito Momento</h2>
          <p>Ela gentil, coração contente, encantadora..</p>
          <p>Ele com a mente longe... coração extraordinariamente acanhado</p>
          <p>
            Os olhos dele nos dela, mas não descortinavam a profundeza da sua
            sensibilidade
          </p>
          <p>
            Desvaneceu-se seu cintilar dos olhos dele, deslumbrou-se seu sentir
            e o sentimento dele silenciou-se…
          </p>
          <p>Exterminou-se mais um momento, mais um encanto</p>
          <p>O que aconteceu! O que não aconteceu!</p>
          <p>Já não importava mais…</p>
          <p>É o enigma substancial da existência</p>
          <p>E assim absorveram -algo- num bom ou mau momento</p>
        </div>

        <h2>Decifração Literária</h2>
        <ul>
          <li>
            <strong>Título:</strong> Insólito momento sugere algo fora do comum,
            singular, talvez inesperado.
          </li>
          <li>
            <strong>Personagens:</strong>
            <ul>
              <li>
                <strong>Ela:</strong> Representa a gentileza, o encantamento, e
                a completude emocional.
              </li>
              <li>
                <strong>Ele:</strong> Carrega o peso da introspecção, preso em
                sua própria vulnerabilidade.
              </li>
            </ul>
          </li>
        </ul>

        <h2>Decifração Filosófica</h2>
        <ul>
          <li>
            <strong>A Condição Humana:</strong> Reflete o paradoxo da
            existência: o desejo de conexão e o enfrentamento da solidão.
          </li>
          <li>
            <strong>Temporalidade:</strong> O momento insólito remete à
            fugacidade do tempo.
          </li>
        </ul>

        <h2>Conclusão Reflexiva</h2>
        <p>
          O poema revela como somos todos viajantes emocionais, tentando
          compreender os outros e enfrentando as limitações de nossas percepções
          e medos.
        </p>
      </main>
      <style jsx>{`
        main {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 20px;
        }
        h1,
        h2 {
          color: rgb(46, 141, 185);
        }
        .poem {
          font-style: italic;
          margin-bottom: 20px;
        }
        ul {
          margin: 10px 0;
          padding-left: 20px;
        }
      `}</style>
    </>
  );
}
