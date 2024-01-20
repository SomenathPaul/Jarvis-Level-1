const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1.7;
  text_speak.volume = 1;
  text_speak.pitch = 1;
  text_speak.lang = "en-HI";

  window.speechSynthesis.speak(text_speak);
}
const user = "sir";

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Boss...");
  } else if (hour > 12 && hour < 17) {
    speak("Good Afternoon master...");
  } else {
    speak("Good Evening" + user);
  }
}

window.addEventListener("load", () => {
  speak("System online, I'm activated!");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

recognition.continuous = true;

btn.addEventListener("click", () => {
  content.textContent = "Listening....";
  recognition.start();
});

function takeCommand(message) {
  if (message.includes("hey") ||
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hello jarvis")) {
    speak("Hello " + user + ", How May I Help You?");
  } else if (
    message.includes("hold jarvis") ||
    message.includes("hold on jarvis") ||
    message.includes("hold on") ||
    message.includes("wait for a second jarvis")
  ) {
    speak("okay" + user + " i'll waiting");
  } else if (
    message.includes("how are you") ||
    message.includes("what is going on jarvis") ||
    message.includes("how are you jarvis") ||
    message.includes("what's up")
  ) {
    speak("i'm great" + user + ". how about you?");
  } else if (
    message.includes("who are you") ||
    message.includes("tell me about yourself") ||
    message.includes("tell me somthing about you") ||
    message.includes("describe yourself") ||
    message.includes("who is jarvis")) {
    speak("Okay" + user + ",first of all, I am Jarvis. I am a vertual artificial intelligence. My purpose is to assist and provide information to the best of my ability. If you have any questions or need help with something, feel free to ask!");
  } else if (
    message.includes("love you") ||
    message.includes("i love you") ||
    message.includes("love you too") ||
    message.includes("i love you too")) {
    speak("Thank you," + user + "I appreciate your sentiment, but it's important to clarify that I am just a machine, I don't have feelings. However, I'm here to help provide information according to your command.");
  }
  //social media
  else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (message.includes("open instagram")) {
    window.open("https://instagram.com", "_blank");
    speak("Opening Instagram...");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speak(finalText);
  }
  //date time
  else if (
    message.includes("time") ||
    message.includes("tell me the time jarvis") ||
    message.includes("tell me the exact time")
  ) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speak("Time is:" + finalText);
  } else if (
    message.includes("date") ||
    message.includes("today's date") ||
    message.includes("tell me the date jarvis") ||
    message.includes("tell me the current date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speak("Today's Date is:" + finalText);
  }
  //open system app
  else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (message.includes("open Whatsapp")) {
    window.open("Whatsapp:///");
    speak("Opening WhatsApp...");
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on google";
    speak(finalText);
  }
}
