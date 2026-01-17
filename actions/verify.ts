"use server";

export const verifyPayment = async (reference: string) => {
  try {
    if (!reference) {
      throw new Error("Missing reference");
    }
    const response = await fetch(
      `${process.env.BASE_URL}/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {}
};
