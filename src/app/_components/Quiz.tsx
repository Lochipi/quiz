"use client";
import { useState } from "react";
import {
  Stepper,
  Button,
  Radio,
  Group,
  Text,
  Box,
  Card,
  Modal,
  Title,
} from "@mantine/core";
import { questions } from "../data/quiz";

const Quiz = () => {
  const [active, setActive] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const handleAnswerChange = (answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[active] = answer;
    setAnswers(updatedAnswers);
  };

  // Go to the next question
  const handleNext = () => {
    // Check if the current question is answered
    if (answers[active] === null) {
      setModalOpen(true);
      return;
    }

    // Check if it's the last question
    if (active === questions.length - 1) {
      setIsLastQuestion(true);
      setModalOpen(true);
    } else {
      setActive((current) => current + 1);
    }
  };

  // Go to the previous question
  const handlePrev = () => {
    if (active > 0) {
      setActive((current) => current - 1);
    }
  };

  // Calculate the user's score
  const calculateScore = () => {
    let calculatedScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index]?.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  };

  // Reseting the quiz
  const handleTryAgain = () => {
    setActive(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setScore(0);
  };

  const handleModalConfirm = () => {
    if (isLastQuestion) {
      calculateScore();
      setShowResult(true);
    } else {
      setActive((current) => current + 1);
    }
    setModalOpen(false);
    setIsLastQuestion(false);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
    setIsLastQuestion(false);
  };

  return (
    <Box className="min-h-60vh mx-auto mt-8">
      <Modal
        opened={modalOpen}
        onClose={handleModalCancel}
        title={isLastQuestion ? "Submit Quiz" : "Incomplete Answer"}
      >
        <Text>
          {isLastQuestion
            ? "Are you sure you want to submit the quiz?"
            : "You have not selected an answer. Do you want to proceed without answering?"}
        </Text>
        <Group ps="right" mt="md">
          <Button variant="outline" onClick={handleModalCancel}>
            Cancel
          </Button>
          <Button onClick={handleModalConfirm}>
            {isLastQuestion ? "Yes, Submit" : "Proceed Without Answer"}
          </Button>
        </Group>
      </Modal>

      {showResult ? (
        <>
          <Title className="mb-4" order={2}>
            You&apos;ve completed the quiz!
          </Title>
          <Text size="lg">
            You scored {score} out of {questions.length}
          </Text>
          <Text size="lg" mt="md">
            Your Answers:
          </Text>
          {questions.map((q, index) => (
            <Card className="min-w-5xl mt-4 p-4 shadow-lg" key={index}>
              <Text size="md" fw={500}>
                {q.question}
              </Text>
              <Text size="md" mt="sm">
                Your Answer: <strong>{answers[index]}</strong>
              </Text>
              <Text
                size="md"
                c={answers[index] === q.correctAnswer ? "green" : "red"}
                mt="xs"
              >
                Correct Answer: <strong>{q.correctAnswer}</strong>
              </Text>
            </Card>
          ))}
          <Button onClick={handleTryAgain} mt="md">
            Try Again
          </Button>
        </>
      ) : (
        <div>
          <Stepper
            active={active}
            onStepClick={setActive}
            allowNextStepsSelect={false}
          >
            {questions.map((q, index) => (
              <Stepper.Step key={index} label={`Question ${index + 1}`}>
                <Text size="lg" fw={500}>
                  {q.question}
                </Text>
                <Radio.Group
                  value={answers[active]}
                  onChange={handleAnswerChange}
                  required
                >
                  {q.options.map((option, i) => (
                    <Radio key={i} value={option} label={option} />
                  ))}
                </Radio.Group>
              </Stepper.Step>
            ))}
          </Stepper>

          <Group justify="center" mt="xl">
            <Button
              variant="default"
              onClick={handlePrev}
              disabled={active === 0}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {active === questions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </Button>
          </Group>
        </div>
      )}
    </Box>
  );
};

export default Quiz;
