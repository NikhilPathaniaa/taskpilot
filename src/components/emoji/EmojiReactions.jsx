import React, { useCallback, useEffect, useState } from "react";

const EmojiReactions = (props) => {
  const emoji = ["🥰", "🫡", "🤪", "😎", "🤑"];
  const storedCount = JSON.parse(localStorage.getItem("emojiCount"));
  const [count, setCount] = useState(storedCount || Array(emoji.length).fill(0));

  const [onHover, setOnHover] = useState(false);
  const handleHover = () => {
    setOnHover(true);
  };

  const handleEmojiSelect = useCallback(
    (emojiSymbol) => {
      const index = emoji.indexOf(emojiSymbol);
      console.log("handleEmojiSelect recreated");
      if (index !== -1) {
        // Update the count for the selected emoji
        const updatedCount = [...count]; // Make a copy of the current count array
        updatedCount[index] = updatedCount[index] + 1; // Increment count
        setCount(updatedCount); // Update state with the new count array

        localStorage.setItem("emojiCount", JSON.stringify(updatedCount));
      }
    },
    [emoji]
  );

  const handleRemoveEmojiSelect = (emojiSymbol) => {
    const index = emoji.indexOf(emojiSymbol);
    console.log("handleRemoveEmojiSelect recreated");
    if (index !== -1) {
      // Update the count for the selected emoji
      const updatedCount = [...count]; // Make a copy of the current count array
      updatedCount[index] = updatedCount[index] - 1; // Increment count
      setCount(updatedCount); // Update state with the new count array

      localStorage.setItem("emojiCount", JSON.stringify(updatedCount));
    }
  };

  useEffect(() => {
    // You can handle side effects like logging or others here if necessary
  }, [count]);

  return (
    <div>
      {onHover && (
        <div className="flex" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
          {emoji.map((emojiSymbol, index) => (
            <div key={index} onClick={() => handleEmojiSelect(emojiSymbol)} className="cursor-pointer hover:text-xl">
              {emojiSymbol}
            </div>
          ))}
        </div>
      )}
      <p className="bg-blue-400 p-3 w-[8rem] rounded-full text-center font-medium" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
        Hello World
      </p>
      <div className="flex">
        {/* Display the count for each emoji */}
        {emoji.map(
          (emojiSymbol, index) =>
            count[index] > 0 && (
              <div key={index} onClick={() => handleRemoveEmojiSelect(emojiSymbol)} className="cursor-pointer border-1 border-black p-1 rounded-full mr-2">
                {emojiSymbol} {count[index]} {/* Directly use the count[index] */}
              </div>
            )
        )}
      </div>
      <button onClick={()=> props.reset(2)} className="cursor-pointer text-2xl">Reset</button>
    </div>
  );
};

export default EmojiReactions;
