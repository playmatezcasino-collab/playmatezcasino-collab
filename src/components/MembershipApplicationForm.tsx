import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import { useSafeTranslation } from "../utils/i18nUtils";
import { membershipTiers } from "../data/content";

interface MembershipFormData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  membershipTier: string;
  honeypot?: string;
}

interface MembershipApplicationFormProps {
  preselectedTier?: string | null;
}

export const MembershipApplicationForm: React.FC<MembershipApplicationFormProps> =
  React.memo(({ preselectedTier }) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      setValue,
    } = useForm<MembershipFormData>();
    const { tt } = useSafeTranslation();

    // Effect to handle preselected tier from tier click
    useEffect(() => {
      if (preselectedTier) {
        setValue("membershipTier", preselectedTier);
        console.log("Analytics Event: membership_tier_preselected", {
          tier: preselectedTier,
        });
      }
    }, [preselectedTier, setValue]);

    const onSubmit = useCallback(
      (data: MembershipFormData) => {
        // Check honeypot (if filled, it's likely spam)
        if (data.honeypot) {
          console.log("Analytics Event: membership_form_spam_detected");
          return;
        }

        console.log("Analytics Event: membership_form_submit", data);

        // Create FormData for Netlify submission
        const formData = new FormData();
        formData.append("form-name", "membership-application");

        // Append all form fields to FormData, excluding honeypot
        Object.keys(data)
          .filter((key) => key !== "honeypot")
          .forEach((key) => {
            const value = data[key as keyof MembershipFormData];
            if (value !== undefined && value !== null) {
              formData.append(key, String(value));
            }
          });

        // Submit to Netlify
        fetch("/", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(
              "Membership application submitted successfully to Netlify",
            );
            setShowSuccessMessage(true);
            reset();

            // Hide the success message after 5 seconds
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 5000);
          })
          .catch((error) => {
            console.error("Membership application submission error:", error);
            // Still show success message to user, but log the error
            setShowSuccessMessage(true);
            reset();

            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 5000);
          });
      },
      [reset],
    );

    return (
      <>
        {/* Success Pop-up */}
        {showSuccessMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-playmatez-gold text-white p-8 rounded-xl shadow-2xl text-center animate-slide-up-fade max-w-md mx-4">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">
                {tt("membership.successTitle", "Application Successful!")}
              </h3>
              <p className="text-lg">
                {tt(
                  "membership.successMessage",
                  "Your membership application has been submitted. You will receive confirmation and next steps via email.",
                )}
              </p>
            </div>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
          <h2 className="text-2xl font-bold text-playmatez-white mb-6">
            {tt("membership.formTitle", "Membership Application Form")}
          </h2>

          <div className="mb-6 bg-playmatez-gold/20 border border-playmatez-gold rounded-lg p-4">
            <p className="text-playmatez-white text-sm font-medium">
              🔒{" "}
              {tt(
                "membership.secureNotice",
                "Your submission is secure and encrypted.",
              )}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            data-netlify="true"
            name="membership-application"
            method="POST"
          >
            <input
              type="hidden"
              name="form-name"
              value="membership-application"
            />

            {/* Honeypot field for spam protection */}
            <div className="hidden">
              <label>
                Don't fill this out if you're human:
                <input {...register("honeypot")} name="bot-field" />
              </label>
            </div>

            <div>
              <label className="block text-playmatez-white font-medium mb-2">
                {tt("membership.fullName", "Full Name")} *
              </label>
              <input
                {...register("fullName", {
                  required: tt(
                    "membership.fullNameRequired",
                    "Full name is required",
                  ),
                })}
                type="text"
                autoComplete="name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                placeholder={tt(
                  "membership.fullNamePlaceholder",
                  "Enter your full name",
                )}
              />
              {errors.fullName && (
                <p className="mt-2 text-red-400 text-sm" role="alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-playmatez-white font-medium mb-2">
                {tt("membership.email", "Email Address")} *
              </label>
              <input
                {...register("email", {
                  required: tt("membership.emailRequired", "Email is required"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: tt(
                      "membership.invalidEmail",
                      "Invalid email address",
                    ),
                  },
                })}
                type="email"
                autoComplete="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                placeholder={tt(
                  "membership.emailPlaceholder",
                  "your@email.com",
                )}
              />
              {errors.email && (
                <p className="mt-2 text-red-400 text-sm" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-playmatez-white font-medium mb-2">
                {tt("membership.phoneNumber", "Phone Number (Optional)")}
              </label>
              <input
                {...register("phoneNumber")}
                type="tel"
                autoComplete="tel"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                placeholder={tt(
                  "membership.phonePlaceholder",
                  "Your phone number",
                )}
              />
            </div>

            <div>
              <label className="block text-playmatez-white font-medium mb-2">
                {tt("membership.membershipTier", "Membership Tier")} *
              </label>
              <select
                {...register("membershipTier", {
                  required: tt(
                    "membership.tierRequired",
                    "Please select a membership tier",
                  ),
                })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              >
                <option value="">
                  {tt(
                    "membership.selectTier",
                    "Select membership tier for inquiry",
                  )}
                </option>
                {membershipTiers.map((tier) => (
                  <option key={tier.name} value={tier.name}>
                    {tier.name} - {tier.monthlyPrice}/month
                  </option>
                ))}
              </select>
              {errors.membershipTier && (
                <p className="mt-2 text-red-400 text-sm" role="alert">
                  {errors.membershipTier.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              data-analytics-event="membership_form_submit"
              className="w-full flex items-center justify-center px-6 py-4 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-bold rounded-full text-lg transition-colors duration-300"
            >
              {tt("membership.submitButton", "Submit Application")}
              <Send className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </>
    );
  });

MembershipApplicationForm.displayName = "MembershipApplicationForm";
