import { useState } from "react";
import "./TerminalPage.css";

const PW_REQUIRED_MSG = `PASSWORT ERFORDERLICH`;
const RIDDLE_MSG = `Gesucht wird der Name einer Veranstaltung.

Sie war nie groß.
Sie war nie öffentlich.
Aber für die Menschen die dabei waren, war sie was Besonderes.

Manche Namen kennt man in der ganzen Welt. 
Diesen kennen nur eine Handvoll.`;

const HINT_MSG = `Hinweis: F _ _ M _ E _`;

const INCORRECT_PASSWORD_MSG = `Falsches Passwort! Versuche es erneut oder tippe "hint" für einen Hinweis.`;

function TerminalPage(args: { verifyPassword: (password: string) => boolean }) {
  const { verifyPassword } = args;

  const [chatLog, setChatLog] = useState<string[]>([PW_REQUIRED_MSG, RIDDLE_MSG]);
  const [isLoading, setIsLoading] = useState(false);

  function showHintMessage() {
    setChatLog((prevLog) => [...prevLog, HINT_MSG]);
  }

  function showIncorrectPasswordMessage() {
    setChatLog((prevLog) => [...prevLog, INCORRECT_PASSWORD_MSG]);
  }

  function showUserInput(input: string) {
    setChatLog((prevLog) => [...prevLog, `> ${input}`]);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (isLoading) return;
      const inputElement = e.target as HTMLInputElement;
      const inputText = inputElement.value;
      inputElement.value = "";
      if (!inputText) return;
      showUserInput(inputText);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        if (verifyPassword(inputText)) return;
        if (inputText.toLowerCase() === "hint") return showHintMessage();
        return showIncorrectPasswordMessage();
      }, 500);
    }
  }

  return (
    <div className="terminal-page">
      <div className="chat-log">
        <div className="terminal-output">
          {[...chatLog].reverse().map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </div>
        <span className="terminal-input">
          <span>{"> "}</span>
          <input name="terminal-input" type="text" onKeyDown={handleKeyDown} />
        </span>
      </div>
    </div>
  );
}

export default TerminalPage;
