import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
  Hr,
  Img,
  Tailwind,
} from "@react-email/components";

export const ContactMessageNotificationEmail = ({
  logoLight = "https://your-company.com/logo-light.png",
  logoDark = "https://your-company.com/logo-dark.png",
  companyName = "Your Company",
  name = "John Doe",
  email = "johndoe@email.com",
  message = "Hello, I would like to know more about your services.",
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 dark:bg-black font-sans">
          <Container className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-150 mx-auto">
            <Section className="text-center mb-4">
              <Img
                src={logoLight}
                width="90"
                className="mx-auto block dark:hidden"
              />
              <Img
                src={logoDark}
                width="90"
                className="mx-auto hidden dark:block"
              />
            </Section>

            <Heading className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
              New Contact Message 📩
            </Heading>

            <Text className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Name:</strong> {name}
            </Text>
            <Text className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> {email}
            </Text>

            <Section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
              <Text className="text-sm text-gray-900 dark:text-gray-100">
                {message}
              </Text>
            </Section>

            <Button
              href={`mailto:${email}`}
              className="bg-blue-600 text-white text-sm px-5 py-3 rounded-md block text-center"
            >
              Reply to Message
            </Button>

            <Hr className="my-6" />

            <Text className="text-xs text-gray-500 dark:text-gray-400 text-center">
              This message was sent from your website contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
