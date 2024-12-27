import {
  Container,
  Button as EmailButton,
  Html,
  Preview,
  Row,
  Section,
} from '@react-email/components';
import { Body } from './components/body';
import { Button } from './components/button';
import { LeftAligned as Footer } from './components/footer';
import { Head } from './components/head';
import { LeftAligned as Header } from './components/header';
import { Tailwind } from './components/tailwind';
import { Text } from './components/text';
import { cx } from '@/components/utils';

export default function SimpleVerification({
  otp,
  url,
}: {
  otp: string;
  url: string;
}) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Simple Verification</Preview>
        <Body>
          <Container
            align='center'
            className='w-full max-w-160 bg-primary md:p-8'>
            <Header />
            <Section
              align='left'
              className='max-w-full px-6 py-8'>
              <Row className='mb-6'>
                <Text className='text-tertiary'>
                  Hi Olivia,
                  <br />
                  <br />
                  This is your verification code:
                </Text>
              </Row>
              <Row className='mb-6 min-w-72'>
                {otp.split('').map((digit, index) => (
                  <EmailButton
                    key={index}
                    className={cx(
                      'rounded-[10px] bg-border-brand p-0.5',
                      index === 0 ? 'ml-0' : 'ml-2'
                    )}>
                    <Text className='size-11 rounded-lg bg-primary p-2 text-center align-middle text-brand-tertiary_alt td-md-md md:size-[62px] md:p-0 md:td-lg-md'>
                      {digit}
                    </Text>
                  </EmailButton>
                ))}
                {/* <EmailButton className="ml-2 rounded-[10px] bg-border-brand p-0.5">
                                    <Text className="size-11 rounded-lg bg-primary p-2 text-center align-middle text-brand-tertiary_alt td-md-md md:size-[62px] md:p-0 md:td-lg-md">
                                        0
                                    </Text>
                                </EmailButton>
                                <EmailButton className="ml-2 rounded-[10px] bg-border-brand p-0.5">
                                    <Text className="size-11 rounded-lg bg-primary p-2 text-center align-middle text-brand-tertiary_alt td-md-md md:size-[62px] md:p-0 md:td-lg-md">
                                        6
                                    </Text>
                                </EmailButton>
                                <EmailButton className="ml-2 rounded-[10px] bg-border-brand p-0.5">
                                    <Text className="size-11 rounded-lg bg-primary p-2 text-center align-middle text-brand-tertiary_alt td-md-md md:size-[62px] md:p-0 md:td-lg-md">
                                        6
                                    </Text>
                                </EmailButton> */}
              </Row>
              <Row className='mb-6'>
                <Text className='text-tertiary tt-md'>
                  This code will only be valid for the next 10 minutes. If the
                  code does not work, you can use this login verification link:
                </Text>
              </Row>
              <Row className='mb-6'>
                <Button
                  href={url}
                  className='mb-6'>
                  <Text className='tt-md-semi'>Verify email</Text>
                </Button>
              </Row>
              <Row>
                <Text className='text-tertiary tt-md'>
                  Thanks,
                  <br />
                  The team
                </Text>
              </Row>
            </Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
