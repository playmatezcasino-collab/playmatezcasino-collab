/**
 * Helper function to detect if a string is an emoji character
 * @param str - The string to check
 * @returns boolean - True if the string is an emoji, false otherwise
 */
export const isEmoji = (str: string): boolean => {
  // Unicode regex to match emoji characters across various ranges
  const emojiRegex = /^[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F018}-\u{1F270}]|[\u{238C}-\u{2454}]|[\u{20D0}-\u{20FF}]$/u;
  return emojiRegex.test(str.trim());
};