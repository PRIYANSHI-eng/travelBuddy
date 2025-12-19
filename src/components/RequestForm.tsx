"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { submitTravelRequest, TravelRequestData } from "@/utils/formspree";
import styles from "@/styles/request.module.css";

export default function RequestForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
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
      setDirection(1);
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
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
    console.log("Submit button clicked!");
    setError(null);
    setIsSubmitting(true);

    try {
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

      console.log("Submitting data:", submissionData);
      const result = await submitTravelRequest(submissionData);
      console.log("Submission result:", result);

      if (result.success) {
        // Redirect with success parameter
        console.log("Submission successful, redirecting...");
        router.push("/thank-you?submitted=true");
      } else {
        setError(result.error || "Failed to submit request. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className={styles.requestContainer}>
      {/* Left Sidebar with Image Background */}
      <aside className={styles.sidebar}>
        {/* Background Image */}
        <div className={styles.sidebarBackground}></div>
        
        {/* Dark Gradient Overlay */}
        <div className={styles.sidebarOverlay}></div>
        
        {/* Sidebar Content */}
        <div className={styles.sidebarContent}>
          <div className={styles.brandSection}>
            <h2 className={styles.brandTitle}>Your Travel Request</h2>
            <p className={styles.brandSubtitle}>
              Tell us your travel dreams, we&apos;ll make them reality
            </p>
          </div>

          {/* Vertical Timeline Progress Indicator */}
          <div className={styles.timelineContainer}>
            {[
              { id: 1, title: "Services Selection" },
              { id: 2, title: "Trip Details" },
              { id: 3, title: "Your Preferences" },
              { id: 4, title: "Contact Information" }
            ].map((step, index) => (
              <div 
                key={step.id} 
                className={`${styles.timelineStep} ${
                  index + 1 === currentStep ? styles.timelineStepActive : ""
                } ${index + 1 < currentStep ? styles.timelineStepCompleted : ""}`}
              >
                <div className={styles.timelineMarker}>
                  {index + 1 < currentStep ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.inspirationalText}>
            <p>&quot;The world is a book, and those who do not travel read only one page.&quot;</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Progress Bar */}
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
          <div className={styles.progressSteps}>
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`${styles.progressStep} ${
                  step <= currentStep ? styles.progressStepActive : ""
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <AnimatePresence mode="wait" custom={direction}>
          {/* Step 1: Services Selection */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.stepContent}
            >
              <h1 className={styles.questionTitle}>What services do you need for your trip?</h1>

              <div className={styles.optionsGrid}>
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`${styles.optionCard} ${
                      formData.tripType.includes(service.id) ? styles.optionCardSelected : ""
                    }`}
                  >
                    <div className={styles.serviceIconLarge}>{service.icon}</div>
                    <h3 className={styles.optionLabel}>{service.name}</h3>
                    <p className={styles.optionDescription}>{service.description}</p>
                    
                    {formData.tripType.includes(service.id) && (
                      <div className={styles.selectedIndicator}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Trip Information */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.stepContent}
            >
              <h1 className={styles.questionTitle}>Tell us about your travel plans</h1>

              <div className={styles.formGrid}>
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
            </motion.div>
          )}

          {/* Step 3: Preferences */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.stepContent}
            >
              <h1 className={styles.questionTitle}>What's your travel style and budget?</h1>

              <div className={styles.preferencesContainer}>
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
                  <div className={styles.optionsGrid}>
                    {travelStyles.map((style) => (
                      <button
                        key={style.id}
                        type="button"
                        onClick={() => updateFormData({ travelStyle: style.id })}
                        className={`${styles.optionCard} ${styles.optionCardSmall} ${
                          formData.travelStyle === style.id ? styles.optionCardSelected : ""
                        }`}
                      >
                        <h4 className={styles.optionLabel}>{style.name}</h4>
                        <p className={styles.optionDescription}>{style.description}</p>
                        
                        {formData.travelStyle === style.id && (
                          <div className={styles.selectedIndicator}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}
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
            </motion.div>
          )}

          {/* Step 4: Contact Details */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.stepContent}
            >
              <h1 className={styles.questionTitle}>How should we contact you?</h1>

              <div className={styles.formGrid}>
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

                <div className={styles.formGroupFull}>
                  <label className={styles.label}>Additional Message (Optional)</label>
                  <textarea
                    placeholder="Any specific requirements or questions..."
                    value={formData.message}
                    onChange={(e) => updateFormData({ message: e.target.value })}
                    className={styles.textarea}
                    rows={4}
                  />
                </div>
              </div>

              <div className={styles.helperText}>
                💬 Our travel expert will personally contact you to finalize and book your trip.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className={styles.navigationButtons}>
          <button
            type="button"
            onClick={prevStep}
            className={styles.prevButton}
            disabled={currentStep === 1}
          >
            &lt; Last Question
          </button>
          
          {currentStep < 4 ? (
            <button 
              type="button"
              onClick={nextStep} 
              className={styles.nextButton}
              disabled={!isStepValid()}
            >
              Next Question &gt;
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit} 
              className={styles.nextButton}
              disabled={!isStepValid() || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Complete Request"} &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
