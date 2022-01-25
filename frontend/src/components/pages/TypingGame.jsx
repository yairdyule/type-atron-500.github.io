import axios from "axios";
import { useEffect, useState } from "react";
import TypingBox from "../typing/TypingBox";

export default function TypingGame() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypingBox />
    </div>
  );
}
