import { Plus, Share2Icon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Chat from "./Chat";
import ThemeToggle from "./ThemeToggle";

export default function ChatDisplay() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Clear History</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Clear history</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Share2Icon className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="ml-auto rounded-full"
                onClick={() => console.log("New message")}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">New message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>New message</TooltipContent>
          </Tooltip>
        </div>
        <ThemeToggle />
      </div>
      <Separator />
      <Chat />
    </div>
  );
}
