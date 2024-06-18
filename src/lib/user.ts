export const userId =
  typeof window !== "undefined" ? localStorage.getItem("userId") : null;

export const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const transaction =
  typeof window !== "undefined" ? localStorage.getItem("transactionId") : null;
