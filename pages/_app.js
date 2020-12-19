import '../styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <meta property="og:image" content="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F131074748_3878823108809144_3404268910673090530_n.jpg%3Foh%3D82c1cc0960072ed6bcea7d414187ea50%26oe%3D5FE3713F&t=l&u=555137371597%40c.us&i=1608142426&n=syPb%2FbZF86Z9eqFXYL5%2FeGCgXmfsZe%2Fcq1oTNbd55pQ%3D" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
