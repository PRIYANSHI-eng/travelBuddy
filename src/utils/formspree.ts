export interface TravelRequestData {
  fullName: string;
  email: string;
  phone: string;
  tripType: string[];
  fromLocation: string;
  toLocation: string;
  travelDate: string;
  message?: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnneypvy";

export async function submitTravelRequest(
  data: TravelRequestData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Submission failed with status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Formspree submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit request",
    };
  }
}
