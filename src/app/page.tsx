"use client";

import * as React from "react";
import { Plus, Star } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CodeEditor from "@/components/CodeEditor";
import ChatDisplay from "@/components/ChatDisplay";
import { ResetIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="h-screen w-full">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(layout) => {
            console.log(layout);
          }}
          className="h-full  max-h-[800px] items-stretch"
        >
          <ResizablePanel defaultSize={60} minSize={30}>
            <Tabs defaultValue="all">
              <div className="flex items-center px-4 py-2">
                <h1 className="text-xl font-bold">Snippy</h1>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="ml-auto "
                      onClick={() => console.log("New message")}
                    >
                      <ResetIcon className="h-4 w-4" />
                      <span className="sr-only">Reset</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Reset</TooltipContent>
                </Tooltip>
              </div>
              <Separator />
              <CodeEditor />
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={25} defaultSize={40}>
            <ChatDisplay />
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}

export default Page;
