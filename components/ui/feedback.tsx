"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, MessageCircle, GitBranch } from "lucide-react";
import { Label } from "./label";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

// Feedback form validation schema
const feedbackSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  rating: z.number().min(1, { message: "Please provide a rating" }).max(5),
  feedback: z
    .string()
    .min(10, { message: "Feedback must be at least 10 characters" }),
});

const FeedbackComponent = ({ userEmail }: { userEmail: string }) => {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [rating, setRating] = useState(0);

  // Initialize form with Zod schema
  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      email: userEmail,
      rating: 0,
      feedback: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof feedbackSchema>) => {
    try {
      // Simulated API endpoint - replace with actual endpoint
      const response = await fetch("/api/v1/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        form.reset();
        setRating(0);
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Feedback submission error:", error);
    }
  };

  // Star rating component
  const StarRating = () => {
    return (
      <>
        <div className="flex space-x-1 w-full">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`cursor-pointer w-8 h-8 transition-all duration-300 transform hover:scale-110 ${
                star <= rating
                  ? "text-[#1C4ED8] fill-[#1C4ED8]"
                  : "text-[#a1a1a1]"
              }`}
              onClick={() => {
                setRating(star);
                form.setValue("rating", star);
              }}
            />
          ))}
        </div>
      </>
    );
  };

  // Additional buttons component
  const AdditionalActions = () => {
    return (
      <div className="mt-6 space-y-4">
        <div className="text-center">
          <h3 className="font-semibold mb-4 text-black dark:text-white">
            Want to Get More Involved?
          </h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/InTruder-Sec/reconswift-tool/discussions/28"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                className="
                  flex items-center space-x-2 
                  border-[#1C4ED8] text-reconswiftThemeColor 
                  hover:bg-[#1C4ED8]/10 
                  hover:text-reconswiftThemeColor
                  transition-all duration-300 
                  group-hover:scale-105
                "
              >
                <MessageCircle
                  className="
                    transition-transform duration-300 
                    group-hover:rotate-12
                  "
                />
                <span>Join Discussion</span>
              </Button>
            </a>
            <a
              href="https://github.com/InTruder-Sec/reconswift-tool"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                className="
                  flex items-center space-x-2 
                  border-[#0084C7] text-reconswiftThemeColor     
                  hover:bg-[#0084C7]/10 
                  hover:text-reconswiftThemeColor
                  transition-all duration-300 
                  group-hover:scale-105
                "
              >
                <GitBranch
                  className="
                    transition-transform duration-300 
                    group-hover:-rotate-12
                  "
                />
                <span>Contribute</span>
              </Button>
            </a>
          </div>
          <p className="mt-3 text-sm opacity-70 text-black dark:text-white">
            Join our community and help us improve!
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex items-center justify-center z-50 rounded-lg bg-white dark:bg-reconswiftDarkSecondary"
      style={{
        backgroundImage: `
          linear-gradient(
            135deg, 
            rgba(28, 78, 216, 0.1) 0%, 
            rgba(28, 78, 216, 0.05) 100%
          )
        `,
      }}
    >
      <Card className="w-full max-w-md shadow-xl rounded-md border-[#a1a1a1]/20 transition-all duration-500 hover:shadow-2xl bg-white dark:bg-reconswiftDarkSecondary">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold tracking-tight text-black dark:text-white">
            Share Your Feedback
          </CardTitle>
          <CardDescription className="text-sm text-black dark:text-white">
            We value your opinion and would love to hear from you
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submissionStatus === "success" ? (
            <div className="text-center py-8">
              <CheckCircle
                className="mx-auto mb-4 text-reconswiftThemeColor animate-bounce"
                size={64}
              />
              <p className="text-xl font-semibold text-reconswiftThemeColor  dark:text-white">
                Thank you for your feedback!
              </p>
              <AdditionalActions />
            </div>
          ) : submissionStatus === "error" ? (
            <div className="text-center py-8">
              <Image
                src="/wentwrong.gif"
                alt="something went wrong"
                className="mx-auto mb-2"
                width={120}
                height={120}
              />
              <p className="text-red-600">
                Submission failed. Please try again.
              </p>
            </div>
          ) : (
            <>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Email"
                            {...field}
                            disabled
                            className="border-[#a1a1a1] focus:border-[#1C4ED8] bg-gray-100 dark:bg-reconswiftDarkSecondary dark:border-reconswiftBorder dark:text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white">
                          Rate your experience
                        </FormLabel>
                        <StarRating />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black dark:text-white dark:bg-reconswiftDarkSecondary">
                          Feedback
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what you think..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full group hover:bg-[#0084C7] bg-[#1C4ED8] text-white dark:bg-reconswiftSecondary dark:hover:bg-reconswiftPrimary dark:text-black"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-105">
                      Submit Feedback
                    </span>
                  </Button>
                </form>
              </Form>
              <AdditionalActions />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const FeedbackWrapper = () => {
  const [feedback, setFeedback] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { user } = useUser();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`
            flex items-center 
            bg-reconswiftPrimary dark:bg-reconswiftDarkSecondary
            rounded-full 
            overflow-hidden 
            transition-all 
            duration-300 
            ease-in-out 
            cursor-pointer
            shadow-lg 
            hover:shadow-2xl
            border border-reconswiftBorder
            ${isHovered ? "w-[360px]" : "w-[70px]"}
          `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setFeedback(!feedback)}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="p-4 rounded-full"
        />
        <span
          className={`
              text-reconswiftThemeColor
              font-semibold
              text-xl 
              whitespace-nowrap 
              pl-2 
              transition-all 
              duration-300 
              ${isHovered ? "opacity-100 w-full" : "opacity-0 w-0"}
            `}
        >
          Share Your Feedback
        </span>
      </div>

      {feedback && (
        <div className="mt-4">
          <FeedbackComponent
            userEmail={user?.emailAddresses[0].emailAddress || ""}
          />
        </div>
      )}
    </div>
  );
};

export default FeedbackWrapper;
