"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import styles from "@/styles/quiz.module.css";

// Quiz data structure
const quizSteps = [
  {
    id: 1,
    title: "Your Travel Style",
    question: "What option best describes your preferred travel style?",
    options: [
      {
        id: "relaxed",
        label: "Relaxed",
        description: "I prefer leisure and relaxation",
        icon: "☀️",
        gradient: "none"
      },
      {
        id: "light",
        label: "Light Explorer",
        description: "Some activities, mostly leisure",
        icon: "🌴",
        gradient: "light"
      },
      {
        id: "moderate",
        label: "Balanced",
        description: "Mix of activities and relaxation",
        icon: "⚖️",
        gradient: "moderate"
      },
      {
        id: "adventure",
        label: "Adventurous",
        description: "Packed with activities",
        icon: "🏔️",
        gradient: "heavy"
      }
    ]
  },
  {
    id: 2,
    title: "Travel Duration",
    question: "How long are you planning to travel?",
    options: [
      {
        id: "weekend",
        label: "Weekend Getaway",
        description: "2-3 days",
        icon: "📅",
        gradient: "none"
      },
      {
        id: "week",
        label: "One Week",
        description: "5-7 days",
        icon: "🗓️",
        gradient: "light"
      },
      {
        id: "twoweeks",
        label: "Two Weeks",
        description: "10-14 days",
        icon: "📆",
        gradient: "moderate"
      },
      {
        id: "extended",
        label: "Extended Trip",
        description: "15+ days",
        icon: "🌍",
        gradient: "heavy"
      }
    ]
  },
  {
    id: 3,
    title: "Budget Range",
    question: "What's your estimated budget per person?",
    options: [
      {
        id: "budget",
        label: "Budget-Friendly",
        description: "Under $1,500",
        icon: "💰",
        gradient: "none"
      },
      {
        id: "moderate",
        label: "Moderate",
        description: "$1,500 - $3,500",
        icon: "💵",
        gradient: "light"
      },
      {
        id: "comfortable",
        label: "Comfortable",
        description: "$3,500 - $6,000",
        icon: "💳",
        gradient: "moderate"
      },
      {
        id: "luxury",
        label: "Luxury",
        description: "$6,000+",
        icon: "💎",
        gradient: "heavy"
      }
    ]
  },
  {
    id: 4,
    title: "Group Size",
    question: "How many people will be traveling?",
    options: [
      {
        id: "solo",
        label: "Solo Traveler",
        description: "Just me",
        icon: "🧳",
        gradient: "none"
      },
      {
        id: "couple",
        label: "Couple",
        description: "2 people",
        icon: "💑",
        gradient: "light"
      },
      {
        id: "small",
        label: "Small Group",
        description: "3-5 people",
        icon: "👨‍👩‍👧",
        gradient: "moderate"
      },
      {
        id: "large",
        label: "Large Group",
        description: "6+ people",
        icon: "👨‍👩‍👧‍👦",
        gradient: "heavy"
      }
    ]
  }
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  const currentQuestion = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption) {
      setAnswers({ ...answers, [currentStep]: selectedOption });
      
      if (currentStep < quizSteps.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      } else {
        // Quiz completed, redirect to request form with pre-filled data
        router.push("/request");
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[currentStep - 1] || null);
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.quizContainer}>
        {/* Left Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.brandSection}>
              <div className={styles.iconWrapper}>
                <span className={styles.brandIcon}>✈️</span>
              </div>
              <h2 className={styles.brandTitle}>Your Travel Profile</h2>
            </div>

            <div className={styles.stepIndicator}>
              <span className={styles.stepLabel}>STEP {currentStep + 1}</span>
              <h3 className={styles.stepTitle}>{currentQuestion.title}</h3>
            </div>

            <p className={styles.sidebarDescription}>
              Curabitur vitae lacinia nulla. Aenean viverra felis vitae convallis malesuada. 
              Suspendisse vestibulum sit amet risus quis fermentum. Fusce sit amet nisl malesuada.
            </p>

            <div className={styles.didYouKnow}>
              <h4 className={styles.didYouKnowTitle}>DID YOU KNOW:</h4>
              <p className={styles.didYouKnowText}>
                Vivamus nec luctus nisl. Donec tempor odio sed sapien tempus, eget commodo 
                arci hendrerit. Donec eu tellus sed ex fermentum sodales.
              </p>
            </div>

            <a href="#" className={styles.contactLink}>
              Questions? <span className={styles.contactLinkBold}>Contact customer care.</span>
            </a>
          </div>
        </aside>

        {/* Main Quiz Area */}
        <div className={styles.quizMain}>
          {/* Progress Bar */}
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className={styles.progressSteps}>
              {quizSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`${styles.progressStep} ${
                    index <= currentStep ? styles.progressStepActive : ""
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Question Content */}
          <div className={styles.questionContainer}>
            <h1 className={styles.questionTitle}>{currentQuestion.question}</h1>

            {/* Options Grid */}
            <div className={styles.optionsGrid}>
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  className={`${styles.optionCard} ${
                    selectedOption === option.id ? styles.optionCardSelected : ""
                  }`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  {/* Gauge/Meter Icon */}
                  <div className={styles.gaugeContainer}>
                    <svg className={styles.gauge} viewBox="0 0 120 80" fill="none">
                      {/* Background Arc */}
                      <path
                        d="M 20 70 A 50 50 0 0 1 100 70"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Colored Arc based on gradient level */}
                      <path
                        d="M 20 70 A 50 50 0 0 1 100 70"
                        stroke={
                          option.gradient === "none" ? "#d1d5db" :
                          option.gradient === "light" ? "#34d399" :
                          option.gradient === "moderate" ? "#fbbf24" :
                          "#ef4444"
                        }
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${
                          option.gradient === "none" ? 20 :
                          option.gradient === "light" ? 50 :
                          option.gradient === "moderate" ? 100 :
                          157
                        } 157`}
                        fill="none"
                      />
                      {/* Needle */}
                      <line
                        x1="60"
                        y1="70"
                        x2={
                          option.gradient === "none" ? "35" :
                          option.gradient === "light" ? "45" :
                          option.gradient === "moderate" ? "60" :
                          "85"
                        }
                        y2={
                          option.gradient === "none" ? "45" :
                          option.gradient === "light" ? "35" :
                          option.gradient === "moderate" ? "30" :
                          "35"
                        }
                        stroke="#374151"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Center Circle */}
                      <circle cx="60" cy="70" r="4" fill="#374151" />
                    </svg>
                  </div>

                  {/* Option Text */}
                  <h3 className={styles.optionLabel}>{option.label}</h3>
                  <p className={styles.optionDescription}>{option.description}</p>

                  {/* Selection Indicator */}
                  {selectedOption === option.id && (
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

            {/* Navigation Buttons */}
            <div className={styles.navigationButtons}>
              <button
                className={styles.prevButton}
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                &lt; Last Question
              </button>
              <button
                className={styles.nextButton}
                onClick={handleNext}
                disabled={!selectedOption}
              >
                {currentStep === quizSteps.length - 1 ? "Complete Quiz" : "Next Question"} &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
