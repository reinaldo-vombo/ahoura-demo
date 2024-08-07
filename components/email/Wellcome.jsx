import {
   Body,
   Button,
   Container,
   Head,
   Hr,
   Html,
   Img,
   Preview,
   Section,
   Text,
} from "@react-email/components";
import * as React from "react";


const baseUrl = process.env.VERCEL_URL
   ? `https://${process.env.VERCEL_URL}`
   : "";

export const AhouraWelcomeEmail = ({ userName }) => (
   <Html>
      <Head />
      <Preview>
         The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
         <Container style={container}>
            <Img
               src={'https://ahoura.pages.dev/images/logo.svg'}
               width="170"
               height="50"
               alt="Ahoura logo"
               style={logo}
            />
            <Text style={paragraph}>Hi {userName},</Text>
            <Text style={paragraph}>
               Bem-vindo a Ahoura, a plataforma de inteligência de vendas que ajuda você a descobrir leads qualificados e
               fechar negócios mais rapidamente.
            </Text>
            <Section style={btnContainer}>
               <Button style={button} href="https://getkoala.com">
                  Começar
               </Button>
            </Section>
            <Text style={paragraph}>
               Best,
               <br />
               The Koala team
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
               470 Noor Ave STE B #1148, South San Francisco, CA 94080
            </Text>
         </Container>
      </Body>
   </Html>
);

AhouraWelcomeEmail.PreviewProps = {
   userFirstname: "Alan",
};

export default AhouraWelcomeEmail;

const main = {
   backgroundColor: "#ffffff",
   fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
   margin: "0 auto",
   padding: "20px 0 48px",
};

const logo = {
   margin: "0 auto",
};

const paragraph = {
   fontSize: "16px",
   lineHeight: "26px",
};

const btnContainer = {
   textAlign: "center",
};

const button = {
   backgroundColor: "#5F51E8",
   borderRadius: "3px",
   color: "#fff",
   fontSize: "16px",
   textDecoration: "none",
   textAlign: "center",
   display: "block",
   padding: "12px",
};

const hr = {
   borderColor: "#cccccc",
   margin: "20px 0",
};

const footer = {
   color: "#8898aa",
   fontSize: "12px",
};
