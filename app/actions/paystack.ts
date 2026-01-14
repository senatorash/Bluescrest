"use server";

interface InitializePaymentResponse {
  name: string;
  phone: string;
  caseType: string;
  message: string;
}

export const initializePayment = async (
  email: string,
  amount: number,
  metadata: InitializePaymentResponse
) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/transaction/initialize`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          amount: amount * 100,
          metadata: {
            name: metadata.name,
            phone: metadata.phone,
            subject: metadata.caseType,
            message: metadata.message,
          },
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to initialize payment");
    }
    const data = await response.json();
    return data.data.access_code;
  } catch (error) {
    // console.error("Error initializing payment:", error);
  }
};
