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
          <p>
            "Insólito momento" "Ela gentil, coração contente Encantadora.." "Ele
            com a mente longe... coração extraordinariamente acanhado" "Os olhos
            dele nos dela mas não descortinavam a profundeza da sua
            sensibilidade" "Desvaneceu-se seu cintilar dos olhos dele,
            deslumbrou-se seu sentir e o sentimento dele silenciou-se…"
            "Exterminou-se mais um momento mais um encanto" "O que aconteceu! O
            que não aconteceu!" "Já não importava mais…" "É o enigma substancial
            da existência" "E assim absorveram 'algo' num bom ou mau momento"
          </p>
        </div>

        <h2>Decifração Literária</h2>
        <ul>
          <li>
            <strong>Título:</strong> "Insólito momento" sugere algo fora do
            comum, singular, talvez inesperado.
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
          color: #333;
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
