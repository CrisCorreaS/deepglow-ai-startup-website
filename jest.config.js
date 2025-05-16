module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/setupTests.js", 
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@testing-library/react$": "<rootDir>/node_modules/@testing-library/react",
    "^@testing-library/user-event$":
      "<rootDir>/node_modules/@testing-library/user-event",
  },
  transformIgnorePatterns: ["/node_modules/(?!supabase|@supabase)"],
  testPathIgnorePatterns: ["/node_modules/", "/.supabase/"],
};
