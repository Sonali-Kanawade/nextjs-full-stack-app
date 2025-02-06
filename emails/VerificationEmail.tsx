import * as React from 'react';
import { Html, Head, Text, Body, Container, Heading } from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export function VerificationEmail({username, otp}: VerificationEmailProps) {

  return (
    <Html lang="en">
      <Html lang='en' dir='ltr'>
        <Head>
            <title>Verifcation Code</title>
        </Head>
        <Body>
            <Container >
                <Heading >Coming Soon.</Heading>
                <Text>
                Thank you for joining our waitlist and for your patience. We
                will send you a note when we have something new to share.
                </Text>
            </Container>
        </Body>
      </Html>
    </Html>
  );
}

export default VerificationEmail;