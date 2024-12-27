import { Container, Html, Preview } from "@react-email/components";
import { Body } from "./components/body";
import { Button } from "./components/button";
import { LeftAligned as Footer } from "./components/footer";
import { Head } from "./components/head";
import { LeftAlignedLinks as Header } from "./components/header";
import { Tailwind } from "./components/tailwind";
import { Text } from "./components/text";

export default function SimpleWelcome01() {
    return (
        <Html>
            <Tailwind>
                <Head />
                <Preview>Simple welcome 01</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-primary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full px-6 py-8">
                            <Text className="mb-8 text-tertiary tt-sm md:tt-md">
                                Hi Olivia,
                                <br />
                                <br />
                                We’re glad to have you onboard! You’re already on your way to creating beautiful visual products.
                                <br />
                                <br />
                                Whether you’re here for your brand, for a cause, or just for fun — welcome! If there’s anything you need, we’ll be here every
                                step of the way.
                                <br />
                                <br />
                                Thanks,
                                <br />
                                The team
                            </Text>
                            <Button href="#login">
                                <Text className="tt-md-semi">Log in</Text>
                            </Button>
                        </Container>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
