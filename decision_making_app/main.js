function myFunction() {
  const questionInput = document.querySelector("#question").value;

  const answerText = document.querySelector("#answer");

  let text = "";
  let number = Math.floor(Math.random() * 10);

  switch (number) {
    case 0:
      text =
        "Flip a coin and blame fate for your decisions – it's the most unbiased way!";
      break;
    case 1:
      text =
        "If in doubt, ask your pet. They usually have great advice, even if it's just 'treat yourself.";
      break;
    case 2:
      text =
        "Spin the wheel of destiny and see where it lands – it's like a game show for life choices!";
      break;
    case 3:
      text =
        "Consult a Magic 8-Ball – because who needs logic when you have an icosahedron full of wisdom?";
      break;
    case 4:
      text =
        "Take a walk in your squeakiest shoes. The louder they are, the more important your decision";
      break;
    case 5:
      text =
        "Write your options on paper airplanes and see which one flies the farthest – the farthest one wins!";
      break;
    case 6:
      text =
        "Channel your inner detective: pick the option that makes you feel the most like Sherlock Holmes.";
      break;
    case 7:
      text =
        "Ask your fridge for advice. It might just recommend the cheesiest option!";
      break;
    case 8:
      text =
        "Close your eyes, spin around three times, and point. Congratulations, you've just been chosen by the 'Spin of Destiny!";
      break;
    case 9:
      text =
        "Summon a council of rubber ducks for a quacking good decision-making session!";
      break;
  }
  console.log(answerText);
  answerText.textContent += " " + text;
}
