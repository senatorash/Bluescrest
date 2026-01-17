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

interface emailDataProps {
  logoLight: string;
  logoDark: string;
  companyName: string;
  name: string;
  phone: string;
  amount: string;
  reference: string;
  paymentChannel: string;
  paidAt: string;
}

export const ConsultationConfirmationEmail = ({
  logoLight,
  logoDark,
  companyName,
  name,
  phone,
  amount,
  reference,
  paymentChannel,
  paidAt,
}: emailDataProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 dark:bg-black font-sans">
          <Container className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-150 mx-auto">
            {/* Logo */}
            <Section className="text-center mb-4">
              <Img
                src={logoLight}
                alt="bluecrest attorneys"
                width="90"
                className="mx-auto block dark:hidden"
              />
              <Img
                src={logoDark}
                alt={companyName}
                width="90"
                className="mx-auto hidden dark:block"
              />
            </Section>

            <Heading className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
              Consultation Confirmed ✅
            </Heading>

            <Text className="text-gray-700 dark:text-gray-300 text-sm">
              Hi {name},
            </Text>

            <Text className="text-gray-700 dark:text-gray-300 text-sm">
              Your consultation has been successfully booked and your payment
              has been confirmed via Paystack.
            </Text>

            {/* Details Card */}
            <Section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
              <Hr className="my-3" />

              <Text className="text-sm text-gray-900 dark:text-gray-100">
                <strong>Amount Paid:</strong> {amount}
              </Text>
              <Text className="text-sm text-gray-900 dark:text-gray-100">
                <strong>Payment Channel:</strong> {paymentChannel}
              </Text>
              <Text className="text-sm text-gray-900 dark:text-gray-100">
                <strong>Reference:</strong> {reference}
              </Text>
              <Text className="text-sm text-gray-900 dark:text-gray-100">
                <strong>Paid At:</strong> {paidAt}
              </Text>

              <Text>
                Our team will contact you at <strong>{phone}</strong> within 24
                hours.
              </Text>
              <Hr />
            </Section>

            <Button
              href="#"
              className="bg-blue-600 text-white text-sm px-5 py-3 rounded-md block text-center"
            >
              View Consultation Details
            </Button>

            <Hr className="my-6" />

            <Text className="text-xs text-gray-500 dark:text-gray-400 text-center">
              This email serves as your payment receipt and consultation
              confirmation.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
