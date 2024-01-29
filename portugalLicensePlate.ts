function generatePortugalLicenseNumber() {
  const validLetters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  const generateRandomString = (length) => (
    Array.from({ length }, () => validLetters[Math.floor(Math.random() * validLetters.length)]).join("")
  );
  const firstGroup = generateRandomString(2);
  const thirdGroup = generateRandomString(2);
  const monthNumber = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  return `${firstGroup}-${monthNumber}-${thirdGroup}`;
}

const randomPortugalLicenseNumber = generatePortugalLicenseNumber();
console.log("Random Portugal license plate:", randomPortugalLicenseNumber);
