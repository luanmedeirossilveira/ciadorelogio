import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Cia do Relógio</title>
      <meta 
        name="description" 
        content="Troque sua pilha e/ou bateria de relógio, 
                de aparelhos eletrônicos(controle de carro, 
                aparelho auditivo, controle de portão, telefone sem fio, etc);
                compre seu relógio de pulso ou despertador. novidades: temos 
                também calculadora." />
      <meta 
        name="keywords" 
        content="relógio, bateria, pilha, 
                controle de carro, 
                aparelho auditivo, 
                controle de portão,
                telefone sem fio,
                eletrônicos em geral."/>
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="1 day" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
