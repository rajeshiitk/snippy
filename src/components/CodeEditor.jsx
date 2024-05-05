import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { PlayIcon } from "lucide-react";

const CodeEditor = () => {
  const { theme } = useTheme();
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    console.log(language);
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="flex w-full h-full gap-4">
      <div className="w-full">
        <div className="flex justify-between items-center p-1">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Button variant={"outline"} onClick={() => console.log(value)}>
            <PlayIcon size={24} />
            Run
          </Button>
        </div>
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
            wordWrap: "on",
            autoClosingBrackets: "always",
          }}
          height={"100%"}
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
};
export default CodeEditor;
