"use client";
import * as React from "react";
import { Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { useCompletion } from "ai/react";

export default function Chat() {
  const {
    completion,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    error,
    data,
    isLoading,
    complete,
  } = useCompletion();
  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
  ]);
  const [userInput, setUserInput] = React.useState("");
  // const [input, setInput] = React.useState("");
  const inputLength = input.trim().length;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim().length === 0) return;

    setMessages([
      ...messages,
      {
        role: "user",
        content: userInput,
      },
    ]);

    handleSubmit(event); // Make sure handleSubmit handles any API calls or additional functionality
    setInput("");
    setUserInput("");
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    handleInputChange(event);
  };

  React.useEffect(() => {
    if (!isLoading && completion) {
      console.log("completion: " + completion);
      setMessages((prevMessage) => [
        ...prevMessage,
        {
          role: "agent",
          content: completion,
        },
      ]);
    }
  }, [isLoading, completion]);

  return (
    <>
      <Card className="w-full max-h-full rounded-none ">
        <CardHeader className="flex h-fit flex-row items-center"></CardHeader>
        <CardContent>
          <div className="space-y-4 h-[360px]  overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
                {/* {data && (
                  <pre className="p-4 text-sm bg-gray-100">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                )}
                {error && (
                  <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
                    {error.message}
                  </div>
                )} */}
                {/* {completion} */}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={onSubmit}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={onInputChange}
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
