"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { submitTravelRequest, TravelRequestData } from "@/utils/formspree";
import styles from "@/styles/travel-request.module.css";

export default function RequestForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    // Step 1
    tripType: [] as string[],
    
    // Step 2
    fromLocation: "",
    toLocation: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    
    // Step 3
    budgetRange: [500, 3000] as [number, number],
    travelStyle: "",
    interests: [] as string[],
    
    // Step 4
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const services = [
    { id: "flight", name: "Flights", icon: "✈️", description: "Book your flights" },
    { id: "hotel", name: "Hotels", icon: "🏨", description: "Find accommodation" },
    { id: "visa", name: "Visa Assistance", icon: "📄", description: "Visa support" },
  ];

  const travelStyles = [
    { id: "budget", name: "Budget", description: "Save on travel costs" },
    { id: "comfortable", name: "Comfortable", description: "Balance price and comfort" },
    { id: "premium", name: "Premium", description: "Luxury experience" },
  ];

  const interestOptions = [
    { id: "relax", name: "Relax", icon: "🏖️" },
    { id: "adventure", name: "Adventure", icon: "🏔️" },
    { id: "family", name: "Family", icon: "👨‍👩‍👧‍👦" },
    { id: "honeymoon", name: "Honeymoon", icon: "💑" },
    { id: "food", name: "Food & Culture", icon: "🍽️" },
    { id: "business", name: "Business", icon: "💼" },
  ];

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      tripType: prev.tripType.includes(serviceId)
        ? prev.tripType.filter((s) => s !== serviceId)
        : [...prev.tripType, serviceId],
    }));
  };

  const toggleInterest = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.tripType.length > 0;
      case 2:
        return formData.fromLocation && formData.toLocation && formData.startDate && formData.endDate;
      case 3:
        return formData.travelStyle !== "";
      case 4:
        return formData.fullName && formData.phone;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setError(null);
    setIsSubmitting(true);

    // Prepare data for Formspree
    const submissionData: TravelRequestData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      tripType: formData.tripType,
      fromLocation: formData.fromLocation,
      toLocation: formData.toLocation,
      travelDate: `${formData.startDate} to ${formData.endDate}`,
      message: `Travelers: ${formData.travelers}\nBudget: $${formData.budgetRange[0]} - $${formData.budgetRange[1]}\nTravel Style: ${formData.travelStyle}\nInterests: ${formData.interests.join(", ")}\n\n${formData.message}`,
    };

    const result = await submitTravelRequest(submissionData);

    if (result.success) {
      router.push("/thank-you");
    } else {
      setError(result.error || "Failed to submit request. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <span className={styles.progressText}>Step {currentStep} of 4</span>
        </div>
        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar}
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      {/* Step 1: Services Selection */}
      {currentStep === 1 && (
        <div className={styles.stepContent}>
          <h1 className={styles.stepTitle}>What do you need help with?</h1>
          <p className={styles.stepSubtitle}>Select one or more services</p>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`${styles.serviceCard} ${
                  formData.tripType.includes(service.id) ? styles.serviceCardSelected : ""
                }`}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Trip Information */}
      {currentStep === 2 && (
        <div className={styles.stepContent}>
          <h1 className={styles.stepTitle}>Basic Trip Information</h1>
          <p className={styles.stepSubtitle}>Tell us about your travel plans</p>

          <div className={styles.formGroup}>
            <label className={styles.label}>From</label>
            <input
              type="text"
              placeholder="Your city"
              value={formData.fromLocation}
              onChange={(e) => updateFormData({ fromLocation: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Destination</label>
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={formData.toLocation}
              onChange={(e) => updateFormData({ toLocation: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.dateGroup}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => updateFormData({ startDate: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => updateFormData({ endDate: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Number of Travelers</label>
            <div className={styles.counterContainer}>
              <button
                type="button"
                onClick={() => updateFormData({ travelers: Math.max(1, formData.travelers - 1) })}
                className={styles.counterButton}
              >
                −
              </button>
              <span className={styles.counterValue}>{formData.travelers}</span>
              <button
                type="button"
                onClick={() => updateFormData({ travelers: formData.travelers + 1 })}
                className={styles.counterButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Preferences */}
      {currentStep === 3 && (
        <div className={styles.stepContent}>
          <h1 className={styles.stepTitle}>Your Preferences</h1>
          <p className={styles.stepSubtitle}>Help us personalize your trip</p>

          <div className={styles.formGroup}>
            <label className={styles.label}>Budget Range (USD)</label>
            <div className={styles.budgetDisplay}>
              <span>${formData.budgetRange[0]}</span>
              <span>—</span>
              <span>${formData.budgetRange[1]}</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="100"
              value={formData.budgetRange[1]}
              onChange={(e) => updateFormData({ 
                budgetRange: [formData.budgetRange[0], parseInt(e.target.value)] as [number, number]
              })}
              className={styles.slider}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Travel Style</label>
            <div className={styles.travelStyleGrid}>
              {travelStyles.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => updateFormData({ travelStyle: style.id })}
                  className={`${styles.travelStyleCard} ${
                    formData.travelStyle === style.id ? styles.travelStyleSelected : ""
                  }`}
                >
                  <div className={styles.radioCircle}>
                    {formData.travelStyle === style.id && <div className={styles.radioInner} />}
                  </div>
                  <div>
                    <h4 className={styles.travelStyleName}>{style.name}</h4>
                    <p className={styles.travelStyleDescription}>{style.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Interests (Optional)</label>
            <div className={styles.interestGrid}>
              {interestOptions.map((interest) => (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => toggleInterest(interest.id)}
                  className={`${styles.interestChip} ${
                    formData.interests.includes(interest.id) ? styles.interestChipSelected : ""
                  }`}
                >
                  <span className={styles.interestIcon}>{interest.icon}</span>
                  {interest.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Contact Details */}
      {currentStep === 4 && (
        <div className={styles.stepContent}>
          <h1 className={styles.stepTitle}>Contact Details</h1>
          <p className={styles.stepSubtitle}>How should we reach you?</p>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Full Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => updateFormData({ fullName: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              value={formData.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email (Optional)</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Additional Message (Optional)</label>
            <textarea
              placeholder="Any specific requirements or questions..."
              value={formData.message}
              onChange={(e) => updateFormData({ message: e.target.value })}
              className={styles.textarea}
              rows={4}
            />
          </div>

          <div className={styles.helperText}>
            💬 Our travel expert will personally contact you to finalize and book your trip.
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className={styles.buttonContainer}>
        {currentStep > 1 && (
          <button type="button" onClick={prevStep} className={styles.backButton}>
            Back
          </button>
        )}
        
        {currentStep < 4 ? (
          <button 
            type="button"
            onClick={nextStep} 
            className={styles.continueButton}
            disabled={!isStepValid()}
          >
            Continue
          </button>
        ) : (
          <button 
            type="button"
            onClick={handleSubmit} 
            className={styles.submitButton}
            disabled={!isStepValid() || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Travel Request"}
          </button>
        )}
      </div>
    </div>
  );
}
