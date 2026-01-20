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

interface EmailDataProps {
  logoLight: string;
  logoDark: string;
  companyName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consultationDate: string;
  consultationTime: string;
  reference: string;
}

export const AdminConsultationAlertEmail = ({
  logoDark,
  logoLight,
  companyName = "BLUECREST ATTORNEYS",
  name,
  email,
  phone,
  message,
  consultationDate,
  consultationTime,
  reference,
}: EmailDataProps) => (
  <Html>
    <Tailwind>
      <Head />
      <Body className="bg-gray-100 dark:bg-black font-sans">
        <Container className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-150 mx-auto">
          <Section className="text-center mb-4">
            <Img
              src={logoLight}
              className="bg-[#0a1f44] p-3 rounded-xl mx-auto block dark:hidden w-22.5"
            />
            <Img src={logoDark} className="mx-auto hidden dark:block w-22.5" />
          </Section>

          <Heading className="text-lg font-bold text-gray-900 dark:text-white text-center">
            New Paid Consultation 💳
          </Heading>

          <Section className="mt-4">
            <Text className="text-sm">
              <strong>Name:</strong> {name}
            </Text>
            <Text className="text-sm">
              <strong>Email:</strong> {email}
            </Text>
            <Text className="text-sm">
              <strong>Phone:</strong> {phone}
            </Text>
            <Text className="text-sm">
              <strong>Consultation Date:</strong> {consultationDate}
            </Text>
            <Text className="text-sm">
              <strong>Consultation Time:</strong> {consultationTime}
            </Text>
          </Section>

          <Section className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
            <Text className="text-sm text-gray-900 dark:text-gray-100">
              {message}
            </Text>
          </Section>

          <Section className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
            <Text className="text-sm">
              <strong>Reference:</strong> {reference}
            </Text>
          </Section>

          <Button
            href={`mailto:${email}`}
            className="bg-blue-600 text-white px-5 py-3 rounded-md mt-5 block text-center"
          >
            Reply to Client
          </Button>

          <Hr className="my-6" />

          <Text className="text-xs text-gray-500 dark:text-gray-400 text-center">
            This is an automated notification for a successfully paid
            consultation.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
