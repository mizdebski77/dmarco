import { useRef } from "react"
import { Button, Form, Header, Input, PersonalData, TextArea, Wrapper } from "./styledContact";
import emailjs from '@emailjs/browser';



export const Contact = () => {

    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_k47acmb', 'template_t0nz22i', form.current, 'ki2mepyulrmg22NST',)
            .then((result) => {
                console.log(result.text);
                window.alert("Email was sent")
                if (result.text === "OK") {
                    event.target.reset();
                }
            }, (error) => {
                console.log(error.text);
                window.alert("UPS.. Somethign went wrong. Try again")
            });
    };



    return (
        <Wrapper id="contact">
            <Header>
                Contact
            </Header>
            <Form onSubmit={sendEmail} ref={form}>
                <PersonalData>
                    <Input name="name" placeholder="Your Name " />
                    <Input name="surname" placeholder="Your Surname " />
                </PersonalData>
                <Input name="email" required placeholder="Your Email *" />
                <Input name="subject" required placeholder="Your Subject *" />
                <TextArea name="message" required placeholder="Your Message *" />
                <Button> Send </Button>

            </Form>
        </Wrapper>
    )
}